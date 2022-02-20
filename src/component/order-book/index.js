import {Button} from '../button-wrapper';
import {ListOrders} from '../list-orders';
import './order-book.css';
import {BUY, SELL} from '../../constant';

export const OrderBook = ({
    onClickHandler, orders
}) => {
    const {buy, sell, activeButton} = orders;
    return (
        <div className="order-book">
            <div className="buttonPlacement">
                <Button onClickHandler= {() => onClickHandler(BUY)} isActive={activeButton === BUY} buttonName={BUY} />
                <Button onClickHandler={() => onClickHandler(SELL)} isActive={activeButton === SELL} buttonName={SELL} />
            </div>
            <div>
                {!!buy.length && <ListOrders orders={buy} type={BUY}/>}
                <hr />
                {!!sell.length && <ListOrders orders={sell} type={SELL}/>}
            </div>
        </div>
        
    );
}