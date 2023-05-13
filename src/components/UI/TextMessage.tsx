import { IChildren } from '../../interface/app.interface'
import '../../style/ui/textMessage.css'

export default function TextMessage({children}: IChildren) {
    return (
        <div className='text-message'>
            {children}
        </div>
    )
}