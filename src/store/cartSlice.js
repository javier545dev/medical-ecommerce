import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  totalQuantity: 0,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      const existItem = state.itemsList.find((item) => item.id === newItem.id)

      if (existItem) {
        existItem.quantity++
        existItem.totalPrice += newItem.price
      } else {
        state.itemsList.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          cover: newItem.cover,
        })
        state.totalQuantity++
      }
    },
    removeFromCart(state, action) {
      const id = action.payload
      const existItem = state.itemsList.find((item) => item.id === id)

      if (existItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id)
        state.totalQuantity--
      } else {
        existItem.quantity--
        existItem.totalPrice -= existItem.price
      }
      state.totalQuantity--
    },
    deleteItem(state, action) {
      const id = action.payload
      const existItem = state.itemsList.find((item) => item.id === id)
      state.totalQuantity -= existItem.quantity
      state.itemsList = state.itemsList.filter((item) => item.id !== id)
    }
  },
})

export const cartActions = cartSlice.actions
export default cartSlice
