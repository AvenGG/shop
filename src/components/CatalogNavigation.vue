<template>
    <div class="catalog-navigation">
        <div class="catalog-navigation__element">
            Категория: 
            <select class="element__select" v-model="selectedCategory">
                <option 
                    value="all">Все категории
                </option>
                <option v-for="category in Object.keys(categories)"
                    :key="category"
                    :value="category">{{categories[category].name}}
                </option>
            </select>
        </div>
       
       <div v-if="subcategories" class="catalog-navigation__element">
           Подкатегория:
           <select class="element__select" v-model="selectedSubcategory">
                <option 
                    value="all">Все подкатегории
                </option>
                <option v-for="subcategory in Object.keys(subcategories)"
                    :key="subcategory"
                    :value="subcategory">{{subcategories[subcategory]}}
                </option>
            </select>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selectedCategory:'all',
            selectedSubcategory:'all'
        }
    },
    props:{

    },
    computed:{
        categories(){
            return this.$store.getters.getCategories
        },
        subcategories(){
            if(Object.keys(this.categories).length ==0) return
            if(this.selectedCategory =='all') return

            let sc = {}
            for(let subcategory of Object.keys(this.categories[this.selectedCategory].subcategories)){
               sc[subcategory] = this.categories[this.selectedCategory].subcategories[subcategory]
            }
            return sc
        }
    },
    watch:{
        selectedCategory(value){
            this.selectedSubcategory = 'all'
            this.$emit('category-changed', value)
        },
        selectedSubcategory(value){
            this.$emit('subcategory-changed', value)
        }
    }
}
</script>

<style scoped>
    .catalog-navigation{
        width:100%;
        height: 35px;
        background-color: white;
        box-shadow: 0px 0px 5px 0px rgb(116, 116, 116);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 10px;
        display:flex;
        align-items: center;
    }
    .catalog-navigation__element{
        margin-right: 10px;
    }

    .element__select{

    }
</style>