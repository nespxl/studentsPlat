import React from 'react'
import '../style/wrapperEmployersView.css'
import EmployersFieldDescription from './UI/EmployersFieldDescription'
import EmployersFieldList from './UI/EmployersFieldList'

export default function WrapperView() {
    return (
        <React.Fragment>
            <div className='employers-view-container'>
                <div className='employers-view__header-block'>
                    <div className='employers-view__avatar'></div>
                    <h2 className='employers-view__company-name'>ФИО</h2>
                </div>
                <div className='employers-view__header-block'>
                    <ul className='employers-view__header-list'>
                        <EmployersFieldList title='Телефон' description='89999999999' />
                        <EmployersFieldList title='Почта' description='89999999999' />
                        <EmployersFieldList title='Социальные сети' description='89999999999' />
                        <EmployersFieldList title='Сайт' description='89999999999' />
                        <EmployersFieldList title='Пол' description='89999999999' />
                        <EmployersFieldList title='День Рождения' description='12.05.1098' />
                        <EmployersFieldList title='Ссылка на портфолио' description='cсылка на git' />
                    </ul>
                </div>
            </div>
            <div className='employers-view-description'>
                <EmployersFieldDescription title='Специализация' description='Каменщик' />
                <EmployersFieldDescription title='Ожидаемое вознаграждение' description='80000 Рублей' />
                <EmployersFieldDescription title='Квалификация' description='3 года' />
                <EmployersFieldDescription title='Опыт работы:' description='выведем списочек карточек работы' />
                <EmployersFieldDescription title='Образование:' description='Омская вечерняя школа' />
                <EmployersFieldDescription title='О себе' description='
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                ' />
            </div>
        </React.Fragment>
    )
}