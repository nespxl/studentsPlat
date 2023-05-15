import { IEmployersField } from "../../interface/app.interface";

export default function EmployersField({title, description}: IEmployersField) {
    return (
        <div className='employers-view__details'>
            <p className='employers-view__details-title'>{title}</p>
            <p className='employers-view__details-description'>{description}</p>
        </div>
    )
}