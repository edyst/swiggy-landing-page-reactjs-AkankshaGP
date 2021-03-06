import React from 'react'
import Feature from './Feature'
import "./Features.css"
const Features = (props) => {
  return (
    <div className="Main-Container">
        <div className="flex-container">
           <Feature
           img="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
           title="No Minimum Order"
           className=""
           desc="Order in for yourself or for the group, with no restrictions on order value" />
          
           <Feature
           img="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
           title="Live Order Tracking"
           className=""
           desc="Know where your order is at all times, from the restaurant to your doorstep" />
           <Feature
           img="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
           title="Lightning-Fast Delivery"
           className="img-padding"
           desc="Experience Swiggy's superfast delivery for food delivered fresh & on time" /> 
    </div>
    </div>
  )
}

export default Features