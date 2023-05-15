import React from 'react'
import '../style/wrapperPersonPanel.css'
import PersonElem from './UI/PersonElem'
import { IPersonNavigation } from '../interface/app.interface'

export default function PersonNavigation({option}: IPersonNavigation) {
    return (
        <React.Fragment>
            <ul className='person-list'>
                <PersonElem text='Уведомления' link='notifications' option={option} />
                {(option === 'person') && <PersonElem text='Отклики' link='response' option={option} />}
                {(option === 'employers') && <PersonElem text='Создать вакансию' link='create_job' option={option} />}
                <PersonElem text='Чат' link='chat' option={option} />
            </ul>
            <ul className='person-list'>
                {(option === 'person') && <PersonElem text='Личная информация' link='info' option={option} />}
                {(option === 'employers') && <PersonElem text='О компании' link='info' option={option} />}
                {(option === 'person') && <PersonElem text='Специализация' link='specialization' option={option} />}
                {(option === 'person') && <PersonElem text='Опыт работы' link='experiences' option={option} />}
                {(option === 'person') && <PersonElem text='Образование' link='educations' option={option} />}
                <PersonElem text='Контакты' link='contact' option={option} />
                {(option === 'person') && <PersonElem text='Просмотр резюме' link='view_summary' option={option} />}
                {(option === 'employers') && <PersonElem text='Представление' link='view_company' option={option} />}
            </ul>
        </React.Fragment>
    )
}
