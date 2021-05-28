<template>
    <div class="filters">
       Фильтры:
        <div class="filter"
            v-for="filter of Object.keys(filters)"
            :key="filter"
        >
           {{filters[filter].title}}
           <div
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
</template>

<script>
export default {
    data(){
        return{
            selectedFilters: {}
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
        }
    },
    computed:{
        filters(){
            return this.setFilters()
        },
    },
    watch:{
        items(){
            this.initSelectedFilters()
            this.$emit('filter-items', {})
        }
    }
}
</script>

<style scoped>
    .filters{
        width:200px;
        background-color: white;
        box-shadow: 0px 0px 5px 0px rgb(116, 116, 116);
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
    }
</style>