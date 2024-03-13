import RestoCard from "./RestoCard";
import restList from "../../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [ restaurantList, setRestaurantList ] = useState([]);
    
    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filterData = restaurantList.filter(res => res.info.avgRating > 4);
                setRestaurantList(filterData);
            }}>
                Top Rated Restaurants
            </button>
        </div>
        <div className="resto-container">
           { restaurantList.map(restaurant => <RestoCard key={restaurant.info.id} restoData={restaurant}></RestoCard>)}
         </div>
    </div>
    )
}
export default Body;