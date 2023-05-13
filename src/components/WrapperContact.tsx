import React, { useState } from 'react'
import { Input, InputNumber } from "./UI/Input";
import Select from "./UI/Select";
import WrapperFormPerson from './WrapperFormPerson';
import ButtonTrue from './UI/ButtonTrue';
import '../style/wrapper-contact.css'

export default function WrapperContact() {
    const [mess, setMess] = useState<string>('Не выбрано')
    const [countNumber, setCountNumber] = useState<number>(1)
    const messOption = ['VK', 'Telegram', 'Facebook', 'Twitter', 'Одноклассники']
    const telItemArray: Array<string> = ['Введите номер телефона', '']
    const telArray: Array<Array<string>> = [telItemArray]
    const [countMail, setCountMail] = useState<number>(1)
    const mailItemArray: Array<string> = ['email', 'text', 'Электронная почта']
    const mailArray: Array<Array<string>> = [mailItemArray]
    const [countSite, setCountSite] = useState<number>(1)
    const siteItemArray: Array<string> = ['text', 'text', 'Сайт(ссылка)']
    const siteArray: Array<Array<string>> = [siteItemArray]
    const [countMessanger, setCountMessanger] = useState<number>(1)
    const messangerItemArray: Array<string> = ['text', 'text', 'Ссылка']
    const messangerArray: Array<Array<string>> = [messangerItemArray]

    for (let i = 0; i < countNumber - 1; i++) {
        telArray.push(telItemArray)
    }
    for (let i = 0; i < countMail - 1; i++) {
        mailArray.push(mailItemArray)
    }
    for (let i = 0; i < countSite - 1; i++) {
        siteArray.push(siteItemArray)
    }
    for (let i = 0; i < countMessanger - 1; i++) {
        messangerArray.push(messangerItemArray)
    }

    return (
        <WrapperFormPerson>
            <div className='wrapper-contact__block-label'>
                <h2 className='wrapper-contact__title'>Телефон</h2>
                {telArray.map(elem => (
                    <InputNumber placeholder={elem[0]} title={elem[1]} />
                ))}
                <ButtonTrue setCount={setCountNumber} count={countNumber} />
            </div>
            <div className='wrapper-contact__block-label'>
                <h2 className='wrapper-contact__title'>Почта</h2>
                {mailArray.map(elem => (
                    <Input place={elem[2]} type={elem[1]} name={elem[0]} className='form-contact__input' />
                ))}
                <ButtonTrue setCount={setCountMail} count={countMail} />
            </div>
            <div className='wrapper-contact__block-label'>
                <h2 className='wrapper-contact__title'>Социальная сеть</h2>
                {messangerArray.map(elem => (
                    <React.Fragment>
                        <Input place={elem[2]} type={elem[1]} name={elem[0]} className='form-contact__input' />
                        <div className='wrapper-contact__block-label__select'>
                            <Select options={messOption} selected={mess} setSelected={setMess} />
                        </div>
                    </React.Fragment>
                ))}
                <ButtonTrue setCount={setCountMessanger} count={countMessanger} />
            </div>
            <div className='wrapper-contact__block-label'>
                <h2 className='wrapper-contact__title'>Ссылка на персональную страницу</h2>
                {siteArray.map(elem => (
                    <Input place={elem[2]} type={elem[1]} name={elem[0]} className='form-contact__input' />
                ))}
                <ButtonTrue setCount={setCountSite} count={countSite} />
            </div>
        </WrapperFormPerson>
    )
}
