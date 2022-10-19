import React from 'react'
import { StyledProduct } from '../ProductList/ProductListStyling'
import {useDispatch} from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const Product = ({title, price, imgUrl, id}) => {
    const dispatch = useDispatch();
    
    const addToCart = () => {
        dispatch(
            cartActions.addToCart({
                id,
                title,
                price,
                imgUrl
            })
        );
    }
  
    return (
        <StyledProduct id={id}>
            <div>
                <img src={imgUrl} alt="" />
            </div> 
            <p>{title}</p>
            <span>{parseInt(price)}$</span>
            <button onClick={addToCart}>Add to cart</button>
        </StyledProduct>
    )
}

export default Product