import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {

  const items = [
    { itemName: 'item 1', quantity: 1, selected: false },
    { itemName: 'item 2', quantity: 3, selected: true },
    { itemName: 'item 3', quantity: 2, selected: false },
  ];

  return (
    <>
      <div className='app-container d-flex justify-content-center align-items-center'>

        <div className='list-container container'>
          <div className='row'>

            <div className='input-container my-2 d-flex justify-content-center align-items-center'>
              <input type='text' placeholder='Add and item' />
              <FontAwesomeIcon icon={faPlus} />
            </div>

            <div className='items-container'>

              <div className='item-container'>

                <div className='item my-2 pb-1 d-flex justify-content-between'>
                  <div className='name'>
                    <FontAwesomeIcon icon={faCircle} />
                    <span className='ms-2'>Item 1</span>
                  </div>
                  <div className='button-item'>
                    <button>1</button>
                  </div>
                </div>

                <div className='item my-2 pb-1 d-flex justify-content-between'>
                  <div className='name'>
                    <FontAwesomeIcon icon={faCircle} />
                    <span className='ms-2'>Item 1</span>
                  </div>
                  <div className='button-item'>
                    <button>1</button>
                  </div>
                </div>

              </div>

            </div>

            <div className='count-items'>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
