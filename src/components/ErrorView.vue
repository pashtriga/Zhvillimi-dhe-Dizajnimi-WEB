<template>
    <section>
    <h2>{{ title }}</h2>
    <router-link :to="{name : navigateToPage }" class="btn btn-primary" id="btnMarginmeti">{{navigateToText}}</router-link>
    <h1>{{status}}</h1>
    </section>
</template>

<script>
export default {
    props:{
        title:{
            required:true,
            type:String
        },
        status:{
            required:true,
            type:String
        },
        navigateToPage:{
            required:true,
            type:String
        },
        navigateToText:{
            required:true,
            type:String
        }
    }
}
</script>

<style scoped>
#btnMarginmeti{
    margin:30px;
}
</style>