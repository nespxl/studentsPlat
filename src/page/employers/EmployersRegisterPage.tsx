import React, { useState } from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import '../../style/form.css'
import { Input } from '../../components/UI/Input'

export default function EmployersRegisterPage() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [surnameDirty, setSurnameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [repasswordDirty, setRepasswordDirty] = useState(false)

    const [nameError, setNameError] = useState('Не может быть пустым')
    const [surnameError, setSurnameError] = useState('Не может быть пустым')
    const [passwordError, setPasswordError] = useState('Не может быть пустым')
    const [repasswordError, setRepasswordError] = useState('Не может быть пустым')

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'surname':
                setSurnameDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'repassword':
                setRepasswordDirty(true)
                break
        }
    }

    function validateTextInput(e: any, setState: any, setStateError: any) {
        setState(e.target.value)
        const reEn = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        const reRu = /^[а-яА-Я]+(([',. -][а-яА-Я])?[а-яА-Я]*)*$/
        if (String(e.target.value).toLowerCase() === '') {
            return setStateError('Не может быть пустым')
        }
        if (!reRu.test(String(e.target.value).toLowerCase())) {
            return setStateError('Некорректное имя')
        } else {
            return setStateError('')
        }
    }
    function validatePasswordInput(e: any, setState: any, setStateError: any) {
        setState(e.target.value)
        const re = /[ !"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/
        if (String(e.target.value).toLowerCase() === '') {
            return setStateError('Не может быть пустым')
        }
        if (!re.test(String(e.target.value).toLowerCase())) {
            return setStateError('Некорректный пароль')
        } else {
            return setStateError('')
        }
    }

    return (
        <React.Fragment>
            <Header />
            <div className='form-container'>
                <form className='form'>
                    <div className='form__wrapper'>
                        <h1 className='form__title'>Зарегистрироваться</h1>
                        <Input
                            className='form__input'
                            place='Введите Имя'
                            type='text'
                            name='name'
                            onBlur={(e: any) => blurHandler(e)}
                            onChange={(e: any) => validateTextInput(e, setName, setNameError)}
                            value={name}
                        >
                            <p className='form__error-input'>{(nameError && nameDirty) && <div>{nameError}</div>}</p>
                        </Input>
                        <Input place='Введите Фамилию' name='surname' type='text'
                            onBlur={(e: any) => blurHandler(e)}
                            onChange={(e: any) => validateTextInput(e, setSurname, setSurnameError)}
                            value={surname}
                            className='form__input'
                        >
                            <p className='form__error-input'>{(surnameError && surnameDirty) && <div>{surnameError}</div>}</p>
                        </Input>
                        <Input place='Введите Пароль' name='password' type='password'
                            onBlur={(e: any) => blurHandler(e)}
                            onChange={(e: any) => validatePasswordInput(e, setPassword, setPasswordError)}
                            value={password}
                            className='form__input'
                        >
                            <p className='form__error-input'>{(passwordError && passwordDirty) && <div>{passwordError}</div>}</p>
                        </Input>
                        <Input place='Повторите Пароль' name='repassword' type='password'
                            onBlur={(e: any) => blurHandler(e)}
                            onChange={(e: any) => validatePasswordInput(e, setRepassword, setRepasswordError)}
                            value={repassword}
                            className='form__input'
                        >
                            <p className='form__error-input'>{(repasswordError && repasswordDirty) && <div>{repasswordError}</div>}</p>
                        </Input>
                    </div>
                    <div className='form__wrapper-sub'>
                        <input type="submit" className='form__sub' value='Зарегистрироваться' />
                    </div>
                </form>
                <div className='redirect'>
                    <p className='redirect__title'>Есть аккаунт?</p>
                    <Link to='/employers/auth' className='redirect__link'>Войти</Link>
                </div>
            </div>
        </React.Fragment>
    )
}