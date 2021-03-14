<template>
<section>
        <div id="metiFlex">
            <div v-for="movie in movies" :key="movie._id" class="moviFlex">
                <img class="imagefoto" v-bind:src="movie.image">
                <p class="marginTeks">Title: {{ movie.title }}</p>
                <p>Category: {{ movie.category[0].name }}</p>
                <p>Author: {{ movie.author.name }}</p>
                 <router-link :to="{name:'MovieByID',params:{id : movie._id}}">Details</router-link>
            </div>
        </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
     data(){
        return {
            movies:[]
        }
    },
    created(){
        axios.get('/api/v1/movies')
        .then(res => {
            this.movies = res.data
        })
    }
}
</script>

<style scoped>
#metiFlex{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width:90%;
    justify-content: space-between;
    justify-items: left;
    margin:5%;
}
.marginTeks{
    margin-top: 10px;
}
.moviFlex{
    width: 200px;
    margin-bottom: 30px;
}
.imagefoto{
    width:100%;
}

@media screen and (max-width: 480px) {
  #metiFlex{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width:90%;
    justify-content: center;
    margin:5%;
}

.moviFlex{
    width: 100%;

}
.imagefoto{
    width:100%;
}
}

</style>