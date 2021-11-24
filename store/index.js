
import { createCartItem, fetchCartItems } from "~/api"

export const state = () => ({
  cartItems: [], // 여러페이지에서 사용되는 공통의 아이템
})


// actions, mutations은 상수화 하는게 좋음 (ex. FETCH_CART_ITEMS)
export const actions = {
  async FETCH_CART_ITEMS({commit}) {
    const {data} = await fetchCartItems();

    commit('SET_CART_ITEM', data)
  },
  nuxtServerInit() { // store를 생성하는 시점에 데이터가 다 설정되게 해주는,, 어떤 actions의 엔트리 포인트

  }
}

export const mutations = {
  SET_CART_ITEM(state, cartItems) {
    state.cartItems = cartItems
  }
}

