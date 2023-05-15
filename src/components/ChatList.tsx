import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../style/ui/chatList.css'
import { ISocket } from '../interface/app.interface'

export default function ChatList({socket}: ISocket) {
    const [users, setUsers] = useState([]) 

    useEffect(() => {
        socket.on('responseNewUser', (data: any) => setUsers(data))
    }, [socket, users])

    const filteredList = users.filter((value: any, index: any, self: any) => 
        index === self.findIndex((t: any) => (
            t.user === value.user && t.socketID === value.socketID
        ))
    )

    return (
        <ul className="chat__list">
            {users.map((elem: any) => (
                <li className="chat__elem" key={elem.socketID}>
                    {elem.user}
                </li>
            ))}
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