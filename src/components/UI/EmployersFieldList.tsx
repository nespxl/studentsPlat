import { IEmployersField } from "../../interface/app.interface";

export default function EmployersFieldList({title, description}: IEmployersField) {
    return (
        <li className='employers-view__header-elem'>
            <p className='employers-view__header-field'>{title}</p>
            <p className='employers-view__header-field'>{description}</p>
        </li>
    )
}