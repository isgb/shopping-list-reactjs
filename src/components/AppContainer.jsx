import React, { useContext } from 'react'
import { Input } from './Input'
import { Item } from './Item'
import { CountItems } from './CountItems'
import { DataItemsContext } from '../context/DataItemsContext'

export const AppContainer = () => {

    const { items } = useContext(DataItemsContext);

    return (
        <>
            <div className='app-container d-flex justify-content-center align-items-center'>

                <div className='list-container container'>
                    <div className='row'>

                        <Input />

                        {
                            items.map((item, index) => (
                                <Item
                                    key={index}
                                    index={index}
                                    name={item.itemName}
                                    count={item.count}
                                    selected={item.selected}
                                />
                            ))
                        }

                        <CountItems />

                    </div>
                </div>
            </div>
        </>
    )
}
