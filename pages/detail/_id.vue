<template>
  <div class="d-flex justify-center" style="max-width:1000px;width:100%;margin:0 auto">
    <v-container>
      <v-layout>
        <v-flex class="main-panel text-center" lg6>
          <img
            class="product-image"
            :src="product.imageUrl"
            :alt="product.name"
          />
        </v-flex>
        <v-flex class="side-panel" lg5>
          <v-list-item>
            <v-list-item-content>
              <div class="pb-6">
                <v-list-item-title>{{ product.name }}</v-list-item-title>
                <v-list-item-subtitle class="mt-2">
                  ${{ product.price }}
                </v-list-item-subtitle>
              </div>
              <v-btn
                color="primary"
                depressed
                elevation="2"
                outlined
                text
                @click="addToCart"
              >
                Add Cart
              </v-btn>
              <v-btn
                depressed
                elevation="2"
                outlined
                text
                @click="goToCart"
              >
                Go Cart
              </v-btn>
            </v-list-item-content>
          </v-list-item>
          
          <!-- <button type="button">장바구니 담기</button> -->
        </v-flex>
      </v-layout>
    </v-container>
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
        const {data} = await createCartItem(this.product);
        
        this.$store.commit('addCartItem', data)
        
        if(confirm('장바구니에 추가되었습니다. /n장바구니로 이동할까요?')) {
          this.goToCart();
        }

        // this.$router.push('/cart') // promise를 반환하기 떄문에 catch로 처리가능
      }catch(e) {
        alert('이미 담겨있는 상품입니다.')
        console.log(e);
        return;
      }
    },
    // addToCart() {
    //   this.$store.dispatch('ADD_CART', this.product)
    // },
    goToCart() {
      this.$router.push('/cart')
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
  width: 100%;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
}
.v-list-item__title {white-space:normal;}
</style>