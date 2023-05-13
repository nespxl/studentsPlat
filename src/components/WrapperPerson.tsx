import { IWrapperPerson } from "../interface/app.interface";
import WrapperPersonPanel from "./WrapperPersonPanel";
import '../style/person/personPage.css'

export default function WrapperPerson({ title, children }: IWrapperPerson) {
    return (
        <div className='person'>
            <div className="person__panel-wrapper">
                <div className='person__panel'>
                    <WrapperPersonPanel />
                </div>
            </div>
            <div className='person__info'>
                <h1 className='person__title'>{title}</h1>
                <div className='person__list'>
                    {children}
                </div>
            </div>
        </div>
    )
}
