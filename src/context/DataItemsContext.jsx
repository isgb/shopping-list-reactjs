import { createContext, useState } from "react";

export const DataItemsContext = createContext();

export const DataItemsProvider = ({ children }) => {

    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('');

    const handleAddItem = () => {

        if (inputValue.trim() !== '') {
            const newItem = {
                itemName: inputValue,
                count: 1,
                selected: false
            }
            setItems([
                ...items,
                newItem
            ]);
            setInputValue('');
        }
    }

    const handleChangeSelected = (index) => {
        const updateditems = [...items];
        updateditems[index].selected = !updateditems[index].selected;
        setItems(updateditems);
    }

    const countIncrease = (index) => {
        const updateditems = [...items];
        updateditems[index].count++;
        setItems(updateditems);
    }

    const countDecrease = (index) => {
        const updateditems = [...items];
        if (updateditems[index].count > 0) {
            updateditems[index].count--;
            setItems(updateditems);
        }
    }

    return (
        <DataItemsContext.Provider value={{
            items,
            setItems,
            inputValue,
            setInputValue,
            handleAddItem,
            handleChangeSelected,
            countIncrease,
            countDecrease
        }}>
            {children}
        </DataItemsContext.Provider>
    )
}