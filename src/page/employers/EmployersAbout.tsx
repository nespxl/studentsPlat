import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperFormPerson from '../../components/WrapperFormPerson'
import WrapperEmployersAbout from '../../components/WrapperEmployersAbout'

export default function EmployersAbout() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='О компании' option='employers'>
                    <WrapperFormPerson>
                        <WrapperEmployersAbout />
                    </WrapperFormPerson>
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
