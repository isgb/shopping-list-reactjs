
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Item } from './components/Item';
import { useState } from 'react';
import { Input } from './components/Input';
import { CountItems } from './components/CountItems';

function App() {

  const [items, setItems] = useState([
    { itemName: 'item 1', quantity: 1, selected: false },
    { itemName: 'item 2', quantity: 3, selected: true },
    { itemName: 'item 3', quantity: 2, selected: false },
  ])

  return (
    <>
      <div className='app-container d-flex justify-content-center align-items-center'>

        <div className='list-container container'>
          <div className='row'>

            <Input/>

            {
              items.map((item,index) => (
                  <Item 
                    key={index}
                    name={item.itemName}
                    quantity={item.quantity}
                    selected={item.selected}
                  /> 
              ))
            }

            {/* <Item /> */}

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
