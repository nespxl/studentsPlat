import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import WrapperPerson from '../../components/WrapperPerson'
import MainContainer from '../../components/UI/MainContainer'
import WrapperChat from '../../components/WrapperChat'
import { ISocket } from '../../interface/app.interface'

export default function Chat({socket}: ISocket) {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Чат'>
                    <WrapperChat socket={socket} />
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
