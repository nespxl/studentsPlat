import Avatar from "./UI/Avatar";
import FieldMessage from "./FieldMessage";
import '../style/wrapperChatField.css'
import { ISocket } from "../interface/app.interface";

export default function WrapperChatWindow({socket}: ISocket) {
    return (
        <div className="wrapper-chat-window">
            <Avatar />
            Вакансия такая-то
            <FieldMessage socket={socket} />
        </div>
    )
}