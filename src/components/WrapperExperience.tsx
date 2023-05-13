import { Link } from "react-router-dom";
import CardSummary from "./CardSummary";
import '../style/cardSummary.css';
import GeneralCard from "./GeneralCard";

export default function WrapperExperience() {
    return (
        <div className="wrapper-experince-container">
            <h2 className="wrapper-experince-container__title">Заполните резюме</h2>
            <div className="wrapper-experince-container__new-block">
                <Link to='/person/experiences/summary' className="wrapper-experince-container__new">Добавить резюме</Link>
            </div>
            <div className="wrapper-experince-container__new-card">
                <GeneralCard relink='/person/educations/resummary' deletes='/'>
                    <CardSummary
                        company='Название компании'
                        direction='Должность в компании'
                        time='Время работы'
                        task='Задачи'
                        kSkills='Ключевые навыки'
                    />
                </GeneralCard>
            </div>
        </div>
    )
}