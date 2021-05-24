<template>
  <div class="page">
    <div class="item__list">
      <MyItem
        v-for="item of items"
        :key="item.id"
        :item="item"
      />
    </div>
    
  </div>
</template>

<script>
import MyItem from '@/components/MyItem'
export default {
  name: 'Home',
  data(){
    return {
    }
  },
  created(){
  },
  computed:{
    items(){
        return this.$store.getters.getItems
    }
  },
  components: {
    MyItem
  }
}
</script>
<style scoped>
  .page{
  }
  .item__list{
    margin: 10px;
  }
</style>
