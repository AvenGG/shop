<template>
  <div class="page">
    <div class="catalog-navigation__container">
      <CatalogNavigation
        @category-changed="changeCategory"
        @subcategory-changed="changeSubcategory"
      />
    </div>
    <div class="container">
      <div class="filters__container">
        <ItemFilters class="item-filters"
        />
      </div>
      <div class="item-list">
        <MyItem class="item"
          v-for="item of itemsByCategory"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyItem from '@/components/MyItem'
import ItemFilters from '@/components/ItemFilters'
import CatalogNavigation from '@/components/CatalogNavigation'
export default {
  name: 'Home',
  data(){
    return {
      category: 'all',
      subcategory: 'all'
    }
  },
  created(){
  },
  mounted(){
  },
  methods:{
    changeCategory(category){
      this.category = category
    },
    changeSubcategory(subcategory){
      this.subcategory = subcategory
    }
  },
  computed:{
    items(){
        return this.$store.getters.getItems
    },
    itemsByCategory(){
      if (this.category == 'all') return this.items
      let result = []
      result = this.items.filter((item)=>item.category.value == this.category)
      if (this.subcategory !='all'){
        result = result.filter((item)=>item.category.subcategory.value == this.subcategory)
      }
      return result
    }
  },
  components: {
    MyItem,
    ItemFilters,
    CatalogNavigation
  }
}
</script>
<style scoped>
  .page{
    width: 70%;
    margin: 0 auto;
    min-width: 850px;
  }
  .container{
    display: flex;
    width: 100%;
  }
  .catalog-navigation__container{
    margin-top: 10px;
    width: 100%;
  }
  .filters__container{
    margin-top: 10px;
  }
  .item-list{
    margin: 10px 0px 10px 10px;
    width:100%
  }
  .item{
    margin-bottom: 10px;
  }
</style>
