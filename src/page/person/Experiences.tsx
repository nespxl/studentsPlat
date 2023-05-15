import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperExperience from '../../components/WrapperExperience'

export default function Experiences() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Опыт работы' option='person'>
                    <WrapperExperience />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
