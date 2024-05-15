
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Item } from './components/Item';
import { useContext } from 'react';
import { Input } from './components/Input';
import { CountItems } from './components/CountItems';
import { DataItemsContext } from './context/DataItemsContext';

function App() {

  const {items} = useContext(DataItemsContext);

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
                    index={index}
                    name={item.itemName}
                    count={item.count}
                    selected={item.selected}
                  /> 
              ))
            }

           <CountItems/>

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
