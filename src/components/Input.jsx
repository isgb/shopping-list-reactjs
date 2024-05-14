import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

export const Input = () => {
    return (
        <>
            <div className='input-container mt-4 mb-2 d-flex justify-content-center align-items-center'>
                <input type='text' placeholder='Add and item' />
                <FontAwesomeIcon icon={faPlus} />
            </div>
        </>
    )
}
