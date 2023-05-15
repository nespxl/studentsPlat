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
                    <WrapperPersonPanel option='person' />
                </div>
            </MainContainer>
        </React.Fragment>
    )
}