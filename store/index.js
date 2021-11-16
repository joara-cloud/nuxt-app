// import fetchCartItems from 'api/index.js'

import { fetchCartItems, createCartItem } from "~/api"

export const state = () => ({
  cartItems: [], // 여러페이지에서 사용되는 공통의 아이템
})

export const actions = {
  async fetchCartItems(context) {
    await fetchCartItems()
  },
  async ADD_CART({commit}, cartItem) {
    const response = await createCartItem(cartItem)
  }
}

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push(cartItem)
  }
}