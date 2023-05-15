import React from 'react'
import Header from '../../components/Header'
import MainContainer from '../../components/UI/MainContainer'
import WrapperPerson from '../../components/WrapperPerson'
import WrapperView from '../../components/WrapperView'

export default function ViewSummary() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Просмотр резюме' option='person'>
                    <WrapperView />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
