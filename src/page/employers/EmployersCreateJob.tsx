import React from 'react'
import Header from '../../components/Header'
import MainContainer from '../../components/UI/MainContainer'
import WrapperPerson from '../../components/WrapperPerson'
import WrapperEmplayersJob from '../../components/WrapperEmplayersJob'

export default function EmployersCreateJob() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Создать вакансию' option='employers'>
                    <WrapperEmplayersJob />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
