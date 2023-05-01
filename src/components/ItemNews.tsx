import React from 'react'
import '../style/itemNews.css'
import { Link } from 'react-router-dom';
import { INews } from '../interface/app.interface';

export default function ItemNews({ title, body, id }: INews) {
    return (
        <div className='card'>
            <Link to={`${id}`} className='card__link'>
                <div className='card__info'>
                    <strong>{id}</strong>
                    <h1>{title}</h1>
                    <p>{body}</p>
                </div>
                <div className='card__block-more'>
                    <p className='card__more'>ПОДРОБНЕЕ</p>
                    <div className="arrow-1">
                        <div></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}