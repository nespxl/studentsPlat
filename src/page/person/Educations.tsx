import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperEducation from '../../components/WrapperEducation'

export default function Educations() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Образование' option='person'>
                    <WrapperEducation />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
