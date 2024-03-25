import { MENU_IMG } from "../../utils/constants";

const ItemList = ({items}) => {
    return (
        <div>
           <div className="m-2 text-left">
                { items.map((item) => {
                    const { id, name, price, defaultPrice,description, imageId } = item?.card?.info;
                    return (
                        <div key={id}  className="flex justify-between m-4 place-items-center border-gray-200 border-b-2">
                            <div className="m-8 w-9/12">
                                <div  className="py-1 font-bold">{name}</div> 
                                <p className="font-medium"><span>&#8377;</span> {(price || defaultPrice)/100}</p>
                                <p className="py-2 font-light text-sm">{description}</p>
                            </div>
                            <div className="w-3/12">
                                <img src={MENU_IMG + imageId} className="h-auto"></img>
                            </div>
                        </div>
                
                       
                    )
                })}
           </div>
        </div>
    )
}

export default ItemList;