<template>
	<v-app>
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
			<v-banner 
				class="title_banner"
				single-line
				sticky
			>
				<nuxt-link class="logo" to="/">
					<!-- NUXT SHOPPING -->
					<img src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-text.svg" alt="logo" class="logo_img">
				</nuxt-link>
			</v-banner>
		</header>
		<Nuxt />
	</v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
  height: 60px;
  padding: 0 0.5rem;
}
.logo {
	display:inline-block;text-decoration:none;
  font-weight: 900;
	text-transform:uppercase;
	font-size:30px;letter-spacing:-1px;
}
.logo_img {width:140px}
.title_banner {font-size:30px;color:#00c58e;text-align:center;}
.logo:visited {
  color: inherit;
}
</style>