import React from 'react'
import style from './Projects.module.css'
import $ from 'jquery'

import { ProjectImg } from './ProjectImg/ProjectImg'


const click = () => {
    $('#about').fadeIn(1000)
}


export class Projects extends React.Component {
    componentDidMount() {
        click()
    }


    render() {
        return (
            <div id='about' className={style.project}>
                <div className={style.win}>

                    <ProjectImg />

                </div>
            </div>
        )
    }

}