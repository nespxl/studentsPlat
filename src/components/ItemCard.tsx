import { Link } from "react-router-dom";
import { IItemCard } from "../interface/app.interface";
import '../style/itemCard.css'

export default function ItemCard({id, title, body}: IItemCard) {
    return (
        <div className='itemCard'>
            <Link to={`${id}`} className='itemCard__link'>
                <div className='itemCard__info'>
                    <h1 className="itemCard__info-title">{title}</h1>
                    <p className="itemCard__info-wage">Зарплата</p>
                    <p className="itemCard__info-description">{body}</p>
                </div>
                <div className='itemCard__block-more'>
                    <p className='itemCard__more'>ПОДРОБНЕЕ</p>
                    {/* <div className="arrow-1">
                        <div></div>
                    </div> */}
                </div>
            </Link>
        </div>
    )
}
