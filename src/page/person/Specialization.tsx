import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'

export default function Specialization() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Специальность'>
                    Специальность
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
