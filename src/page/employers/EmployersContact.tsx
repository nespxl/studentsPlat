import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperFormPerson from '../../components/WrapperFormPerson'
import WrapperContact from '../../components/WrapperContact'

export default function EmployersContact() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Контакты компании' option='employers'>
                    <WrapperFormPerson>
                        <WrapperContact />
                    </WrapperFormPerson>
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
