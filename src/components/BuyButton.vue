<template>
    <button v-if="itemInBasket" class="buy__button buy__button_in-basket"
        @click="deleteFromBasket"
    >
        В корзине
   </button>
    <button v-else class="buy__button"
        @click="buy"
    >
        Купить
   </button>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        itemId:{
            type: Number,
            required:true
        }
    },
    methods:{
        buy(){
            this.$store.commit('ADD_BASKET_ITEM', this.itemId)
        },
        deleteFromBasket(){
            this.$store.commit('DELETE_BASKET_ITEM',this.itemId)
        }
    },
    computed:{
        basket(){
            return this.$store.getters.getBasketItemsId
        },
        itemInBasket(){
            return this.basket.includes(this.itemId)
        }
    },
}
</script>

<style scoped>
    .buy__button{
        width: 80px;
        height: 30px;
        box-shadow: 0px 2px 5px 0px rgb(139, 139, 139);
        border:none;
        border-radius: 100px;
        background-color: rgb(255, 196, 0);
        cursor: pointer;
    }
    .buy__button_in-basket{
        background-color: rgb(0, 255, 200);

    }
    .buy__button:hover{
        box-shadow: 0px 2px 5px 0px rgb(255, 0, 179);
    }
    .buy__button:active{
        transform: translateY(2px);
    }
</style>