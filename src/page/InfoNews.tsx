import React from 'react'
import Header from '../components/Header'
import MainContainer from '../components/UI/MainContainer'
import Carousel from '../components/Carousel'
import '../style/infoNews.css'

export default function InfoNews() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <div className='infoNews-container'>
                    <div className='infoNews__block'>
                        <h1 className='infoNews__title'>Заголовок статьи</h1>
                        <div className='infoNews__img'></div>
                        <p className='infoNews__view'>Краткий обзор новости Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, amet maiores architecto corporis deleniti saepe error ex. Aliquid quia perferendis voluptatem. Vero ex delectus culpa similique at ipsum adipisci iure!</p>
                        <div className='infoNews__decsription'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti dolore inventore error reiciendis porro maiores voluptatem, libero, vero, necessitatibus cupiditate rem maxime dicta a nobis iste sunt animi incidunt!
                        </div>
                    </div>
                    <div className='infoNews__block'>
                        <Carousel>
                            <div className='item item-1'>Запись 1</div>
                            <div className='item item-2'>Запись 2</div>
                            <div className='item item-3'>Запись 3</div>
                            <div className='item item-4'>Запись 4</div>
                            <div className='item item-5'>Запись 5</div>
                        </Carousel>
                    </div>
                </div>

            </MainContainer>
        </React.Fragment>
    )
}
