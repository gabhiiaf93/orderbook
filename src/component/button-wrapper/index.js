import './button.css';
import {BUY} from '../../constant';

export const Button = ({buttonName, onClickHandler, isActive}) => {
    const colorStyle = buttonName === BUY ? {backgroundColor: 'green'} : {backgroundColor: 'red'};
    return <button style={!!isActive ? colorStyle : {}} onClick={onClickHandler}>{buttonName}</button>
}