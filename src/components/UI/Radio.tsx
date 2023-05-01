import { IRadio } from "../../interface/app.interface";
import '../../style/ui/radio.css'

export default function Radio({value, name}: IRadio) {
    return (
        <div className="radio">
            <label className="radio__label">
                <input type="radio" name={name} className="radio__real" />
                <span className="radio__custom"></span>
                {value}
            </label>
        </div>
    )
}