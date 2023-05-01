import { useState } from 'react'
import { ISelect } from '../../interface/app.interface'
import '../../style/ui/select.css'

export default function Select({selected, options, setSelected}: ISelect) {
    const [isActiveSelect, setIsActiveSelect] = useState(false)

    return (
        <div className='dropdown'>
            <div className="dropdown-btn" onClick={e => setIsActiveSelect(!isActiveSelect)}>{selected}</div>
            {isActiveSelect && (
                <div className="dropdown-content">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className="dropdown-item"
                            onClick={e => {
                                setIsActiveSelect(false)
                                setSelected(option)
                            }}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}