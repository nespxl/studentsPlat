import { IWrapperPerson } from "../interface/app.interface";
import SelectHolder from "./SelectHolder";
import MainContainer from "./UI/MainContainer";
import '../style/person/personPage.css'

export default function WrapperMainList({ title, children }: IWrapperPerson) {
    return (
        <MainContainer>
            <div className='person'>
                <div className="person__panel-wrapper">
                    <div className='person__panel'>
                        <SelectHolder />
                    </div>
                </div>
                <div className='person__info'>
                    <h1 className='person__title'>{title}</h1>
                    <div className='person__list'>
                        {children}
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}