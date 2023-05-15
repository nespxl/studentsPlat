import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperSpecialization from '../../components/WrapperSpecialization'

export default function Specialization() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Специальность' option='person'>
                    <WrapperSpecialization />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
