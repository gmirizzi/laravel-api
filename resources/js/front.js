require('./bootstrap');

window.Vue = require('vue');
window.Axios = require('axios');

import App from './views/App.vue';

const app = new Vue({
    el: '#app',
    render: h => h(App),
});