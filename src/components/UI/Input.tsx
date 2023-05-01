import { IInputForm } from "../../interface/app.interface";

export function Input({ place, props, type, name, onBlur, onChange, value, children }: IInputForm) {
    return (
        <label className='form__label'>
            <p className="form__label-title">{place}</p>
            {children}
            <input type={type} className='form__input' name={name} placeholder={place} {...props} onBlur={onBlur} onChange={onChange} value={value} />
        </label>
    )
}
