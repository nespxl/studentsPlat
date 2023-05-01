import React from 'react'
import '../style/wrapperPersonPanel.css'
import PersonElem from './UI/PersonElem'

export default function PersonNavigation() {
    return (
        <React.Fragment>
            <ul className='person-list'>
                <PersonElem text='Уведомления' link='notifications' />
                <PersonElem text='Отклики' link='response' />
                <PersonElem text='Чат' link='chat' />
            </ul>
            <ul className='person-list'>
                <PersonElem text='Личная информация' link='info' />
                <PersonElem text='Специализация' link='specialization' />
                <PersonElem text='Опыт работы' link='experiences' />
                <PersonElem text='Образование' link='educations' />
                <PersonElem text='Контакты' link='contact' />
            </ul>
        </React.Fragment>
    )
}
