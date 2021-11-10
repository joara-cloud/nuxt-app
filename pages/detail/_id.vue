<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">장바구니 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
import {fetchProductById, createCartItem} from '@/api/index.js'

export default {
	async asyncData({ params }) {
		const response = await fetchProductById(params.id);
		const product = response.data;
		return {product}
	},
  methods: {
    async addToCart() {
      try {
        const response = await createCartItem(this.product);
        console.log(response);
      }catch {
        alert('이미 담겨있는 상품입니다.')
        return;
      }
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart') // promise를 반환하기 떄문에 catch로 처리가능
    }
  }
	// created() {
	// 	const id = this.$route.params.id;
	// 	fetchProductById(id);
	// }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>