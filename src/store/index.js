import { createStore } from 'vuex'
import Items from '@/items.js'

const loadItems = () =>{
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(Items)
    },100)
  }
  
  )
}

export default createStore({
  state: {
    items: [],
    basketItems:[],
    categories:{}
  },
  getters:{
    getItems(state){
      return state.items
    },
    getItemsById: state => idArray =>{
      return state.items.filter((item)=> idArray.includes(item.id) )
    },
    getBasketItemsId(state){
      return state.basketItems
    },
    getCategories(state){
      return state.categories
    }
  },
  mutations: {
    SET_ITEMS(state,payload){
      state.items = payload
    },
    ADD_BASKET_ITEM(state,payload){
      state.basketItems.push(payload)
    },
    DELETE_BASKET_ITEM(state,payload){
      state.basketItems = state.basketItems.filter((item)=>item !=payload)
    },
    SET_CATEGORIES(state){
        let categories = {}
        state.items.forEach(item => {
          if(item.category.value in categories){
            if(!(item.category.subcategory.value in categories[item.category.value].subcategories)){
              categories[item.category.value].subcategories[item.category.subcategory.value] = item.category.subcategory.name
            }
          }else{
            categories[item.category.value] = {
              name: item.category.name,
              subcategories: {
                [item.category.subcategory.value]: item.category.subcategory.name
              }
            }
          }
        })
        state.categories = categories
    }
  },
  actions: {
    async init({commit}, payload){
      try{
        const items = await loadItems()
        commit('SET_ITEMS', items)
        commit('SET_CATEGORIES')
      }catch(error){
        console.error(error)
      }
    }
  },
  modules: {
  }
})
