import Vue from 'vue'
import WebFont from 'webfontloader';
import App from './App.vue'
import store from './store';

Vue.config.productionTip = false

WebFont.load({
	google: {
		families: ['Aleo:400,400i,700'],
	},
})

new Vue({
	render: h => h(App),
	store,
}).$mount('#app')
