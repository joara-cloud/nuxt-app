<template>
  <div class="input-wrapper flex">
      <input type="text" 
        :value="value" 
        @input="$emit('input', $event.target.value)"
        class="search-input"
      /> 
      <!-- $event.target.value의 값이 바뀔 때마다(@input 이벤트가 발생하면) input이벤트('input')를 발생시키겠다(이벤트를 위로 올리겠다) -->
      <!-- 양방향 데이터로 적용했을 때 v-model로 받으려면 value로 받아야함!!!! -->
      <button type="button" @click="$emit('search')" class="btn">Search</button>
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

<style scoped>
.input-wrapper.flex {
  height: 40px;
  margin: 1rem 0;justify-content:flex-end;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>