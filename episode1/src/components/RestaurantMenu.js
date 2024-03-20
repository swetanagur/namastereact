import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {

    const [ restInfo, setRestInfo ] = useState(null);
    const { resId } = useParams();
    console.log(resId);

    useEffect(() => {
        fetchRestaurantMenu();
    },[]);

    const fetchRestaurantMenu = async () => {
        
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        //console.log(json?.data.cards[0]?.card?.card?.info);
        //console.log(json?.data);
        setRestInfo(json.data);
    }
    
    const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info || {};
    const { itemCards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    console.log(itemCards)

    return restInfo === null ? (<Shimmer/>) :(
        <div className="menu-container">
            <div>
                <h1>{name}</h1>
                
               <p>{cuisines.join(',')} - {costForTwoMessage}</p>
               <ul>
                    {itemCards.map((item, i) => {
                        return <li key={ item.card.info.id }>{ item.card.info.name } : { item.card.info.price/100} Rs</li>

                    })}
               </ul>

            </div>
        </div>
    )
}

export default RestaurantMenu;