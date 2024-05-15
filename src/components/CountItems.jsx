import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import { DataItemsContext } from '../context/DataItemsContext';

export const CountItems = () => {

    const {items} = useContext(DataItemsContext);
    let countItems = items.length;

    return (
        <>
            <div className='count-items d-flex justify-content-end mb-3'>
                <span>Total : {(countItems!== 0) ? countItems : 0 }</span>
            </div>
        </>
    )
}
