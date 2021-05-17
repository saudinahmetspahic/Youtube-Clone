import React from 'react'
import './Navbar.css'
import { IoIosMenu as MenuIcon } from 'react-icons/io';
import { BsFillMicFill as MicIcon, BsFillBellFill as BellIcon, BsSearch as SearchIcon } from 'react-icons/bs';
import { RiVideoAddLine as VideoIcon, RiAccountCircleFill as AccountIcon } from 'react-icons/ri';
import { CgMenuGridO as AppsIcon } from 'react-icons/cg';
import yt_logo from '../../images/yt_logo.png';

const Navbar = ({onShrinkNavClicked}) => {
    return (
        <div className="navbar">
            <div className="navbar-section">
                <MenuIcon className="icon" onClick={() => onShrinkNavClicked()} />
                <img src={yt_logo} alt="" className="yt-logo" />
                <p className="yt-logo-title">YouTube</p>
            </div>
            <div className="navbar-section">
                <input className="search-input" type="text" placeholder="Pretrazivanje..." />
                <button className="btn"><SearchIcon /></button>
                <MicIcon className="icon" />
            </div>
            <div className="navbar-section">
                <VideoIcon className="icon" />
                <AppsIcon className="icon" />
                <BellIcon className="icon" />
                <AccountIcon className="icon" />
            </div>
        </div>
    )
}

export default Navbar
