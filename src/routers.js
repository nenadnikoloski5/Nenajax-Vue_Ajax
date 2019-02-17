import Sports from './Sports.vue';
import Shibes from './Shibes.vue';
import Foxes from './Foxes.vue';
import Dogs from './Dogs.vue';
import Bored from './Bored.vue';
import Home from './Home.vue';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/sports', component: Sports },
	{ path: '/shibes', component: Shibes },
	{ path: '/foxes', component: Foxes },
	{ path: '/dogs', component: Dogs },
	{ path: '/bored', component: Bored }
];
