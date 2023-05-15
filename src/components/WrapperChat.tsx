import { useEffect, useState } from "react"
import { ISocket } from "../interface/app.interface"
import ChatList from "./ChatList"
import WrapperChatWindow from "./WrapperChatWindow"
import '../style/wrapperChat.css'

export default function WrapperChat({socket}: ISocket) {
    const [message, setMessage] = useState<any>([])

    useEffect(() => {
        socket.on('response', (data: any) => {
            setMessage([...message, data])
        })
    }, [socket, message])

    return (
        <div className="chat-container">
            <ChatList socket={socket} />
            <WrapperChatWindow socket={socket} />
        </div>
    )
}