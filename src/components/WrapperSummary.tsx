import { useState } from 'react'
import { Input } from "./UI/Input";
import Select from "./UI/Select";
import WrapperFormPerson from './WrapperFormPerson';
import TextArea from './UI/TextArea';
import '../style/wrapperExperience.css'

export default function WrapperSummary() {
    const [month, setMonth] = useState('Не выбрано')
    const [year, setYear] = useState('Не выбрано')
    const [monthLast, setMonthLast] = useState('По настоящее время')
    const monthOption = ['Не выбрано', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    const yearOption = ['2023', '2022', '2021', '2020', '2019', '2018']

    return (
        <WrapperFormPerson>
            <div className='summary__block'>
                <Input name='company' type="text" place="Название компании" className='form__input' />
            </div>
            <div className='summary__block'>
                <Input name='company' type="text" place="Ваша должность в компании" className='form__input' />
            </div>
            <div className='summary__block'>
                <Input name='company' type="text" place="Месторасположение компании" className='form__input' />
            </div>
            <div className='summary__block'>
                <p className='summary__title'>Начало работы</p>
                <div className='summary__mini-block'>
                    <Select selected={month} setSelected={setMonth} options={monthOption} />
                </div>
                <div className='summary__mini-block'>
                    <Select selected={year} setSelected={setYear} options={yearOption} />
                </div>
            </div>
            <div className='summary__block'>
                <p className='summary__title'>Окончание работы</p>
                <Select selected={monthLast} setSelected={setMonthLast} options={monthOption} />
            </div>
            <div className='summary__block'>
                <p>Расскажите о своих достижениях</p>
                <TextArea />
            </div>
            <div className='summary__block'>
                <p>Какие навыки вы применили?</p>
                <TextArea />
            </div>
        </WrapperFormPerson>
    )
}