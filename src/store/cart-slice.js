import {
    createSlice
} from '@reduxjs/toolkit'

const LS_cartList = JSON.parse(window.localStorage.getItem('cart'));

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: LS_cartList ? LS_cartList : [],
        showCart: false,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += +newItem.price;

            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: +newItem.price,
                    quantity: 1,
                    totalPrice: +newItem.price,
                    title: newItem.title,
                    imgUrl: newItem.imgUrl,
                });
            }
            window.localStorage.setItem('cart', JSON.stringify(state.itemList));
        },

        removeCartItem(state, action) {
            const id = action.payload;
            const existingItem = state.itemList.find(item => item.id === id);
            if (existingItem) {
                state.itemList = state.itemList.filter(item => item.id !== id);
                window.localStorage.setItem('cart', JSON.stringify(state.itemList));
            }
        },

        decrimentCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemList.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.itemList = state.itemList.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
            window.localStorage.setItem('cart', JSON.stringify(state.itemList));
        },

        setShowCart(state) {
            state.showCart = !state.showCart;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;