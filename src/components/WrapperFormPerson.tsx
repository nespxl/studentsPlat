import { IChildren } from "../interface/app.interface";
import '../style/person/wrapperFormPerson.css'

export default function WrapperFormPerson({ children }: IChildren) {
    return (
        <form className="person-form">
            {children}
            <div className="person-form__submit-container">
                <input type="submit" value='Сохранить' className="person-form__submit" />
            </div>
        </form>
    )
}
