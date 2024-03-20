import RestoCard from "./RestoCard";
import restList from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [ restaurantList, setRestaurantList ] = useState([]);
    const [ searchText, setSearchText ] = useState("");
    const [ filteredRes, setFilteredRes ] = useState([]);
   // whenever state variable changes/updtaes, reacts renrenders componenet or triggers reconcialition alogrithm

   // if no dependancy array, use effect called after every render
   // if dependancy array is empty = [] => useeffect will be called on initial render (only once)
   // if dependancy array is not empty then it will be only be called when dependency changes
    useEffect(() => {
        console.log("inside useeffect")
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // optional chaining
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // const postData = async (url = "https://analytics.swiggy.com/message-set",data = {
    //     "statusCode": 1,
    //     "statusMessage": "Lat or Lng is missing",
    //     "tid": "cac460c8-f38c-46cf-aae4-857b6096ac7e",
    //     "sid": "crk9714f-6afc-4807-9fbf-3cd0f231bf27",
    //     "deviceId": "d5e65e7a-4b9c-aac5-20c3-153acaa89fbd",
    //     "csrfToken": "pYOMx5ipKQLM-Uj2YQC1lrllfo-DmI1t6ZKLUR4M"
    //   }) => {
    //     const response = await fetch(url,
    //         {
    //         method: "post",
    //         mode: "cors",
    //         cache: "no-cache",
    //         credentials: "same-origin", 
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         redirect: "follow", // manual, *follow, error
    //         referrerPolicy: "no-referrer",
    //         body: JSON.stringify(data),
    //     });
    //     return response.json();
    // };
    // postData();
    // conditional rendering
 
    return restaurantList.length === 0 ? <Shimmer/> :  (
    <div className="body">
        <div className="filter">
            <div className="search">
                <input 
                type="text" 
                value={searchText} 
                onChange={(e) => {
                    setSearchText(e.target.value);
                }} 
                placeholder="Search"
                />
                <button onClick=
                    {() => {
                        // filter the restaurants and update ui
                        // search text
                        const filteredRes = restaurantList.filter((res) => {
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                        });
                        setFilteredRes(filteredRes);
                    }}
                >
                Search
                </button>
            </div>
            <button className="filter-btn" onClick={() => {
                const filterData = restaurantList.filter(res => res.info.avgRating > 4);
                setRestaurantList(filterData);
            }}>
                Top Rated Restaurants
            </button>
        </div>
        <div className="resto-container">
           { filteredRes.map(restaurant => <Link className="link" key={restaurant.info.id} to={"/restaurants/" +restaurant.info.id}><RestoCard  restoData={restaurant}></RestoCard></Link>)}
         </div>
    </div>
    )
}
export default Body;