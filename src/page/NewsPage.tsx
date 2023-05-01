import React, { useEffect } from 'react'
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from '../hooks/customHookQuery';
import ItemNews from '../components/ItemNews';
import { APINews } from '../utils/APINews';
import '../style/newsPage.css'
import { INews } from '../interface/app.interface';

export default function NewsPage() {
    const { news } = useAppSelector(state => state.sliceNews)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(APINews())
    }, [])

    return (
        <React.Fragment>
            <Header />
            <main className='container'>
                <section className='news__section-list'>
                    <aside className='news__filter'>
                        Фильтр
                    </aside>
                    <div>
                        {news.map((elem: INews) => (
                            <ItemNews key={elem.id} id={elem.id} title={elem.title} body={elem.body} />
                        ))}
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}
