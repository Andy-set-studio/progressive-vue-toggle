// The better way to do this is to create an alias in our webpack config
import Vue from 'vue/dist/vue.js';
import TogglePanel from './components/TogglePanel.vue';

Vue.config.productionTip = false;

new Vue({
  components: {
    TogglePanel
  },
  data() {
    return {};
  }
}).$mount('main');
