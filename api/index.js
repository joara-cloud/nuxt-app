import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000'
})

function fetchProductById(id) {
	return instance.get(`/products/${id}`) // get은 baseURL을 기본적으로 깔고감. 그 이후 url만 적어주면 됨
}

function fetchProductsByKeyword(keyword) {
	// return instance.get(`/products?name_like=${keyword}`)
	return instance.get(`/products`, {
		params: {
			name_like: keyword,
		}
	})
}

export { fetchProductById, fetchProductsByKeyword }