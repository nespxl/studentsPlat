import React, { useState } from 'react'
import '../style/selectHolder.css'
import Radio from './UI/Radio'
import Checkbox from './UI/Checkbox'
import Select from './UI/Select'

export default function SelectHolder() {
    const [metroItem, setMetroItem] = useState('Не важно')
    const [specItem, setSpecItem] = useState('Не важно')
    const [educationItem, setEducationItem] = useState('Не важно')

    const payVar = ['0 - 15000', '15000 - 30000', '30000 - 60000', '60000 - 100000', '100000 - 150000', '150000 - 200000', '200000+', 'Не важно']
    const region = ['Все регионы', 'Москва', 'Санкт-Петербург', 'Самара', 'Киров']
    const experience = ['Нет опыта', 'От 6 месяцев до 1 года', 'От 1 до 3 лет', 'От 3 до 6 лет', 'Более 6 лет']
    const busy = ['Не важно', 'Полный день', 'Удаленная работа', 'Гибкий график', 'Сменный график']
    const metro = ['Не важно', 'Войковская', 'Тверская', 'Ховрино']
    const spec = ['Не важно', 'Frontend-разработчик', 'Backend-разработчик', 'Ml-ращработчик']
    const education = ['Не важно', 'Техническое', 'Гуманитарное', 'Инженерное']

    return (
        <div className='container-select-holder filter'>
            <div className='filter__sticky'>
                <h2 className='filter__title'>
                    Фильтры
                </h2>
                <div className='filter__overflow'>
                    <div className='filter__new'>
                        <h3 className='filter__new-title'>Уровень дохода</h3>
                        {payVar.map((elem, i) => (
                            <Radio value={elem} key={i} name='pay' />
                        ))}
                    </div>
                    <div className='filter__new'>
                        <h3 className='filter__new-title'>Регион</h3>
                        {region.map((elem, i) => (
                            <Checkbox value={elem} key={i} />
                        ))}
                    </div>
                    <div className='filter__new'>
                        <h3 className='filter__new-title'>Метро</h3>
                        <Select options={metro} selected={metroItem} setSelected={setMetroItem} />
                    </div>
                    <div className='filter__new'>
                        <h3 className='filter__new-title'>Специализации</h3>
                        <Select options={spec} selected={specItem} setSelected={setSpecItem} />
                    </div>
                    <div className='filter__new'>
                        <h3 className='filter__new-title'>Образование</h3>
                        <Select options={education} selected={educationItem} setSelected={setEducationItem} />
                    </div>
                    <div className='filter__new'>
                        <h3 className='filter__new-title'>Опыт работы</h3>
                        {experience.map((elem, i) => (
                            <Radio value={elem} key={i} name='experience' />
                        ))}
                    </div>
                    <div className='filter__new'>
                        <h3 className='filter__new-title'>Тип занятности</h3>
                        {busy.map((elem, i) => (
                            <Checkbox value={elem} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}