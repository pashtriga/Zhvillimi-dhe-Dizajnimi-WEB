/* eslint-disable vue/valid-template-root */
<template>
    <section>
        <h2>List of Categories</h2>
        <br>
        <router-link :to="{name : 'CreateCategories' }" >Create new Category</router-link>
        <br>
        <br>
        <div class="container maxwidth">
             <CategoryItem v-for="cat in categories" :key="cat.name" :category="cat"/>
        </div>
        <br>
        <br>
    </section>      
</template>

<script>
import axios from 'axios'
import CategoryItem from '../components/categories/categoryItem'
export default {
    components:{
        CategoryItem
    },
    data(){
        return {
            categories:[]
        }
    },
    created(){
        axios.get('/api/v1/categories')
        .then(res => {
           // debugger
            this.categories = res.data
        })
    }
    
}
</script>


<style scoped>

.maxwidth{
    width: 400px;
}

</style>