import React from 'react'
import Header from '../../components/Header'
import MainContainer from '../../components/UI/MainContainer'
import WrapperPerson from '../../components/WrapperPerson'
import WrapperEmployersView from '../../components/WrapperEmployersView'

export default function EmployersViewCompany() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Представление компании' option='employers'>
                    <WrapperEmployersView />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
