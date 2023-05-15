import React from 'react'
import ViewJob from '../components/ViewJob'
import Header from '../components/Header'
import MainContainer from '../components/UI/MainContainer'
import Carousel from '../components/Carousel'
import '../style/viewItemJob.css'
import { IViewJob } from '../interface/app.interface'

export default function ViewItem({typePage}: IViewJob) {

    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <div className='view-item__container'>
                    <ViewJob typePage={typePage} />
                    <Carousel>
                        <div className='item item-1'>Запись 1</div>
                        <div className='item item-2'>Запись 2</div>
                        <div className='item item-3'>Запись 3</div>
                        <div className='item item-4'>Запись 4</div>
                        <div className='item item-5'>Запись 5</div>
                    </Carousel>
                </div>
            </MainContainer>
        </React.Fragment>
    )
}