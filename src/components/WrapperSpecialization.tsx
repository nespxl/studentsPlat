import Select from "./UI/Select";
import {useState} from 'react'
import '../style/wrapperSpecialization.css'
import Checkbox from "./UI/Checkbox";
import { Input } from "./UI/Input";
import WrapperFormPerson from "./WrapperFormPerson";
import TextArea from "./UI/TextArea";

export default function WrapperSpecialization() {
    const [job, setJob] = useState('Не ищу работу')
    const [selected, setSelected] = useState('Не ищу работу')
    const options = ['Ищу работу', 'Не ищу работу']
    const [currency, setCurrency] = useState('Рубль')
    const currencyOptions = ['Рубль', 'Евро', 'Доллар']
    const [qualification, setQualification] = useState('Не важно')
    const qualificationOptions = ['Стажер(Intern)', 'Младший(Junior)', 'Средний(Middle)', 'Старший(Senior)', 'Ведущий(Lead)']
    const [proSkill, setProSkill] = useState('Не важно')
    const proSkillOptions = ['JavaScript', 'Typescript', 'Pyrhon']

    return (
        <WrapperFormPerson>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Готовность к работе</h3>
                <Select selected={job} setSelected={setJob} options={options} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Ожидаемая зарплата</h3>
                <Input name="salary" place="Зарплата" type="number" className='form-contact__input' />
                <Select selected={currency} setSelected={setCurrency} options={currencyOptions} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Коротко о себе</h3>
                <p className="specialization-form__description">Опишите коротко свои сильные стороны</p>
                <TextArea />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Специализация</h3>
                <Select selected={selected} setSelected={setSelected} options={options} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Ваша квалификация</h3>
                <Select selected={qualification} setSelected={setQualification} options={qualificationOptions} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Профессиональные навыки</h3>
                <Select selected={proSkill} setSelected={setProSkill} options={proSkillOptions} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Готовность к переезду</h3>
                <Checkbox value="Готов" />
                <Checkbox value="Не готов" />
            </div>
        </WrapperFormPerson>
    )
}