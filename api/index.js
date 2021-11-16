import axios from 'axios';

const products = axios.create({
	baseURL: 'http://localhost:3000/products'
})
const cart = axios.create({
	baseURL: 'http://localhost:3000/cart'
})

// products
function fetchProductById(id) {
	return products.get(`/${id}`) // get은 baseURL을 기본적으로 깔고감. 그 이후 url만 적어주면 됨
}

function fetchProductsByKeyword(keyword) {
	// return instance.get(`/products?name_like=${keyword}`)
	return products.get(``, {
		params: {
			name_like: keyword,
		}
	})
}

// cart
function fetchCartItems() {
	const cartItems = cart.get('')
	return cartItems;
}

function createCartItem(cartItem) {
	return cart.post(``, cartItem) // 두번째 값은 넘겨줄 값
}

export { fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItems }