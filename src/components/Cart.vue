<template>
    <div class="products">
        <h1>Кошик</h1>
        {{getC}}
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