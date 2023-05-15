import React, { useEffect } from 'react'
import Header from "../components/Header";
import MainContainer from '../components/UI/MainContainer';
import WrapperMainList from '../components/WrapperMainList';
import { useAppDispatch, useAppSelector } from '../hooks/customHookQuery';
import { APINews } from '../utils/APINews';
import { INews } from '../interface/app.interface';
import ItemCard from '../components/ItemCard';

export default function PracticPage() {
    const { news } = useAppSelector(state => state.sliceNews)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(APINews())
    }, [])

    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperMainList title='Практика' option='person'>
                    <div>
                        {news.map((elem: INews) => (
                            <ItemCard key={elem.id} id={elem.id} title={elem.title} body={elem.body} />
                        ))}
                    </div>
                </WrapperMainList>
            </MainContainer>
        </React.Fragment>
    )
}