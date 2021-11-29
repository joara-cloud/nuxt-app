import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
// import '@/assets/scss/_index.scss' // _index.scss를 한번만 불러오면 자동으로 css로 컴파일 해줌

Vue.use(Vuetify)

export default new Vuetify({
  global: {
    ripples: false,
  },
})
