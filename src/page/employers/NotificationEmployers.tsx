import React from 'react'
import Header from '../../components/Header'
import MainContainer from '../../components/UI/MainContainer'
import WrapperPerson from '../../components/WrapperPerson'

export default function NotificationEmployers() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Уведомления' option='employers'>
                    У вас пока нет уведомлений
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
