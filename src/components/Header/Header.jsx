import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img
            src='https://pluspng.com/img-png/autodesk-logo-png-autodesk-unveils-complete-manufacturing-software-portfolio-tct-magazine-2272.png'/>
        <div className={s.loginBlock}>
            {props.isAuth? props.login
        : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;