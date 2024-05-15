import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';

export const Item = ({name, count, selected, id,
                      index, setItems, 
                      countIncrease, countDecrease, handleChangeSelected}) => {
    // console.log(id)
    return (
        <>
            <div className='item-container'>

                <div className='item my-2 pb-1 d-flex justify-content-between'>
                    <div className='name'>
                        <FontAwesomeIcon 
                            icon={(!selected) ? faCircle : faCheckCircle}
                           onClick={() => handleChangeSelected(index)} 
                        />
                        <span className='ms-2'>{name}</span>
                    </div>
                    <div className='button-item d-flex justify-content-center align-items-center'>
                        <FontAwesomeIcon 
                           icon={faMinus}
                           onClick={() => countDecrease(index)}  
                        />
                        <span className='mx-2'>{count}</span>
                        <FontAwesomeIcon 
                          icon={faPlus}
                          onClick={() => countIncrease(index)} 
                        />
                    </div>
                </div>

            </div>
        </>
    )
}
