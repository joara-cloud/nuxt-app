<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <div class="list-wrapper">
      <ul>
        <li v-for="(cartItem, index) in $store.state.cartItems" :key="index">
          <div class="list-item">
            <img :src="cartItem.imageUrl" :alt="cartItem.name" class="thumbnail" />
            <div class="description">
              <p>{{cartItem.name}}</p>
              <span>{{cartItem.price}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="text-right">
      <v-btn color="primary">
        구매하기
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  // asyncData 자체가 비동기를 호출하고 결과까지 반환해줘야하기때문에 async await
  async asyncData({ store }) { //  첫 번째 인자는 nuxt의 context (참고: https://nuxtjs.org/docs/internals-glossary/context/)
    await store.dispatch('FETCH_CART_ITEMS')
  },
  data() {
    return {
      cartItems: []
    }
  },
  created() {
    this.cartItems = this.$store.state.cartItems;
  }
}
</script>

<style scoped>
li {list-style:none;}
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
}
.thumbnail {
  width: 100px;
  height: 100px;
}
.description {
  padding: 2rem 1rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>