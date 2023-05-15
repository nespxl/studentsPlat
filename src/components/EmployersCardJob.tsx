import CardSummary from "./CardSummary";
import GeneralCard from "./GeneralCard";

export default function EmployersCardJob() {
    return (
        <GeneralCard relink='/employers/refactor_job' deletes='/'>
            <CardSummary
                company='Название вакансии'
                direction='Зарплата'
                time='Опыт работы'
                task='Задачи'
                kSkills='Ключевые навыки'
            />
        </GeneralCard>
    )
}