import Vue from 'vue'
import VueRouter from 'vue-router'
import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'

Vue.use(Vuex)

const routes = require('./api/routes/routes');

const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    St = require('./api/models/StoreModel'),
    port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost/mystore');

routes(app);
app.listen(port);

/*const store= new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        cart: [],
        price: 0
    },
    mutations: {
        setP:(state,c)=>state.price+=c,
        setCart: (state, c) => state.cart.push(c) 
    },
    getters: {
        getCart:(state)=>
        {
            return ('Товари:'+state.cart + '  До сплати: '+state.price)
        },
    }
})*/
export default store;