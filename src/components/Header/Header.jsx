import React from 'react'
import style from './Header.module.css'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import profile from '../../utils/profile.jpg'

export const Header = () => {


    const clickClose = () => {
        $('#modalClose').fadeOut(300)
    }

    const clickOpen = () => {
        $('#modalClose').fadeIn(500)
    }



    return (
        <div>
            <div className={style.Header}>
                <span className={style.title}>FullStack Developer Junior JavaScript</span>
                <div className={style.navigator}>
                    <div >
                        <NavLink to='/about' className={style.text + " " + style.text1} activeClassName={style.text11}>about me</NavLink>
                    </div>
                    <div>
                        <NavLink to='/projects' className={style.text + " " + style.text2} activeClassName={style.text22}>My projects</NavLink>
                    </div>
                    <div className={style.text + " " + style.text3} onClick={clickOpen}>Contacts with me</div>
                </div>
            </div>
            <div id='modalClose' className={style.modal}>
                <div onClick={clickClose} className={style.x}>x</div>
                <div className={style.pad}>
                    <div className={style.border}>
                        <div>Name: Ivan</div>
                        <div>Phone: 8-999-999-16-20</div>
                        <div>E-mail: Hyan69@mail.ru</div>
                        <div>city: Moscow</div>
                    </div>
                    <div className={style.border1} >
                        <img src={profile} className={style.Profile} />
                        <div ><a href="https://www.vk.com/hyan69" className={style.a}>vk.com</a></div>
                        <div><a href='https://www.instagram.com/hyan69/' className={style.a}>Instagram</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}