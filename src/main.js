import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import Auth from "@aws-amplify/auth";
import AuthConfig from "@/aws-exports";
import ViewUI from 'view-design';
// import 'view-design/dist/styles/iview.css';
import '@/assets/theme.less';


import '@aws-amplify/ui-vue';


Vue.use(ViewUI);
Auth.configure(AuthConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
