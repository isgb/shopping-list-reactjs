import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Item } from './components/Item';

function App() {

  const items = [
    { itemName: 'item 1', quantity: 1, selected: false },
    { itemName: 'item 2', quantity: 3, selected: true },
    { itemName: 'item 3', quantity: 2, selected: false },
    { itemName: 'item 3', quantity: 2, selected: false },
  ];

  return (
    <>
      <div className='app-container d-flex justify-content-center align-items-center'>

        <div className='list-container container'>
          <div className='row'>

            <div className='input-container mt-4 mb-2 d-flex justify-content-center align-items-center'>
              <input type='text' placeholder='Add and item' />
              <FontAwesomeIcon icon={faPlus} />
            </div>

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

            <div className='count-items d-flex justify-content-end mb-3'>
                <span>Total : {(items.length !== 0) ? items.length : 0 }</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
