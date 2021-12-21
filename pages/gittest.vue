<template>
    <v-row>
      <v-col
        class="d-flex align-center"
        cols="12"
        sm="6"
      >
        aaaa
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        sdf
      </v-col>

      <v-col
        class="orange lighten-3 pa-0"
        cols="12"
      >
        <v-sheet
          :class="[computedMargin]"
          elevation="4"
          rounded
        >
          <div
            :class="[computedPadding]"
            class="light-green lighten-3"
          >
            <div
              class="white text-center py-6"
              v-text="playgroundText"
            ></div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>