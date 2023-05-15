import React from 'react'
import Header from '../../components/Header'
import MainContainer from '../../components/UI/MainContainer'
import WrapperPerson from '../../components/WrapperPerson'
import EmployersCardJob from '../../components/EmployersCardJob'
import { Link } from 'react-router-dom'

export default function EmployersCreate() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Создать вакансию' option='employers'>
                    <div className="wrapper-experince-container__new-block">
                        <Link to='/employers/create_job_card' className="wrapper-experince-container__new">Добавить вакансию</Link>
                    </div>
                    <div className="wrapper-experince-container__new-card">
                        <EmployersCardJob />
                        <EmployersCardJob />
                        <EmployersCardJob />
                    </div>
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
