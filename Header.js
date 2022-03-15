import React from 'react'

const Header = () => {
    return (
        <div className="banner1">
            <div className="banner_content w-60">
                <div className="container w-75">
                    <div class="navbar">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1280px-Swiggy_logo.svg.png" alt="logo" width="240px" >
                        </img>
                        <div class="nav-btns">
                            <button class="login">Login</button>
                            <button class="signup">Sign up</button>
                        </div>
                    </div>
                    <div className="banner_text">
                        <p class="head">Cooking Gone Wrong</p>
                        <p class="sub-head">Order food  from favourite restaurants near you. </p>
                    </div>
                    <div class="flex-row">
                        <div class="search-box">
                            <input type="text" placeholder="Enter your Delivery location" class="search-input"></input>
                            <button class="locate-me">Locate me</button>
                        </div>
                        <button class="search-btn">FIND FOOD</button>
                    </div>
                    <p class="sub-head-city">
                        POPULAR CITIES IN INDIA</p>
                    <div class="flex-row">
                        <p class="city">Ahemdabad</p>
                        <p class="city">Bengaluru</p>
                        <p class="city">Chennai</p>
                        <p class="city">Delhi</p>
                        <p class="city">Gurgaon</p>
                        <p class="city">Hydrabad</p>
                        <p class="city">Kolkata</p>
                        <p class="city">Mumbai</p>
                       <p class="city">Pune</p>
                        <p class="city">&more</p>
                        
                    </div>
                </div>
            </div>
            <div className="banner_img w-40">
                <img src="https://web.archive.org/web/20220310220346im_/https:/res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="banner" height="100%" width="100%">
                </img>
            </div>
        </div>


    )
}

export default Header