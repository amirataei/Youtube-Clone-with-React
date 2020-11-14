import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { ListUl } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import { MdApps } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import {BsFillCameraVideoFill} from 'react-icons/bs'
const Header = () => {

    const [inputSearch , setinputSearch] = useState('')
    return (
        <div className="header">
        <div className="header_left">
        <ListUl size={30} />
        <Link to="/">
           <img className="header_logo" src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c548.png" />
        </Link>
        </div>
      <div className="header__input">
          <input onChange={(e) => setinputSearch(e.target.value)} value={inputSearch} type="/" placeholder="search"/>
          <Link to={`/search/${inputSearch}`}>
           <Search  className="headerinputButton"/>
          </Link>
      </div>
      <div className="header__icons">
      <BsFillCameraVideoFill className="header__icon" />
      <MdApps className="header__icon"/>
      <MdNotifications className="header__icon"/>
      </div>
  </div>
    )
}

export default Header
