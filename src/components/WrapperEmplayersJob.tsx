import Select from "./UI/Select";
import { useState } from 'react'
import '../style/wrapperSpecialization.css'
import Checkbox from "./UI/Checkbox";
import { Input } from "./UI/Input";
import WrapperFormPerson from "./WrapperFormPerson";
import TextArea from "./UI/TextArea";

export default function WrapperEmplayersJob() {
    const [education, setEducation] = useState('Не важно')
    const [experience, setExperience] = useState('Не важно')
    const options = ['Да', 'Не важно']
    const optionsExperience = ['Не важно', '6 месяцев', 'от 6 месяцев до 1 года']
    const [currency, setCurrency] = useState('Рубль')
    const currencyOptions = ['Рубль', 'Евро', 'Доллар']
    const [contract, setСontract] = useState('Не важно')
    const contractOptions = ['Срочный договор', 'Долгосрочный договор']

    return (
        <WrapperFormPerson>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Название вакансии</h3>
                <Input name="job" place="Вакансия" type="text" className='form-contact__input' />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Вознаграждение</h3>
                <Input name="salary" place="Зарплата" type="number" className='form-contact__input' />
                <Select selected={currency} setSelected={setCurrency} options={currencyOptions} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Высшее образование</h3>
                <Select selected={education} setSelected={setEducation} options={options} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Опыт работы</h3>
                <Select selected={experience} setSelected={setExperience} options={optionsExperience} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Задачи(пару слов)</h3>
                <Input name="task" place="Задачи" type="text" className='form-contact__input' />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Ключевые навыки</h3>
                <Input name="kSkills" place="Навыки" type="text" className='form-contact__input' />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Готовность к переезду</h3>
                <Checkbox value="Готов" />
                <Checkbox value="Не готов" />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">Оформление довогора</h3>
                <Select selected={contract} setSelected={setСontract} options={contractOptions} />
            </div>
            <div className="specialization-form__label">
                <h3 className="specialization-form__title">О вакансии</h3>
                <p className="specialization-form__description">Опишите кого ищите на данную должность</p>
                <TextArea />
            </div>
        </WrapperFormPerson>
    )
}