import './list.css';
import {BUY} from '../../constant';
export const ListOrders = ({orders, type}) =>  orders.map((order) => {
    const {id, volume, price} = order;
    return(
        <div key={id} className={`listElements ${type === BUY ? "buy" : "sell"}`}>
            <div className='price'>{`$${price}`}</div>-<div className='volume'>{volume}</div>
        </div>
    );
    })
