import React from 'react'
import './channelRow.css'
import {GoVerified} from 'react-icons/go'
function ChannelRow({image , channel , subs , noOfVideos , description , verified}) {
    return (
        <div className="channelRow">
             <img
              className="channelRow__logo" 
              alt={channel}
              src={image}
              />
              <div className="channelRow__text">
               <h4>
                   {channel} {verified && < GoVerified />}
               </h4>
               <p>{subs} subscribers {noOfVideos} videos</p>
               <p>{description}</p>

              </div>
        </div>
    )
}

export default ChannelRow;
