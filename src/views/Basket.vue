<template>
    <div class="page">
        Корзина:
        <div v-if="basket.length">
            <div class="item"
                v-for="item in items"
                :key="item.id"
            >
                <img class="item__image" :src="item.image" alt="">
                <div class="item__name">
                    {{item.name}}
                </div>
                <div class="container">
                    <button class="item__delete-button"
                        @click="deleteItem(item.id)"
                    >
                        &times;
                    </button>
                    <div class="item__price">
                        {{item.price}} &#8381;
                    </div>
                </div>
                
            </div>
                    
                
        </div>
        <div v-else>
            Корзина пуста!
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    created(){
    },
    methods:{
        deleteItem(item){
            this.$store.commit('DELETE_BASKET_ITEM',item)
        }
    },
    computed:{
        basket(){
            return this.$store.getters.getBasketItemsId
        },
        items(){
            return this.$store.getters.getItemsById(this.basket)
        }

    }
}
</script>

<style scoped>
    .item{
        background-color: white;
        display:flex;
        width:500px;
        height: 100px;
        box-shadow: 0px 0px 5px 0px rgb(116, 116, 116);
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        border-radius: 5px;
    }
    .item__image{
        max-width: 100px;
        max-height: 90%;
        margin: auto 0px auto 10px;
    }
    .item__name{
        align-self: flex-start;
        margin-top: 10px;
    }
    .container{
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
        margin-right: 15px;

    }
    .item__delete-button{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color:rgb(255, 17, 0) ;
        border:none;
        box-shadow: 0px 0px 3px 1px rgb(63, 63, 63);
        font-size: 20px;
    }
    .item__delete-button:hover{
        box-shadow: 0px 0px 3px 2px rgb(255, 0, 0);
    }
    .item__delete-button:active{
        transform: translateY(1px);
    }
    .item__price{
        font-weight: bold;
        color: rgb(39, 39, 39);
    }
</style>