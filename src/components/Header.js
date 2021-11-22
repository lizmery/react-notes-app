import React from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';


const Header = ({handleToggleDarkMode, darkMode}) => {

    const themeIcon = darkMode ? <BsSunFill /> : <BsMoonFill />;

    return (
        <div className="header">
            <h1>My Notes App</h1>
            <button
                onClick={() => handleToggleDarkMode((prevDarkMode => !prevDarkMode))} 
                className="theme-switch"
            >
                {themeIcon}
            </button>
        </div>
    )
}

export default Header;