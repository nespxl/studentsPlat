import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'

export default function Notifications() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Уведомления' option='person'>
                    У вас нет уведомлений
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
