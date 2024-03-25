import { useEffect, useState } from "react";
import { json } from "react-router";

const useFetchData = () => {
  
    const [ filteredRes, setFilteredRes ] = useState([]);
    const [ restaurantList, setRestaurantList ] = useState([]);
    console.log("inside usefecthdata function");
    useEffect(() => {
        fetchRestData();
    });

    const fetchRestData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log("data", json);
    }
    return [filteredRes,restaurantList];
}

export default useFetchData;