import { CDN_URL } from "../utils/constants";

const styleSheet = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {

    const {resData} = props;
    const {cloudinaryImageId,areaName,cuisines,costForTwo,avgRating} = resData.info

    return (
        <div className="res-card" style={styleSheet}>
            <img className="res-logo" alt="res-logo"src = {CDN_URL+cloudinaryImageId} />
            <h2 className="res-name">{areaName}</h2>
            <h4 className="res-name">{cuisines.join(", ")}</h4>
            <h4 className="res-name">{costForTwo}</h4>
            <h4 className="res-name">{avgRating}</h4>
            <div className="res-details">
            </div>
        </div>
    )
}

export default RestaurantCard