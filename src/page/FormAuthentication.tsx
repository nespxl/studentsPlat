import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import '../style/form.css'
import { Input } from '../components/UI/Input'
import { ISocket } from '../interface/app.interface'

export default function FormAuthentication({socket}: ISocket) {
    const navigate = useNavigate()
    const [user, setUser] = useState('')

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')

    const [nameDirty, setNameDirty] = useState(false)
    const [surnameDirty, setSurnameDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)

    const [nameError, setNameError] = useState('Не может быть пустым')
    const [surnameError, setSurnameError] = useState('Не может быть пустым')
    const [passwordError, setPasswordError] = useState('Не может быть пустым')

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

    function handleSubmit(e: any) {
        e.preventDefault()
        localStorage.setItem('user', socket.id)
        socket.emit('newUser', {user, socketID: socket.id})
        navigate('/person')
    }

    return (
        <React.Fragment>
            <Header />
            <div className='form-container'>
                <form className='form'>
                    <div className='form__wrapper'>
                        <h1 className='form__title'>Войти в личный кабинет</h1>
                        <Input place='Введите Имя' type='text' name='name'
                            onBlur={(e: any) => blurHandler(e)}
                            onChange={(e: any) => validateTextInput(e, setName, setNameError)}
                            value={name}
                            className='form__input'
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
                    </div>
                    <div className='form__wrapper-sub'>
                        <input type="submit" className='form__sub' value='Войти' onClick={(e) => handleSubmit(e)} />
                    </div>
                </form>
                <div className='redirect'>
                    <p className='redirect__title'>Нет аккаунта?</p>
                    <Link to='/registration' className='redirect__link'>Зарегистрироваться</Link>
                </div>
            </div>
        </React.Fragment>
    )
}
