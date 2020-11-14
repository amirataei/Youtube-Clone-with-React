import React from 'react'
import './VideoCard.css'
export default function VideoCard({image , title , channel , views , timestamp , channelImage}) {
    return (
        <div className="videoCard col-sm-6 col-md-3">
             <img className="VideoCard_thumbnail" src={image} alt="" />
             <div className="videoCard_info">
               <img className="videoCard_Avatar" alt={channel} src={channelImage}/>
               <div className="videos_text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} {timestamp}
                </p>
               </div>
             </div>
        </div>
    )
}
