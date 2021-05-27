<template>
    <div class="page">
        <div class="label">Ваша корзина: </div>
        <div v-if="basket.length" class="basket">
            <div class="basket__items">
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
            

            <div class="checkout">
                <div class="checkout__items-count">
                    Товаров к покупке: <strong>{{basket.length}}</strong>
                </div>
                <div class="checkout__items-sum">
                    Сумма: <strong>{{sum}} &#8381;</strong>
                </div>
                <button class="clear-basket_button"
                    @click="clearBasket"
                >
                    Очистить корзину
                </button>
                <button class="checkout__button"
                    @click="checkout"
                >
                    Оформить заказ
                </button>
            </div>
                
        </div>
        <div v-else>
            Корзина пуста!
            <router-link :to="{name: 'Home'}" class="link">
                Перейти к списку товаров
            </router-link>
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
        },
        clearBasket(){
            this.basket.forEach(item => this.deleteItem(item));
            
        },
        checkout(){
            alert('Покупка оформлена!')
            this.clearBasket()
        }
    },
    computed:{
        basket(){
            return this.$store.getters.getBasketItemsId
        },
        items(){
            return this.$store.getters.getItemsById(this.basket)
        },
        sum(){
            return this.items.reduce((acc,cv)=>{
                return acc + cv.price
            },0)
        }

    }
}
</script>

<style scoped>
    .page{
        width: 70%;
        min-width: 720px;
        margin: 0 auto;
    }
    .label{
        font-size: 20px;
    }
    .link{
        color: rgb(140, 0, 255);
        text-decoration: none;
        font-weight: bold;
    }
    .basket{
        display: flex;
    }
    .basket__items{
        margin-right: 10px;
    }
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
        box-sizing: border-box;
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
    .checkout{
        width: 200px;
        height: 210px;
        padding:10px;
        box-sizing: border-box;
        background-color: white;
        box-shadow: 0px 0px 5px 0px rgb(116, 116, 116);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }
    .checkout__items-count{
        margin-bottom: 10px;
        text-align: center;
    }
    .checkout__items-sum{
        text-align: center;
        font-size: 18px;
        margin-bottom: 10px;

    }
    .checkout__button{
        width: 120px;
        height: 40px;
        background-color: rgb(94, 255, 207);
        border:none;
        border-radius: 5px;
        margin:25px auto 0 auto;
        box-shadow: 0px 2px 5px 0px rgb(78, 78, 78);
    }
    .checkout__button:active{
        transform: translateY(2px);
    }
    .clear-basket_button{
        width: 130px;
        height: 30px;
        background-color: rgb(255, 74, 98);
        border:none;
        border-radius: 5px;
        margin:10px auto 0 auto;
        box-shadow: 0px 2px 5px 0px rgb(78, 78, 78);
    }
    .clear-basket_button:active{
        transform: translateY(2px);
    }
    .checkout__button:hover {
        box-shadow: 0px 2px 5px 0px rgb(30, 126, 97);
    }
    .clear-basket_button:hover{
        box-shadow: 0px 2px 5px 0px rgb(175, 0, 44);

    }
</style>