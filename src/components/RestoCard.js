import { CDN_URL } from "../../utils/constants";

export const RestoCard = ({restoData}) => {
    const { info } = restoData;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = info;
        return (
            <div className="m-4 w-[215px] h-[420px] bg-gray-100 p-2 shadow-lg">
                <img src={ CDN_URL + cloudinaryImageId} className="bg-contain w-[230px] h-[150px]"></img>
                <h3 className="font-bold py-1 text-lg">{name}</h3>
                <h5 className="py-2">{cuisines.join(',')}</h5>
                <h5 className="py-1">{avgRating}</h5>
                <h5 className="py-1">{costForTwo}</h5>
            </div>
        )
    };

// higher order component
// input restaurant card ,output enhanced restaurant card

export const promotedWithLabel = (RestoCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-1 m-1 rounded-sm">Promoted</label>
                <RestoCard {...props}/>
            </div>
        )
    }
}

export default RestoCard;


