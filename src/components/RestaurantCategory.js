import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, setShowIndexClose}) => {
    const handleClick = () => {
      if( showItems === true) {
        setShowIndexClose();
      } else {
        setShowIndex();
      }
    }
    return (
        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-4 shadow-md bg-gray-50 p-2 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                </div>
                <div>{ showItems && <ItemList items={data.itemCards} />}</div>
            </div>
            {/* body */}
            
        </div>
    )
}

export default RestaurantCategory;