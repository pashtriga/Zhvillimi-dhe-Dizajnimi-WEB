<template >
    <section>

    <h4>Details of Movie</h4>
    <hr />
    
    <p>Title: {{movie.title}}</p>
    <p>Category: {{movie.category[0].name}}</p>
    <p>Author: {{movie.author.name}}</p>
    <p>Relase: {{movie.relase | formatDate('D MMM YYYY')}}</p>
   <img class="imagefo" v-bind:src="movie.image">

<div>
    <router-link :to="{name:'HomePage'}">Back to List</router-link>
</div>

    </section>
</template>

<script>
import axios from 'axios'
export default {
     data(){
        return {
            movie:{}
        }
    },
    created(){
        const authorID = this.$route.params.id
        axios.get(`/api/v1/movies/${authorID}`)
        .then(res => {
            this.movie = res.data
        })
    }
}
</script>

<style scoped>

.imagefo{
    width:30%;
    margin-bottom: 20px;
}

</style>