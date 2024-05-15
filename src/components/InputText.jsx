import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataItemsContext } from '../context/DataItemsContext';

export const InputText = () => {

    const { inputValue, setInputValue, handleAddItem } = useContext(DataItemsContext);

    return (
        <>
            <div className='input-container mt-4 mb-2 d-flex justify-content-center align-items-center'>
                <input
                    type='text'
                    placeholder='Add an item'
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => { handleAddItem() }}
                />
            </div>
        </>
    )
}
