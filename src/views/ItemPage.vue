<template>
    <div v-if="item" class="page">
        <div class="item__name">
            {{item.name}}
        </div>
        <div class="item__header">
            <img class="item__image" :src="item.image" alt="">
            
            <div class="item__purchase">
                <div class="purchase__price">
                    {{item.price}}  &#8381;
                </div>
                <BuyButton
                    :itemId="item.id"
                />
            </div>
        </div>
        <div class="item__description">
            <strong> Характеристики:</strong>
            <div class="description__element"
                    v-for="spec in item.spec"
                    :key="spec"
                >
                  <div class="description__title">{{spec.title}}</div>
                  <div class="description__value">{{spec.value}}</div>  
                </div>
        </div>
    </div>
    <div v-else-if="noItemMatches">Страницы с таким товаром не существует!</div>
    <div v-else>Загрузка</div>

</template>

<script>
import BuyButton from '@/components/BuyButton'
export default {
    data(){
        return{
            item: null,
            noItemMatches: false
        }
    },
    created(){
        this.item = this.items.find(item => item.id == this.$route.params.id)
    },
    mounted(){
        if(!this.item){
            setTimeout(()=>{
                this.item = this.items.find(item => item.id == this.$route.params.id)
                if(!this.item){
                    this.noItemMatches = true
                }
            },500)
        }
        
    },
    methods:{

    },
    computed:{
        items(){
            return this.$store.getters.getItems
        }
    },
    components:{
        BuyButton
    }
}
</script>

<style scoped>
    .page{
        width: 60%;
        min-width: 700px;
        margin: 0 auto
    }
    .item__name{
        font-size: 20px;
        
    }
    .item__header{
        width: 100%;
        height: 350px;
         background-color: white;
        box-shadow: 0px 2px 5px 0px rgb(139, 139, 139);
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        border-radius: 5px;

    }
    .item__image{
        max-width: 300px;
        max-height: 270px;
        margin: auto 0px auto 10px;

    }
    .item__purchase{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        height: 100%;
        margin-right: 30px;
    }
    .purchase__price{
        font-size: 24px;
        margin-bottom: 10px;
    }
    .item__description{
        width: 100%;
        background-color: white;
        border-radius: 5px;
        box-sizing: border-box;
        box-shadow: 0px 2px 5px 0px rgb(139, 139, 139);
        padding: 20px 10px;
        
    }
    .description__element{
        display: flex;
        margin-top: 10px;
    }
    .description__title{
        border-bottom: dotted 1px rgb(170, 170, 170);
        width: 400px;
        
    }
    .description__value{
        margin-left: 10px;
    }
</style>