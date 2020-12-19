import React from 'react'
import style from './AboutMe.module.css'
import fullstack from '../../utils/fullstack.png'
import $ from 'jquery'

export const click = () => {
    $('#about').fadeIn(1000)
}


export class AboutMe extends React.Component{

    componentDidMount(){
        click()
    }

    render() {
        return (
            <div id='about' className={style.photo}>

                <img src={fullstack} className={style.photo1} />

            </div>
        )
    }
}