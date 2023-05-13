import { Link } from 'react-router-dom'
import '../style/ui/chatList.css'

export default function ChatList() {
    return (
        <ul className="chat__list">
            <li className="chat__elem">
                <Link to='/person/chat/1' className='chat__link'>User 1</Link>
            </li>
            <li className="chat__elem">
                <Link to='/person/chat/2' className='chat__link'>User 2</Link>
            </li>
            <li className="chat__elem">
                <Link to='/person/chat/3' className='chat__link'>User 3</Link>
            </li>
            <li className="chat__elem">
                <Link to='/person/chat/4' className='chat__link'>User 4</Link>
            </li>
            <li className="chat__elem">
                <Link to='/person/chat/5' className='chat__link'>User 5</Link>
            </li>
        </ul>
    )
}