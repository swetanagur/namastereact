import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  
    const [restInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchRestaurantMenu();
    },[]);

    const fetchRestaurantMenu = async () => {
        
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        
        setRestInfo(json.data);
    }
    
    return restInfo;

}

export default useRestaurantMenu;