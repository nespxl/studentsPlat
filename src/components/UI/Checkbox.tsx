import { ICheckbox } from '../../interface/app.interface'
import '../../style/ui/checkbox.css'

export default function Checkbox({value}: ICheckbox) {
    return (
        <div className='checkbox'>
            <label className='checkbox__label'>
                <input type="checkbox" className='checkbox__real' />
                <span className='checkbox__custom'></span>
                {value}
            </label>
        </div>
    )
}
