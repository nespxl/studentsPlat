import '../../style/ui/inputChat.css'
import { useAppDispatch, useAppSelector } from '../../hooks/customHookQuery'
import {sliceChatInput} from '../../store/sliceChatInput'

export default function InputChat() {
    const dispatch = useAppDispatch()
    const {input} = useAppSelector(state => state.sliceChatInput)

    function handleInput(e: any) {
        dispatch(sliceChatInput.actions.todoFetchSuccess(e.target.value))
    }

    return (
        <label className='chat-input__label'>
            <input type="text" className='chat-input__input' onChange={(e) => handleInput(e)} value={input} placeholder='Сообщение' />
        </label>
    )
}