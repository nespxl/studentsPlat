import React from 'react'
import Header from '../../components/Header'
import MainContainer from '../../components/UI/MainContainer'
import WrapperPerson from '../../components/WrapperPerson'

export default function Home1() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Главная страница работодателя' option='employers'>

                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}