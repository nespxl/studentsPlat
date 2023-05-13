import { IWrapperPerson } from "../interface/app.interface";
import SelectHolder from "./SelectHolder";
import '../style/person/personPage.css'
import Carousel from "./Carousel";

export default function WrapperMainList({ title, children }: IWrapperPerson) {
    return (
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
            <Carousel>
                <div className='item item-1'>Запись 1</div>
                <div className='item item-2'>Запись 2</div>
                <div className='item item-3'>Запись 3</div>
                <div className='item item-4'>Запись 4</div>
                <div className='item item-5'>Запись 5</div>
            </Carousel>
        </div>
    )
}