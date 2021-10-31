<template>
  <div>
      <input type="text" 
        :value="searchKeyword" 
        @input="$emit('input', $event.target.value)"
      />
      <button>Search</button>
  </div>
</template>

<script>
export default {
    props: {
        searchKeyword: {
            type: String,
            default: () => ''
        },
    },
}
</script>

<style>

</style>