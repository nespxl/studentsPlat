import { ITextArea } from '../../interface/app.interface'
import '../../style/ui/textArea.css'

export default function TextArea({placeholder}: ITextArea) {
    return (
        <textarea name="textarea" id="textarea" placeholder={placeholder} className='textarea'></textarea>
    )
}