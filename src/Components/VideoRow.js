import React from 'react'
import './videorow.css'
function VideoRow({image , title , channel , views , timestamp , subs , description}) {

    return (
        <div className="VideoRow">
             <img src={image} alt=""/>
             <div className="VideoRow__text">
               <h3>{title}</h3>
               <p className="head__line">
               {channel} {" "}
                <span className="VideoRow__subs">
                     <span className="subsNumber">{subs}</span>  
                </span>
                {views} views {timestamp}
               <p className="VideoRow__description">{description}</p>
               </p>
             </div>
        </div>
    )
}

export default VideoRow
