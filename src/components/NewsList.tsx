import { INewsList } from '../interface/app.interface'
import '../style/newsList.css'

export default function NewsList({array}: INewsList) {
    return (
        <ul className='news-list'>
            {array.map((elem: any) => (
                <li className='news-list__elem' key={elem.id}>
                    <img src={elem.url} className='news-list__photo'></img>
                    {elem.title}
                </li>
            ))}
        </ul>
    )
}
