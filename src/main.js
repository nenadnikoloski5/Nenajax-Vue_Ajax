import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routers';
import HeaderPartial from './Header.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes
});

Vue.component('headerPartial', HeaderPartial);

new Vue({
	el: '#app',
	router: router,
	render: (h) => h(App)
});
