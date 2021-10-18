<template>
  <div class="app">
    <main>
      <div>
        <input type="text">
      </div>
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex">
          <img :src="product.imageUrl" :alt="product.name" class="product-image">
          <p>{{product.name}}</p>
          <span>${{product.price}}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	async asyncData({ params, $http }) {
    const response = await axios.get(`http://localhost:3000/products`);
		const products = response.data.map(item => ({ // map() 배열을 변형함 
				...item,
				imageUrl: `${item.imageUrl}?random=${Math.random()}`
		}))
    return { products } 
  }
}
</script>


<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.item p {margin:0;padding:0}
.item span {margin:0;padding:0}
.product-image {
  width: 400px;
  height: 250px;
}

.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>