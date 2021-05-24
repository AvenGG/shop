<template>
    <div class="item">
        <img class="item__image" :src="item.image" alt="">
        <div class="item__text"
             @click="$router.push({name: 'ItemPage', params: {id: item.id}})"
        >
            <div class="item__name">
                {{item.name}}
            </div>
            <div class="item__description">
                <div class="description__element"
                    v-for="description in descriptions"
                    :key="description"
                >
                   {{description}}
                </div>
            </div>
        </div>
        <div class="item__purchase">
            <div class="purchase__price">
                {{item.price}} &#8381;
            </div>
            <BuyButton
                :itemId="item.id"
            />
        </div>
    </div>
</template>

<script>
import BuyButton from '@/components/BuyButton'

export default {
    data(){
        return {

        }
    },
    props:{
        item:{
            type: Object,
            required: true
        }
    },
    computed:{
        descriptions(){
            let d = []
            let i = 0;
            for(let spec in this.item.spec){
                if(i === 5 ) break;
                d.push(this.item.spec[spec].value)
                i++
            }
            return d
        }
    },
    components:{
        BuyButton
    }
}
</script>

<style scoped>
    .item{
        width: 100%;
        height: 150px;
        box-shadow: 0px 0px 5px 0px rgb(116, 116, 116);
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: white;
    }

    .item__image{
        max-width: 150px;
        max-height: 140px;
        margin: auto 0px auto 10px;

    }

    .item__text{
        margin: 20px 0 0 0;
        height: 100px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    .item__name{
        
        font-size: 18px;
    }
    .item__text:hover .item__name{
        color: blueviolet;
    }
    .item__description{
        display: flex;
        flex-direction: row;;
    }
    .description__element{
        margin-right: 10px;
        padding: 0px 5px;
        background-color: rgb(147, 255, 179);
        border-radius: 10px;
        box-shadow: 0 0 3px 0px rgb(165, 165, 165);
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
</style>