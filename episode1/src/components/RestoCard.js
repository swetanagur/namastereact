import { CDN_URL } from "../../utils/constants";

export const RestoCard = ({restoData}) => {
    const { info } = restoData;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = info;
        return (
            <div className="resto-card">
                <img src={ CDN_URL + cloudinaryImageId} className="resto-logo"></img>
                <h3>{name}</h3>
                <h5>{cuisines.join(',')}</h5>
                <h5>{avgRating}</h5>
                <h5>{costForTwo}</h5>
    
            </div>
        )
    };

export default RestoCard;
