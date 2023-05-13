import { useState } from "react";
import { IInputForm, IInputTel } from "../../interface/app.interface";

export function Input({ place, title, props, type, name, onBlur, onChange, value, children, className }: IInputForm) {
    return (
        <label className='form__label'>
            <p className="form__label-title">{title}</p>
            {children}
            <input type={type} className='form__input' name={name} placeholder={place} {...props} onBlur={onBlur} onChange={onChange} value={value} />
        </label>
    )
}

export function InputNumber({placeholder, title}: IInputTel) {
    const [tel, setTel] = useState('')
    const [flagForein, setFlagForein] = useState(true)
    const [flagNine, setFlagNine] = useState(true)
    const [flagBracket, setFlagBracket] = useState(true)
    const [flagMiddle, setFlagMiddle] = useState(true)
    const [flagNextMiddle, setFlagNextMiddle] = useState(true)

    function handleChange(e: any) {
        let interRes = null
        if(e.target.value.length < 19) {
            interRes = e.target.value
            setTel(interRes)
        }
        if(!e.target.value) {
            setFlagForein(true)
            setFlagNine(true)
            setFlagMiddle(true)
            setFlagNextMiddle(true)
            return setTel('')
        }
        if(['7', '8', '9', '+'].indexOf(e.target.value[0]) > -1) {
            console.log('ru number')
            if(e.target.value[0] === '9' && flagNine) {
                interRes = '+7 ' + e.target.value
                setFlagNine(false)
                return setTel(interRes)
            }
            if(e.target.value.length > 3 && e.target.value.length < 7 && flagBracket && e.target.value.length >= 6) {
                const bracket = '(' + interRes.substring(3, 7)  + ')'
                setFlagBracket(false)
                return setTel(interRes.substring(0, 3) + bracket)
            }
            if(e.target.value.length > 8 && e.target.value.length < 12 && flagMiddle && e.target.value.length >= 11) {
                const middle = ' ' + interRes.substring(8, 11)  + '-'
                setFlagMiddle(false)
                return setTel(interRes.substring(0, 8) + middle)
            }
            if(e.target.value.length > 13 && e.target.value.length < 16 && flagNextMiddle && e.target.value.length >= 15) {
                const nextMiddle = interRes.substring(13, 15)  + '-'
                setFlagNextMiddle(false)
                return setTel(interRes.substring(0, 13) + nextMiddle)
            }
            if(e.target.value.length < 6) {
                setTel(interRes)
                setFlagBracket(true)
            }
            if(e.target.value.length < 11) {
                setTel(interRes)
                setFlagMiddle(true)
            }
            if(e.target.value.length < 15) {
                setTel(interRes)
                setFlagNextMiddle(true)
            }
        } else {
            console.log('not ru number')
            if(flagForein) {
                setFlagForein(false)
                return setTel('+' + e.target.value.substring(0, 16))
            } else {
                return setTel(e.target.value.substring(0, 16))
            }
        }
    }

    return (
        <label className="form__label">
            <p className="form__label-title">{title}</p>
            <input type="tel" placeholder={placeholder} onChange={(e) => handleChange(e)} value={tel} className='form__input' />
        </label>
    )
}
