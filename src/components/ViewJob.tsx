import { IViewJob } from '../interface/app.interface'
import '../style/viewItemJob.css'

export default function ViewJob({typePage}: IViewJob) {
    return (
        <div className='view-item__view'>
            <div className='view-item__wrapper-form'>
                <form className='view-item__form'>
                    <h1 className='view-item__title'>НАЗВАНИЕ ВАКАНСИИ</h1>
                    {(typePage === 'job') &&
                        <p className='view-item__wage'>ЗАРАБОТНАЯ ПЛАТА</p>
                    }
                    <div className='view-item__option-block'>
                        <p className='view-item__option'>Доступ для соискателей с инвалидностью</p>
                        <p className='view-item__option'>Занятность</p>
                        {(typePage === 'job') &&
                            <p className='view-item__option'>Тип оформления договора</p>
                        }
                    </div>
                    <div className='view-item__button-wrapper'>
                        <input className='view-item__btn' type="submit" value={(typePage === 'event') ? 'Записаться' : 'Откликнуться'} />
                    </div>
                </form>
                <div className='view-item__company'>
                    <div className='view-item__company-img'></div>
                    <p className='view-item__company-title'>НАЗВНИЕ КОМПАНИИ</p>
                </div>
            </div>
            <div className='view-item__description'>
                Описание
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur est ab odio alias! Labore, adipisci placeat. Autem, aliquid repellat! Enim dignissimos molestias esse quas reprehenderit unde, pariatur repellat ex.
            </div>
            <div className='view-item__review'>
                <p className='view-item__review-title'>Отзывы о компании</p>
                <div>
                    Начертим какую-то диаграмму в будущем:)
                </div>
            </div>
        </div>
    )
}
