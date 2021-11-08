<template>
	<div>
		<!-- <header> -->
			<!-- <h1>{{$route.name}} 페이지</h1>
			<h1>
				<NuxtLink to="/">Nuxt Shopping</NuxtLink>
			</h1> -->
			<!-- <nuxt-link to="/">홈페이지</nuxt-link>	
			<nuxt-link to="/main">메인 페이지</nuxt-link>	
			<nuxt-link to="/product">상품 페이지</nuxt-link>	 -->
		<!-- </header> -->
		<header class="title">
			<nuxt-link class="logo" to="/">Nuxt Shopping</nuxt-link>
		</header>
		<Nuxt />
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
	text-transform:uppercase;
	font-size:30px;letter-spacing:-1px;
}
.logo:visited {
  color: inherit;
}
</style>