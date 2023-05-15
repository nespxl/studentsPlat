import React, { useEffect } from 'react'
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from '../hooks/customHookQuery';
import { APIJob } from '../utils/APIJob';
import '../style/newsPage.css'
import MainContainer from '../components/UI/MainContainer';
import NewsList from '../components/NewsList';

export default function NewsPage() {
    const { news } = useAppSelector(state => state.sliceJob)
    const dispatch = useAppDispatch()

    let array: any = []

    useEffect(() => {
        dispatch(APIJob())
    }, [])

    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <h1>Новости</h1>
                {news.map((elem, i): any => {
                    array.push(elem)
                    if (array.length === 3) {
                        array = []
                        return <NewsList key={i} array={array} />
                    }
                })}
            </MainContainer>
        </React.Fragment>
    )
}
