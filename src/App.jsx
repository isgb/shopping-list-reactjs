
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from './components/Item';
import { useState } from 'react';
import { Input } from './components/Input';
import { CountItems } from './components/CountItems';

function App() {

  const [items, setItems] = useState([
    { id:1,itemName: 'item 1', quantity: 1, selected: false },
    { id:2,itemName: 'item 2', quantity: 3, selected: true },
    { id:3,itemName: 'item 3', quantity: 2, selected: false },
  ])

  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {

    if(inputValue.trim() !== ''){
      const newItem = {
        itemName: inputValue,
        quantity: 1,
        selected: false
      }
      setItems([
        ...items,
        newItem
      ]);
      setInputValue('');
    }

  }

  const countIncrease = (index) => {
    const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
  }

  return (
    <>
      <div className='app-container d-flex justify-content-center align-items-center'>

        <div className='list-container container'>
          <div className='row'>

            {/* <Input/> */}
            <div className='input-container mt-4 mb-2 d-flex justify-content-center align-items-center'>
                <input 
                  type='text' 
                  placeholder='Add and item' 
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <FontAwesomeIcon icon={faPlus} onClick={() => {handleAddItem()}} />
            </div>

            {
              items.map((item,index) => (
                  <Item 
                    key={item.id}
                    index={index}
                    name={item.itemName}
                    quantity={item.quantity}
                    selected={item.selected}
                    id={item.id}
                    setItems={setItems}
                    countIncrease={countIncrease}
                  /> 
              ))
            }

           <CountItems
              countItems={items.length}
           />

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
