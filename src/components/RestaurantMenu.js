import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
    const { resId } = useParams();
    const restInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState();
    const [showIndexClose, setShowIndexClose] = useState();
    if(restInfo === null) return (<Shimmer/>);

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = restInfo?.cards.length > 2 ? restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card : restInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
        <div className="text-center">
            <div>
                <h1 className="font-bold m-2">{name}</h1>
                
               <p className="m-2 p-2">{cuisines.join(',')} - {costForTwoMessage}</p>

                {
                   categories.map((category, index) => {
                    return <RestaurantCategory 
                            key={category.card.card.title} 
                            data={category?.card?.card} 
                            showItems={index === showIndex ? true : false} 
                            setShowIndex ={ () => { setShowIndex(index) }}
                            setShowIndexClose = {() => { setShowIndex(null)}}
                            />
                   }) 
                }

            </div>
        </div>
    )
}

export default RestaurantMenu;