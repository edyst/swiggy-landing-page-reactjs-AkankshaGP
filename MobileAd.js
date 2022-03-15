import React from 'react'
import "./MobileAd.css"



const MobileAd = (props) => {
  return (
    <div id="container">
      <div className='leftside'>
        <div className='flexleftside'>
     <h1 className='Resto'>Restaurants in your pocket</h1>
     <p className='Restop'>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
     <div className='img-container'>
     <img className='img1' src='https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp' alt="googleplaylogo" />
    <img className="img2"src='https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty' alt="Appstorelogo"/>
  
      </div>
    </div>
    </div>
      <div className='rightside'>
      <div className='flexrightside'>
      <img  className="img3"src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="" height="400px" width="400px" />
          <img className="img4" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" height="400px" width="400px" />
        
        </div>
      </div>
    </div>
  
  
  
    
    
  
  )
}

export default MobileAd
