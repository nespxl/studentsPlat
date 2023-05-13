import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperContact from '../../components/WrapperContact'

export default function Contact() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Контакты'>
                    <WrapperContact />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
