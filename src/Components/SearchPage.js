import React from 'react'
import './searchpage.css'
import {MdTune} from 'react-icons/md'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="searchPage__filter">
                <MdTune className="mdtune"/>
                <h2>Filter</h2>
            </div>
             <hr />
             <ChannelRow
              image="https://yt3.ggpht.com/ytc/AAUvwniOJIzPJxyXBtA9rgd5oCzzB3WrZaVCPulY84zmWQ=s176-c-k-c0x00ffffff-no-rj-mo"
              channel = "fariborz rafie"
              verified
              subs="10k"
              noOfVideos={382}
              description="You can fined awesome program"
             />

             <hr />

             <VideoRow  
                subs ="23"
                description="web Developer in 10 minute | 2019/20web Developer in 10 minute | 2019/20"  
                image="https://i.ytimg.com/an_webp/AqCM-9FlydM/mqdefault_6s.webp?du=3000&sqp=CKqOu_0F&rs=AOn4CLAfcF5FdFIbMcfDQc4GprELhJXHGA"
                title="Become a web Developer in 10 minute | 2019/20"
                channel="sony sanga"
                views="2.3M views"
                timestamp="3 days ago"
             />
              <VideoRow  
                subs ="23"
                description="web Developer in 10 minute | 2019/20web Developer in 10 minute | 2019/20"  
                image="https://i.ytimg.com/an_webp/AqCM-9FlydM/mqdefault_6s.webp?du=3000&sqp=CKqOu_0F&rs=AOn4CLAfcF5FdFIbMcfDQc4GprELhJXHGA"
                title="Become a web Developer in 10 minute | 2019/20"
                channel="sony sanga"
                views="2.3M views"
                timestamp="3 days ago"
             />
              <VideoRow  
                subs ="23"
                description="web Developer in 10 minute | 2019/20web Developer in 10 minute | 2019/20"  
                image="https://i.ytimg.com/an_webp/AqCM-9FlydM/mqdefault_6s.webp?du=3000&sqp=CKqOu_0F&rs=AOn4CLAfcF5FdFIbMcfDQc4GprELhJXHGA"
                title="Become a web Developer in 10 minute | 2019/20"
                channel="sony sanga"
                views="2.3M views"
                timestamp="3 days ago"
             />
              <VideoRow  
                subs ="23"
                description="web Developer in 10 minute | 2019/20web Developer in 10 minute | 2019/20"  
                image="https://i.ytimg.com/an_webp/AqCM-9FlydM/mqdefault_6s.webp?du=3000&sqp=CKqOu_0F&rs=AOn4CLAfcF5FdFIbMcfDQc4GprELhJXHGA"
                title="Become a web Developer in 10 minute | 2019/20"
                channel="sony sanga"
                views="2.3M views"
                timestamp="3 days ago"
             />
              <VideoRow  
                subs ="23"
                description="web Developer in 10 minute | 2019/20web Developer in 10 minute | 2019/20"  
                image="https://i.ytimg.com/an_webp/AqCM-9FlydM/mqdefault_6s.webp?du=3000&sqp=CKqOu_0F&rs=AOn4CLAfcF5FdFIbMcfDQc4GprELhJXHGA"
                title="Become a web Developer in 10 minute | 2019/20"
                channel="sony sanga"
                views="2.3M views"
                timestamp="3 days ago"
             />
              <VideoRow  
                subs ="23"
                description="web Developer in 10 minute | 2019/20web Developer in 10 minute | 2019/20"  
                image="https://i.ytimg.com/an_webp/AqCM-9FlydM/mqdefault_6s.webp?du=3000&sqp=CKqOu_0F&rs=AOn4CLAfcF5FdFIbMcfDQc4GprELhJXHGA"
                title="Become a web Developer in 10 minute | 2019/20"
                channel="sony sanga"
                views="2.3M views"
                timestamp="3 days ago"
             />
        </div>
    )
}

export default SearchPage
