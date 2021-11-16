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
    <v-btn color="primary">
      구매하기
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: []
    }
  },
  created() {
    this.cartItems = this.$store.state.cartItems;
  },
  asyncData({store}) {
    store.dispatch('fetchCartItems')
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