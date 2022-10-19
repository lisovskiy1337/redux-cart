import React from 'react'
import { useDispatch } from 'react-redux';
import { StyledCartItem } from '../Cart/CartElements'
import { cartActions } from '../../store/cart-slice';

const CartItem = ({title, price, imgUrl, id, quantity, totalPrice}) => {

    const dispatch = useDispatch();
    const incrementItem = () => {
        dispatch(
            cartActions.addToCart({
                id,
                title,
                price,
                imgUrl
            })
        );
    }
    const dectrimentItem = () => {
        dispatch(cartActions.decrimentCart(id));
    }
    const removeItem = () => {
        dispatch(cartActions.removeCartItem(id));
    }
  return (
    <StyledCartItem  id={id}>
        <img src={imgUrl} alt="" />
        <div>
            <h4>{title}</h4>
            <p>{totalPrice}$</p>
            <div>
                <span>Quantity:</span>
                <button className="quantity--change" onClick={dectrimentItem}>-</button>
                <p>{quantity}</p>
                <button className="quantity--change" onClick={incrementItem}>+</button>
                <button className="remove--btn" onClick={removeItem}>Remove</button>
            </div>
        </div>
    </StyledCartItem>
  )
}

export default CartItem