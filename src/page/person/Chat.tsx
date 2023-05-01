import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'

export default function Chat() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Чат'>
                    Чат
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
