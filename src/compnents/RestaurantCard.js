import {CDN_URL} from "../utils/constants";
const RestaurantCard =(props) =>{

  // Destructure 'data' because that's what you named the prop in <RestaurantCard data={...} />
  const { data } = props;

  // Now destructure the fields directly from 'data'
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    costForTwoString,
  } = data;
  
  
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
             <img className="res-logo" src={CDN_URL + cloudinaryImageId} />

            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwoString}</h4>
        </div>
    )
}

export default RestaurantCard;