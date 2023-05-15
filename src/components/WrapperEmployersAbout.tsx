import React from 'react'
import { Input } from './UI/Input'
import TextArea from './UI/TextArea'

export default function WrapperEmployersAbout() {
    return (
        <React.Fragment>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Направлние компании</h3>
                <Input name="direction" place="Направление" type="text" className='form-contact__input' />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Какими сервисами владеет компания</h3>
                <Input name="service" place="Сервисы" type="text" className='form-contact__input' />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Описание</h3>
                <p className="specialization-form__description">Подробно о деятельности компании и т.д.</p>
                <TextArea />
            </div>
        </React.Fragment>
    )
}