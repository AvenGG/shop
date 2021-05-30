<template>
    <div class="filters">
      <div class="filters__title">Фильтры</div>
        <div class="filter"
            v-for="filter of Object.keys(filters)"
            :key="filter"
        >
            <button class="filter_element-button"
                @click="showFilters[filter]  = !showFilters[filter]"
            >
                <div class="drop-down-arrow" :class="{open: showFilters[filter]}">
                    <span class="drop-down-arrow-left"></span>
                    <span class="drop-down-arrow-right"></span>
                </div>
                <div class="filter__title"
                    :class="{filter__title_bold:showFilters[filter]}"
                >
                    {{filters[filter].title}}
                </div>
           </button>
           <div v-if="showFilters[filter]">
                <div class="filter__variants"
                    v-for="fv of filters[filter].values"
                    :key="fv"
                >
                    <input type="checkbox"
                        :value="fv"
                        v-model="selectedFilters[filter]"
                        @change="emitFilters()"
                    >{{fv}}
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selectedFilters: {},
            showFilters:{}
        }
    },
    props:{
        items:{
            type:Array,
            required:true
        }
    },
    mounted(){
        this.initSelectedFilters()
    },
    methods:{
        setFilters(){
            let filters = {}
            this.items.forEach(item => {
                for(let spec of Object.keys(item.spec)){
                    if(!(spec in filters)){
                        filters[spec] = {
                            title: item.spec[spec].title,
                            values: [item.spec[spec].value]
                        }
                    }else{
                        if( !(filters[spec].values.find((s)=> s == item.spec[spec].value)) )
                            filters[spec].values.push(item.spec[spec].value) 
                    }
                }
            })
            return filters
        },
        emitFilters(){
            let fi = {}
            for(let f in this.selectedFilters){
                if (this.selectedFilters[f].length){
                    fi[f] = this.selectedFilters[f]
                }
            }
            this.$emit('filter-items', fi)
        },
        initSelectedFilters(){
            let sf = {}
            for(let f in this.filters){
                sf[f] = []
            }
            this.selectedFilters = sf
        },
        initShowFilters(){
            let sf = {}
            let categories = Object.keys(this.filters)

            categories.forEach(f =>{
                sf[f] = false;
            })
            this.showFilters = sf
        }
    },
    computed:{
        filters(){
            return this.setFilters()
        }
    },
    watch:{
        items(){
            this.initSelectedFilters()
            this.initShowFilters()
            this.$emit('filter-items', {})
        }
    }
}
</script>

<style scoped>
    .filters{
        width:220px;
        background-color: white;
        box-shadow: 0px 0px 5px 0px rgb(116, 116, 116);
        border-radius: 10px;
        box-sizing: border-box;
        padding-bottom: 20px;
    }
    .filters__title{
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
    }
    .filter{
        border: 1px solid rgb(223, 223, 223);
        border-left: none;
        border-right: none;
        border-bottom: none;
    }
    .filter_element-button{
        display: flex;
        min-height: 40px;
        align-items: center;
        width: 100%;
        border:none;
        padding: 0 5px;
        background-color: white;
        text-align: left;
    }
    .filter_element-button:hover{
        background-color: rgb(255, 230, 89);
        
    }
    .filter__title{
        font-size: 15px;
        margin: 5px 5px;
        
    }
    .filter__title_bold{
        font-weight: bold;
    }
    .filter__variants{
        font-size: 15px;
        margin: 3px 10px;
    }
    

    .drop-down-arrow {
        position: relative;
        cursor: pointer;
        margin:0 15px 0 5px;
        width: 2px;
        height: 2px;
    }
    .drop-down-arrow-left {
        position: absolute;
        background-color: transparent;
        top: 1px;
        left: 0;
        width: 8px;
        height: 2px;
        display: block;
        transform: rotate(35deg);
        float: right;
    }
    .drop-down-arrow-left:after {
        content: "";
        background-color: #db2ec4;
        width: 8px;
        height: 2px;
        display: block;
        float: right;
        border-radius: 6px 10px 10px 6px;
        transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
        z-index: -1;
    }
    
    .drop-down-arrow-right {
        position: absolute;
        background-color: transparent;
        top: 1px;
        left: 6px;
        width: 8px;
        height: 2px;
        display: block;
        transform: rotate(-35deg);
        float: right;
    }
    .drop-down-arrow-right:after {
        content: "";
        background-color: #db2ec4;
        width: 8px;
        height: 2px;
        display: block;
        float: right;
        transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
        z-index: -1;
    }
    .open .drop-down-arrow-left:after {
        transform-origin: center center;
        transform: rotate(-70deg);
    }
    .open .drop-down-arrow-right:after {
        transform-origin: center center;
        transform: rotate(70deg);
    }
</style>