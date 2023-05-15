import React from 'react'
import '../style/wrapperEmployersView.css'

export default function WrapperEmployersView() {
    return (
        <React.Fragment>
            <div className='employers-view-container'>
                <div className='employers-view__header-block'>
                    <div className='employers-view__avatar'></div>
                    <h2 className='employers-view__company-name'>Компания такая-то</h2>
                </div>
                <div className='employers-view__header-block'>
                    <ul className='employers-view__header-list'>
                        <li className='employers-view__header-elem'>
                            <p className='employers-view__header-field'>Телефон</p>
                            <p className='employers-view__header-field'>89999999999</p>
                        </li>
                        <li className='employers-view__header-elem'>
                            <p className='employers-view__header-field'>Почта</p>
                            <p className='employers-view__header-field'>89999999999</p>
                        </li>
                        <li className='employers-view__header-elem'>
                            <p className='employers-view__header-field'>Социальные сети</p>
                            <p className='employers-view__header-field'>89999999999</p>
                        </li>
                        <li className='employers-view__header-elem'>
                            <p className='employers-view__header-field'>Сайт</p>
                            <p className='employers-view__header-field'>89999999999</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='employers-view-description'>
                <div className='employers-view__details'>
                    <p className='employers-view__details-title'>НАПРАВЛЕНИЕ КОМПАНИИ</p>
                    <p className='employers-view__details-description'>It, бух.учет, еще какая-то шняга</p>
                </div>
                <div className='employers-view__details'>
                    <p className='employers-view__details-title'>СЕРВИСЫ, КОТОРАЯ ДЕЛАЕТ КОМПАНИЯ</p>
                    <p className='employers-view__details-description'>Мобильное приложение такое-то и такое-то, а еще такое</p>
                </div>
                <div className='employers-view__details'>
                    <p className='employers-view__details-title'>ОПИСАНИЕ КОМПАНИИ</p>
                    <div className='employers-view__details-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit suscipit vel aspernatur quaerat unde amet minus laborum culpa facere, neque officiis error? Facilis, eos. Aperiam, perferendis? Culpa, laborum natus?
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
