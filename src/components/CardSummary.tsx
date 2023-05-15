import React from 'react'
import { ICardSummary } from '../interface/app.interface'

export default function CardSummary({company, direction, time, task, kSkills}: ICardSummary) {
    return (
        <React.Fragment>
            <div className="card-summary__block">
                <div className="card-summary__avatar"></div>
                <h3 className='card-summary__title'>{company}</h3>
            </div>
            <div className="card-summary__block">
                <p className="card-summary__text">{direction}</p>
            </div>
            <div className="card-summary__block">
                <p className="card-summary__text">{time}</p>
            </div>
            <div className="card-summary__block">
                <p className="card-summary__text">{task}</p>
            </div>
            <div className="card-summary__block">
                <p className="card-summary__text">{kSkills}</p>
            </div>
        </React.Fragment>
    )
}
