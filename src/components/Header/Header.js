import React, {useState, useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Cart from '../Cart/Cart';
import { StyledCart, StyledCartCircle, StyledDarkModeBtn, StyledDarkModeCircle, StyledHeader } from './HeaderStyling'

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(window.localStorage.getItem('darkmode')));
    const cartItems = useSelector(state => state.cart.itemList);
    const showCart = useSelector(state => state.cart.showCart);
    const dispatch = useDispatch();

    const handleDarkmode =  () => {
        setIsDarkMode(!isDarkMode);
    }

    useEffect(() => {  
        if(!isDarkMode && document.querySelector('body')){
            document.querySelector('body').classList.add('light-theme');   
        }
        else if(isDarkMode && document.querySelector('body')){
            document.querySelector('body').classList.remove('light-theme');
        }
        window.localStorage.setItem('darkmode', JSON.stringify(isDarkMode));
        setIsDarkMode(JSON.parse(window.localStorage.getItem('darkmode')));
    }, [isDarkMode]);

  
    const toggleCart = () => {
            dispatch(cartActions.setShowCart());
    }
   
  return (  
    <StyledHeader>
        <StyledDarkModeBtn className='darkmode__toggle' onClick={handleDarkmode}>
            <StyledDarkModeCircle className='darkmode__circle' isDarkMode={isDarkMode}>
                {isDarkMode ?  <img src="./moon.svg" alt="" /> : <img src="./sun.svg" alt="" />}
            </StyledDarkModeCircle>
        </StyledDarkModeBtn>
        <StyledCart className='cart__btn' onClick={toggleCart}>
            <img src="./cart.svg" alt="" />
            <StyledCartCircle>{cartItems.length}</StyledCartCircle>
        </StyledCart>
        {showCart && <Cart/>}
    </StyledHeader>
  )
}

export default Header