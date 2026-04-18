import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Master list (never filtered)
    const [allRestaurants, setAllRestaurants] = useState([]);
    // The list we actually display on screen
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    // for input box of search fucntion
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Note: If you get a CORS error, add "https://corsproxy.io/?" before the URL
            const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4452885&lng=81.8248057&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();

            // Based on your hierarchy: cards[4] -> card -> card -> gridElements -> infoWithStyle -> restaurants
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setAllRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Conditional Rendering (Shimmer UI)
    if (allRestaurants.length === 0) {
        return <Shimmer></Shimmer>; 
    }

    return (
        <div className="body"> 
            <div className="filter">
                <div className="search">
                    <input type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}>

                    </input>
                    <button onClick={()=>{
                        // filter the restaurant cards and update the UI
                        // search text
                        console.log(searchText);
                        const filteredList = allRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        if(filteredList.length === 0){
                            // if no restaurant matches the search criteria, show an alert
                            alert("No restaurant found with the given name");
                        }
                        else{
                            setFilteredRestaurants(filteredList);
                        }


                    }}
                    >Search</button>
                </div>
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        // Filter from the MASTER list, but set the FILTERED state
                        const filteredList = allRestaurants.filter(
                            (res) => res.info.avgRating >= 4.5
                        );
                        setFilteredRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                
                {/* Optional: Add a Reset Button */}
                <button onClick={() => setFilteredRestaurants(allRestaurants)}>
                    Show All
                </button>
            </div>

            <div className="res-container">
                {/* Map over the FILTERED list */}
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} data={restaurant.info} />
                ))}
            </div>
        </div>
    );
};

export default Body;