import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import style from "./style/list.module.css"
import { Button } from '@mui/material'
import ClipboardJS from 'clipboard';
import { filterItems } from '../filterItems/filterItems';
import {InfinitySpin } from 'react-loader-spinner';

function List() {
    const data = useSelector(state => state.data.data)
    const inputValue = useSelector(state => state.inputValue.inputValue)
    const list = data.map(result => result.name)

    const [filteredItems, setFilteredItems] = useState(null);

    const textToCopyRef = useRef(null);

    useEffect(() => {
        filterItems(inputValue, list, setFilteredItems); 
    }, [inputValue]);

    useEffect(() => {
        new ClipboardJS('.copy-button', {
            text: function() {
                return textToCopyRef.current.textContent;
            }
        });
    }, []);



    return (
        <div className={style.list}>
            <div className={style.list__all}>
                {filteredItems !== null ? (
                    <div className={style.list__info}>
                        <p ref={textToCopyRef}>{filteredItems}</p>
                        <Button className="copy-button" variant='contained'>Скопіювати</Button>
                    </div>
                ): <InfinitySpin/>
                }
            </div>
        </div>
    )
}

export default List