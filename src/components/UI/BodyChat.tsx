import { IMessage } from "../../interface/app.interface";
import TextMessage from "./TextMessage";

export default function BodyChat({ message }: IMessage) {
    return (
        <div className='field-message__dialog'>
            {
                message.map((elem: any) =>
                    elem.name === localStorage.getItem('user') ?
                        (
                            <div className='field-message__dialog-my' key={elem.id}>
                                <TextMessage>
                                    {elem.text}
                                </TextMessage>
                            </div>
                        )
                        :
                        (
                            <div className='field-message__dialog-company'  key={elem.id}>
                                <TextMessage>
                                    {elem.text}
                                </TextMessage>
                            </div>
                        )
                )
            }
        </div>
    )
}