import { Link } from 'react-router-dom'
import { INewsList } from '../interface/app.interface'
import '../style/newsList.css'

export default function NewsList({array}: INewsList) {
    return (
        <ul className='news-list'>
            {array.map((elem: any) => (
                <li className='news-list__elem' key={elem.id}>
                    <Link to={`${elem.id}`}>
                        <img src={elem.url} className='news-list__photo'></img>
                        {elem.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
