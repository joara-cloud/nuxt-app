<template>
  <div id="app" class="v-application">
    <v-container class="main">

      <!-- <search-input 
        :search-keyword="searchKeyword"
        @input="updateSearchKeyword"
      ></search-input> -->
      <!-- @input은 SearchInput컴포넌트의 'input'이벤트를 받은것임 => 이렇게되면 props로 데이터도 내려주고 아래에서 데이터도 받기 때문에 컴포넌트끼리 데이터를 동기화 -->
      <!-- 위 구문을 v-model로 엮어줄수가 있음 (v-model은 input에만 쓸수있는게 아니라 component에도 쓸수있음) -->
        <v-container wrap class="search_container">
            <v-flex d-flex justify-end fluid>
              <search-input 
                v-model="searchKeyword"
                @search="searchProducts"
              ></search-input>
            </v-flex>
        </v-container>
      
      <v-container class="prd_list" grid-list-lg>
        <v-layout wrap>
          <v-flex v-for="product in products" :key="product.id" class="item flex" v-on:click="moveToDetailPage(product.id)" lg4 md4 sm4 xs6 >
            <v-card>
              <v-img
                height="250"
                :src="product.imageUrl" 
                :alt="product.name" 
              ></v-img>

              <v-card-title>{{ product.name }}</v-card-title>

              <v-card-text>
                <div class="my-4 text-subtitle-1">
                  ${{ product.price }}
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <!-- <a href="" class="cart" @click="addToCart">cart</a> -->
      <v-btn
        class="mx-2 cart"
        fab
        dark
        color="indigo"
        @click="goToCart"
      >
        <v-icon dark>
          mdi-cart
        </v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';
import SearchInput from '@/components/SearchInput.vue';
import {fetchProductsByKeyword} from '@/api/index.js'; // @경로는 nuxt내에 설정되어있음

export default {
  name: 'index',
  components: {
    SearchInput
  },
  data() {
    return {
      searchKeyword: '',
      // breakpoint: ''
    }
  },
	async asyncData({ params, $http }) {
    const response = await axios.get(`http://localhost:3000/products`);
		const products = response.data.map(item => ({ // map() 배열을 변형함 
				...item,
				imageUrl: `${item.imageUrl}?random=${Math.random()}`
		}))
    return { products } // products는 data 속성에 정의 되어있지 않지만 data 속성으로 정의될것이다
  },
  methods: {
    moveToDetailPage(id) {
      this.$router.push(`detail/${id}`); // nuxt는 router를 내부적으로 품고있어서 사용할수있음
    },
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword);
      this.products = response.data.map(item => ({ // data속성에 정의되진 않았지만 asyncData에 정의된 데이터로 data속성에 있는것과 마찬가지로 this로 접근가능함!!
				...item,
				// imageUrl: `${item.imageUrl}?random=${Math.random()}`
		  }))
    },
    goToCart() {
      this.$router.push('/cart') // promise를 반환하기 떄문에 catch로 처리가능
    }
  },
  // computed: {
  //   breakpoint:function() {
  //     console.log('computed: ', this.$vuetify.breakpoint.name);
  //   }
  // },
  computed: {
    // height () {
    //   console.log('sdfsdf ', this.$vuetify.breakpoint.name);
    // },
  },
}
</script>


<style scoped>
li {list-style:none;}
/* .flex {display: flex;justify-content: center;} */
.item {cursor: pointer;}
.item p {margin:0;padding:0}
.item span {margin:0;padding:0}
.product-image {width:100%;}
.app {position: relative;}
.cart-wrapper {position: sticky;float: right;bottom: 50px;right: 50px;}
.cart-wrapper .btn {display: inline-block;height: 40px;font-size: 1rem;font-weight: 500;}
.main {max-width:1200px;width:100%;margin:0 auto}
/* .prd_list > li {width:30%;margin-left:5%} */
/* .prd_list > li:nth-child(3n+1) {margin-left:0} */
.cart {display:flex;position:fixed;right:50px;bottom:30px;width:70px;height:70px;border-radius:50%;justify-content:center;align-items:center;background-color:#00c58e;color:#fff}
</style>