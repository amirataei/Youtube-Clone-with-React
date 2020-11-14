import React from 'react'
import SidebarRow from './SidebarRow'
import { AiFillHome } from 'react-icons/ai';
import { MdWhatshot } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { MdVideoLibrary } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { MdWatchLater } from 'react-icons/md';
import { HiThumbUp } from 'react-icons/hi';
import { MdExpandMore } from 'react-icons/md';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
             <SidebarRow  Icon={AiFillHome} title="home"/>
             <SidebarRow Icon={MdWhatshot} title="Tranding"/>
             <SidebarRow Icon={MdSubscriptions} title="Subscription"/>
             <hr />
             <SidebarRow  Icon={MdVideoLibrary} title="library"/>
             <SidebarRow Icon={FaHistory} title="History"/>
             <SidebarRow Icon={MdOndemandVideo} title="Your videos"/>
             <SidebarRow  Icon={MdWatchLater} title="watch later"/>
             <SidebarRow Icon={HiThumbUp} title="Liked videos"/>
             <SidebarRow Icon={MdExpandMore} title="show more"/>
             <hr />
        </div>
    )
}

export default Sidebar
