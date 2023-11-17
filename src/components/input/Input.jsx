import React from 'react'
import style from "./style/input.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';

function Input() {
    const dispatch = useDispatch()
    const inputValue = useSelector(state => state.inputValue.inputValue)

    return (
        <div className={style.input}>
            <div className={style.input__wrapper}>
                <div className={style.input__body}>
                    <SearchIcon className={style.input__search}/>
                    <input 
                        placeholder='Алчевським МВ УМВС...' 
                        className={style.input__input} 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => dispatch({type: "CHANGE VALUE", payload: e.target.value})}
                    />
                </div>
            </div>
        </div>
    )
}

export default Input