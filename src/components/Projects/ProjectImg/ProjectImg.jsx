import React, { useState } from 'react'
import style from '../Projects.module.css'
import chat from '../../../utils/chat.png'
import bot from '../../../utils/bot.png'
import ball from '../../../utils/ball.png'
import { render } from '@testing-library/react'
import $ from 'jquery'

export class ProjectImg extends React.Component {

    state = {
        count: 0
    }
    arr = [<div><div className={style.chatDescription}>
        ChatMessagerDemo
        <div className={style.border}>
            <div className={style.text}>
                Чат написан на React + Redux
            <div className={style.text}>
                    Коннект к базе данных через библиотеку Axios
            </div>
                <div>
                    Сервер написан на NodeJs = express = mongoDB = mongoose
            </div>
            </div>
            <div className={style.text}>
                Можно регистрироваться и заходить и писать от своего имени.
                    </div>
            <div className={style.text}>
                чат в доработке

                    </div>
            <div className={style.text}>
                <div>ссылка для теста:</div>
                <a href="https://github.com/ozzbabym/ChatMessages">https://github.com/ozzbabym/ChatMessages</a>

            </div>
        </div>
    </div>
        <img className={style.imgChat} src={chat} />
    </div>, <div className={style.botStyle}>
        <div className={style.chatDescription}>
            <div>Бот ставки на спорт Теннис.
            </div>
            <div className={style.border}>
                <div className={style.text}>Написан на NodeJs, Express, Heroku</div>
                <div className={style.text}> Суть бота: Есть стратегия в ставках, оновываясь на результате игры, присылает сообщения как закончился первый сет
                Для проверки можно зарегистрироваться на сайте на канале ссылка
            </div>
            </div>
        </div>

        <img className={style.imgChat} src={bot} /></div>,
    <div className={style.ballStyle}>
        <div >
            <div>BallSquared</div>
            <div className={style.border}>
                <div className={style.text}>
                    Первый мой проэкт, писал на своих мыслях(го..ноКод)
                </div>
                <div className={style.text}>
                    Чистый JavaScript + html
                </div>
                <div className={style.text}>
                    Запускать телефоне, либо в браузере в режиме мобильная версия и подкорректировать экран под игру, есть не дороботки!
                </div>
                <div className={style.text}>
                    Суть: Собирать синии кружки, вращать квадрат и направлять шар в правильное направление 
                </div>
                <div className={style.text}>
                    <a href={"https://ozzbabym.github.io/BallSquared/<"}>https://ozzbabym.github.io/BallSquared/</a>
                </div>
            </div>
        </div>
        <img className={style.imgChat} src={ball} /></div>]




    clickPrev = () => {
        this.setState({
            count: this.state.count - 1,
            style: { paddingLeft: "100px" }
        })


    }

    clickNext = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidMount() {
        $('#img').fadeIn(500)
    }
    componentDidUpdate() {
        $('#img').fadeOut(0)
        $('#img').fadeIn(700)

    }

    render() {

        return (

            <div id='img' className={style.chatHide} >
                <div>
                    {this.state.count > 0 &&
                        <button className={style.button} onClick={this.clickPrev}>prev</button>
                    }
                </div>
                <div >
                    <div >{this.arr[this.state.count]}
                    </div>
                </div>
                <div>
                    {this.state.count < this.arr.length - 1 &&
                        <button className={style.button} onClick={this.clickNext}>next</button>
                    }
                </div>
            </div>

        )
    }
}