import { Link } from "react-router-dom";
import { IReLink } from "../interface/app.interface";

export default function GeneralCard({children, relink, deletes}: IReLink) {
    return (
        <div className='card-summary'>
            {children}
            <div className="card-summary__block">
                <Link to={relink} className="card-summary__link">Редактировать</Link>
                <Link to={deletes} className="card-summary__link-delete">Удалить</Link>
            </div>
        </div>
    )
}
