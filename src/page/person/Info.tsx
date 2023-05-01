import React from 'react'
import Header from '../../components/Header'
import '../../style/person/personPage.css'
import '../../style/person/info.css'
import WrapperPerson from '../../components/WrapperPerson'
import { Input } from '../../components/UI/Input'
import MainContainer from '../../components/UI/MainContainer'

export default function Info() {
    return (
        <React.Fragment>
            <Header />
            <MainContainer>
                <WrapperPerson title='Личная информация'>
                    <form>
                        <div className='info__avatar-block'>
                            <div className='info__avatar'>
                                <svg className='info__avatar-img' xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" /></svg>
                            </div>
                            <div className='info__wrapper-btn'>
                                <button className='info__btn-change'>Изменить аватар</button>
                                <button className='info__btn-delete'>Удалить аватар</button>
                            </div>
                        </div>
                        <div className='info__wrapper-name'>
                            <Input place='Имя' type='text' name='name' />
                            <Input place='Фамилия' type='text' name='surname' />
                            <Input place='Отчество' type='text' name='lastname' />
                        </div>
                        <div className='info__wrapper-male'>
                            <p className='info__block-title'>ПОЛ</p>
                            <label className='info__male'>
                                <input type="radio" name='male' className='info__check-male' />
                                Мужской
                            </label>
                            <label className='info__male'>
                                <input type="radio" name='male' className='info__check-male' />
                                Женский
                            </label>
                        </div>
                        <div className='info__birth'>
                            <p className='info__block-title'>ДЕНЬ РОЖДЕНИЯ</p>

                        </div>
                        <div className='info__about'>
                            <p className='info__block-title'>О СЕБЕ</p>
                            <textarea name="about" className='info__about-message' placeholder='Пару слов о себе, чем увлекаетесь'></textarea>
                        </div>
                        <div className='info__portfolio'>
                            <p className='info__block-title'>ССЫЛКА НА ПОРТФОЛИО</p>
                            <Input place='Ссылка на гит' type='text' name='link' />
                        </div>
                        <input type="submit" value='Сохранить' className='info__submit' />
                    </form>
                </WrapperPerson>
            </MainContainer>
        </React.Fragment>
    )
}
