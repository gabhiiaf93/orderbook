import {useState} from 'react';
import './App.css';
import { OrderBook } from './component/order-book';
import {randomNumberGenerator, sortedElements} from './handler';

function App() {
  const [orders, updateOrders] = useState({
    buy:[],
    sell:[], 
    activeButton: ''
  });
  const onClickHandler = (type) => {

    const item = {
      id: randomNumberGenerator(1, 1000),
      volume: randomNumberGenerator(0.368, 2.398).toFixed(2),
      price: randomNumberGenerator(2877, 5892).toFixed(2)
    };
    switch(type) {
      case 'BUY':
        updateOrders(
          {
            buy: sortedElements(orders.buy, item),
            sell: [...orders.sell],
            activeButton: 'BUY'
          }
        )
        break;
        case 'SELL':
          updateOrders(
              {
                buy: [...orders.buy],
                sell: sortedElements(orders.sell, item),
                activeButton: 'SELL'
              }
            )
          break;
        default:
          console.log('Do nothing for now');
          break;
    }
  }

  return (
    <div className="App">
      <OrderBook onClickHandler={onClickHandler} orders={orders}/>
    </div>
  );
}

export default App;
