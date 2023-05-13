import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ISocket } from '../interface/app.interface'

export default function Test({socket}: ISocket) {
    const navigate = useNavigate()
    const [user, setUser] = useState('')

    function handleSubmit(e: any) {
        e.preventDefault()
        localStorage.setItem('user', user)
        navigate('/person/chat')
    }

    return (
        <form>
            <h2>Вход в чат</h2>
            <label>
                <p>user</p>
                <input type="text" id='user' name='name' value={user} onChange={(e) => setUser(e.target.value)} />
            </label>
            <input type="submit" value='Войти' onClick={(e) => handleSubmit(e)} />
        </form>
    )
}