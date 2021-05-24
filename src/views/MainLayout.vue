<template>
    <div class="page">
        <MainHeader/>
        <router-view></router-view>
    </div>
</template>

<script>
import MainHeader from "@/components/MainHeader"
export default {
    created(){
        this.$store.dispatch('loadItems')
    },
    components:{
        MainHeader
    }
}
</script>

<style scoped>

</style>