import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperChat from '../../components/WrapperChat'
import { ISocket } from '../../interface/app.interface'

export default function EmployersChat({socket}: ISocket) {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Чат' option='employers'>
                    <WrapperChat socket={socket} />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
