<template>
	<div>
		<h3>상세 페이지</h3>
		<img :src="product.imageUrl" :alt="product.name">
		<p>name: {{product.name}} </p>
		<p>price: {{product.price}} </p>
	</div>
</template>

<script>
import {fetchProductById} from '@/api/index.js'

export default {
	async asyncData({ params }) {
		const response = await fetchProductById(params.id);
		const product = response.data;
		return {product}
	}
	// created() {
	// 	const id = this.$route.params.id;
	// 	fetchProductById(id);
	// }
}
</script>

<style>
p {margin:0;padding:0}
</style>