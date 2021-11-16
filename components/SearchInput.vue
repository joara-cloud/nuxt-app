<template>
  <div class="input-wrapper">
      <!-- <input type="text" 
        :value="value" 
        @input="$emit('input', $event.target.value)"
        class="search-input"
      />  -->
      <!-- $event.target.value의 값이 바뀔 때마다(@input 이벤트가 발생하면) input이벤트('input')를 발생시키겠다(이벤트를 위로 올리겠다) -->
      <!-- 양방향 데이터로 적용했을 때 v-model로 받으려면 value로 받아야함!!!! -->
      <!-- <button type="button" @click="$emit('search')" class="btn">Search</button> -->

      <div action="" class="search_wrap">
        <input type="text" 
          class="search-input"
          placeholder="검색할 상품을 입력해주세요."
          :value="value" 
          @input="$emit('input', $event.target.value)"
        /> 
        <!-- <v-text-field 
          label="검색할 상품을 입력해주세요."
          :value="value" 
          @input="$emit('input', $event.target.value)"
          class="search-input"
        ></v-text-field> -->
        <v-btn
          rounded
          color="primary"
          dark
          type="submit"
          @click="$emit('search')"
        >
          Search
        </v-btn>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => ''
    }
  },
}
</script>

<style lang="scss">
// .input-wrapper.flex {
//   height: 40px;
//   margin: 1rem 0;justify-content:flex-end;
// }
.search-input {
  width: 210px;
  font-size: 1.2rem;letter-spacing:-1px;
  font-weight: 500;outline:none;font-size:14px;border-bottom:1px solid #555;padding:8px 5px;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
.search_wrap {display:flex;position:relative;align-items:center}
.search_wrap button[type="submit"] {margin-left:20px}
.v-text-field .v-label {font-size:14px;letter-spacing:-0.5px;}
/* .search_wrap button[type="submit"] {position:absolute;right:0;top:50%;transform:translateY(-50%);} */
</style>