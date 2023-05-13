import { Link } from 'react-router-dom'
import '../style/cardSummary.css';
import GeneralCard from './GeneralCard';
import CardSummary from './CardSummary';

export default function WrapperEducation() {
    return (
        <div className="wrapper-experince-container">
            <h2 className="wrapper-experince-container__title">Высшее образование</h2>
            <div className="wrapper-experince-container__new-block">
                <Link to='/person/educations/university_educations' className="wrapper-experince-container__new">Добавить образование</Link>
            </div>
            <div className="wrapper-experince-container__new-card">
                <GeneralCard relink='/person/educations/reuniversity_educations' deletes='/'>
                    <CardSummary
                        company='Название университета'
                        direction='Номер институтв'
                        time='Время учебы'
                        task='Направлние'
                        kSkills='Курсовые'
                    />
                </GeneralCard>
            </div>
            <h2 className="wrapper-experince-container__title">Дополнительное образование</h2>
            <div className="wrapper-experince-container__new-block">
                <Link to='/person/educations/additional_educations' className="wrapper-experince-container__new">Добавить образование</Link>
            </div>
            <div className="wrapper-experince-container__new-card">
                <GeneralCard relink='/person/educations/readditional_educations' deletes='/'>
                    <CardSummary
                        company='Название университета'
                        direction='Номер институтв'
                        time='Время учебы'
                        task='Направлние'
                        kSkills='Курсовые'
                    />
                </GeneralCard>
            </div>
        </div>
    )
}