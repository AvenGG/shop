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
    basketItems:[]
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
  },
  actions: {
    async loadItems({commit}, payload){
      try{
        const items = await loadItems()
        commit('SET_ITEMS', items)
      }catch(error){
        console.error(error)
      }
    }
  },
  modules: {
  }
})
