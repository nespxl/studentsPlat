import { useEffect, useRef, useState } from 'react'
import { ISelect } from '../../interface/app.interface'
import '../../style/ui/select.css'

export default function Select({ selected, options, setSelected }: ISelect) {
    const [isActiveSelect, setIsActiveSelect] = useState(false)
    const list = useRef(null)

    function handleClick(e: any) {
        const withinBoundaries = e.composedPath().includes(list.current);

        if (!withinBoundaries) {
            setIsActiveSelect(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)
        // return document.removeEventListener('click', handleClick)
    }, [isActiveSelect])

    return (
        <div className='dropdown' ref={list}>
            <div className={isActiveSelect ? "dropdown-btn dropdown-btn-active" : "dropdown-btn"} onClick={() => setIsActiveSelect(!isActiveSelect)}>
                <div className={isActiveSelect ? 'dropdown-content-arrow-bottom' : 'dropdown-content-arrow-top'}></div>
                {selected}
                <div className={isActiveSelect ? 'dropdown-content-arrow-bottom' : 'dropdown-content-arrow-top'}></div>
            </div>
            {isActiveSelect && (
                <div className="dropdown-content">
                    {options.map((option, i) => (
                        <div
                            key={i}
                            className="dropdown-item"
                            onClick={() => {
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