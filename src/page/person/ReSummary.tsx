import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperSummary from '../../components/WrapperSummary'

export default function ReSummary() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Добавить опыт работы'>
                    <WrapperSummary />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}