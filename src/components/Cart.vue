<template>
    <div class="products">
        <h1>Кошик</h1>
        {{getC}}
        <!--<div v-for="qwe in getC" :key="qwe">
            <h1>{{qwe.id}}</h1>
        </div>-->
    </div>
</template>
<script>
import products from '../data/products.js'

export default {
    computed:{
        getC:function(){
        return (this.$store.getters.getCart);   
        }
    }
}
</script>