import React from 'react'
import { IButton } from '../../interface/app.interface'
import '../../style/ui/buttonTrue.css'

export default function ButtonTrue({setCount, count}: IButton) {

    function addNewField(e: React.MouseEvent) {
        e.preventDefault()
        setCount(count+1)
    }

    return (
        <div className='button-add-container'>
            <div className={!(count > 2) ? '' : 'button-disabled'}></div>
            <button className="button-true" onClick={(e) => addNewField(e)} disabled={(count === 3) ? true : false}>Добавить</button>
        </div>
    )
}
