import React from 'react'
import Header from '../../components/Header'
import WrapperPersonPanel from '../../components/WrapperPersonPanel'
import MainContainer from '../../components/UI/MainContainer'

export default function Person() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <div>
                    <WrapperPersonPanel />
                </div>
            </MainContainer>
        </React.Fragment>
    )
}