import React from 'react'
import style from "./style/header.module.css"
import logo from "../logo/senseBank.png"

function Header(props) {
    return (
        <header className={style.header}>
            <div className={style.header__body}>
                <div className={style.header__logo}>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}


export default Header