import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'

export default function Response() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Отлики' option='person'>
                    У вас нет откликов
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
