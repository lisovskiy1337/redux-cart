import React, {useRef, useEffect, useCallback} from 'react'
import CartItem from '../CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCartContainer, StyledCartList, StyledCartSubtotal, StyledEmptyCart } from './CartElements'
import { cartActions } from '../../store/cart-slice';

const Cart = () => {
    const ref = useRef(null);
    const cartItems = useSelector(state => state.cart.itemList);
    const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    const dispatch = useDispatch();

  const toggleCart = useCallback(() => {
            dispatch(cartActions.setShowCart());
    }, [dispatch])
    console.log(toggleCart);
    const handleClickOutside = useCallback((event) => {
        if (ref.current && !ref.current.contains(event.target) && !event.target.closest('.cart__btn')) {
            toggleCart();
        }
      }, [toggleCart]); 
     
      useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
          document.removeEventListener("click", handleClickOutside, false);
        };
      }, [handleClickOutside]);
    return (
        <StyledCartContainer ref={ref}>
            <h3>Shopping Bag</h3>
            <StyledCartList>       
                {cartItems.map((product, i) => (       
                        <CartItem key={i}
                            {...product}                
                        />
                    )
                )}          
            </StyledCartList>
            { cartItems.length > 0 ? 
                <StyledCartSubtotal>
                    <span>Subtotal</span>
                    <span>{total}$</span>
                </StyledCartSubtotal> :
            <StyledEmptyCart>Ooops, your bag is empty!</StyledEmptyCart>
            }
        </StyledCartContainer>
    )
}

export default Cart