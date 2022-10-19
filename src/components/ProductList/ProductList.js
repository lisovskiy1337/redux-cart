import React from 'react'
import { StyledMain, StyledProducts } from './ProductListStyling'
import Product from '../Product/Product'

const productArr = [
    {'title' : 'Palaroid', 'price' : '850', 'imgUrl' : './images/palaroid.jpg', 'id' : '225'},
    {'title' : 'Pager', 'price' : '250', 'imgUrl' : './images/pager.jpg', 'id' : '35354'},
    {'title' : 'Turntable', 'price' : '785', 'imgUrl' : './images/turntable.jpg', 'id' : '6465'},
    {'title' : 'Walkman', 'price' : '465', 'imgUrl' : './images/walkman.jpg', 'id' : '865'},
]

const ProductList = () => {
  return (
    <StyledMain>
        <h1>All available products</h1>
        <StyledProducts>
            {productArr.map((item, i) => (    
                    <Product  key={i}
                        {...item}                
                    />       
                )
            )}
        </StyledProducts>
    </StyledMain>
  )
}

export default ProductList