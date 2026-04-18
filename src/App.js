import React from "react";
import ReactDOM from "react-dom/client";
const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
import Header from "./compnents/Header";
import Body from "./compnents/Body";
import RestaurantCard from "./compnents/RestaurantCard";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/




const AppLayout = () => {
    return (
        <div className ="app">
            <Header/>
            <Body/>
            {/* //Footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)