import {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/customHookQuery'
import { ISocket } from '../interface/app.interface'
import {sliceChatInput} from '../store/sliceChatInput'
import '../style/wrapperChatField.css'
import AvatarMessage from './UI/AvatarMessage'
import InputChat from './UI/InputChat'
import BodyChat from './UI/BodyChat'

export default function FieldMessage({socket}: ISocket) {
    const [message, setMessage] = useState([])
    const {input} = useAppSelector(state => state.sliceChatInput)
    const dispatch = useAppDispatch()

    function handleSend(e: any) {
        e.preventDefault()
        if(input.trim() && localStorage.getItem('user')) {
            socket.emit('message', {
                text: input,
                name: localStorage.getItem('user'),
                id: `${socket.id}`,
                socketID: socket.id
            })
        }
        dispatch(sliceChatInput.actions.todoFetchSuccess(''))
    }

    type Data = never

    useEffect(() => {
        socket.on('response', (data: Data) => setMessage([...message, data]))
    }, [message, socket])

    return (
        <div className="field-message">
            <BodyChat message={message} />
            <form className='field-message__person'>
                <AvatarMessage />
                <InputChat />
                <input type="submit" className='field-message__btn' onClick={(e) => handleSend(e)} value='Отправить' />
            </form>
        </div>
    )
}