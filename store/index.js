export const state = () => ({
  cartItems: [], // 여러페이지에서 사용되는 공통의 아이템
})

export const mutations = {
  addCartItem(state, cartItem) {
    state.cartItems.push(cartItem)
  }
}