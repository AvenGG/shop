<template>
    <nav class="nav">
        <router-link :to="{name: 'Home'}" class="nav__link border-right-none">Главная</router-link>
        <router-link :to="{name: 'basket'}" class="nav__link">Корзина</router-link>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .nav{
        width: 100%;
        height: 40px;
        background-color: white;
        box-shadow: 0px 2px 5px 0px rgb(139, 139, 139);
        display: flex;
    }
    .nav__link{
        color: black;
        text-decoration:none;
        background-color: rgb(245, 245, 245);
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        text-decoration: none;
        height: 100%;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-bottom: none;
        border-top: none;
        background: none;
        font-weight: 300;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .nav__link:visited{
        color: black;
    }
    .nav__link:hover{
        background-color: rgb(201, 201, 201);
    }
    .border-right-none{
        border-right: none;
    }
</style>