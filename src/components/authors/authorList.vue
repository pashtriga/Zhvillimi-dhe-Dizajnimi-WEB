<template>
    <section>
            <div class="container" >
                <h3>List of Authors</h3>
              <br>
        <router-link :to="{name : 'CreateAuthor' }" >Create new Author</router-link>
        <br>
        <br>
                <div class="table-responsive">
                        <table class="table table-bordered">
                        <thead>
                            <tr>                          
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Description</th> 
                            <th></th>                          
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="autor in authors" :key="autor.id">                           
                            <td>{{ autor.name }}</td>
                            <td>{{ autor.lastname }}</td>
                            <td>{{ autor.discription }}</td>
                            <td>
                                <router-link :to="{name:'AuthorByID',params:{id : autor._id}}">Details</router-link>
                               <button @click.prevent="deleteAuthor(autor._id)" type="button" class="btn btn-dark meti3232">Delete</button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
            </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
     data(){
        return {
            authors:[]
        }
    },
    methods:{
        deleteAuthor(katID){
             axios.delete(`/api/v1/authors/${katID}`)
               .then(() => {
              //refresh on same page
              this.$router.go({
               
              })
            })
            .catch(() => {
              this.$toasted.show("Something went wrong", { position: "top-center", duration : 5000});
            })
        }     
    },
    created(){
        axios.get('/api/v1/authors')
        .then(res => {
            this.authors = res.data
        })
    }
}
</script>

<style scoped>
.meti3232{
    margin-left: 20px;
}
</style>