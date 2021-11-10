// import fetchCartItems from 'api/index.js'

import { fetchCartItems } from "~/api"

export const state = () => ({
  cartItems: [], // 여러페이지에서 사용되는 공통의 아이템
})

export const actions = {
  async fetchCartItems(context) {
    await fetchCartItems()
  } 
}

// export const actions = {
//   ara() {
//     console.log('ara');
//   }
// }

// export const actions = {
//   FETCH_CART_ITEMS({commit}) {
//     fetchCartItems();
//   }
// }

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push(cartItem)
  }
}