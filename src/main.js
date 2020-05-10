import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
const config = {
  apikey:'AIzaSyBureAzAznURcoruIkboKx4xgSxY3AAfHg',
  projectId:'test-uno-416e3',
  authDomain:'test-uno-416e3.firebaseapp.com',
  databaseURL:'https://test-uno-416e3.firebaseio.com',
  storageBucket:'test-uno-416e3.appspot.com',
}

firebase.initializeApp(config);

export default firebase;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
