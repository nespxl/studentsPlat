import { Link } from 'react-router-dom'
import { ILinkPerson } from '../../interface/app.interface'

export default function PersonElem({text, link, option}: ILinkPerson) {
    return (
        <li className='person-list__elem'>
        <Link to={`/${option}/${link}`} className='person-list__link'>
            {text}
        </Link>
        </li>
    )
}