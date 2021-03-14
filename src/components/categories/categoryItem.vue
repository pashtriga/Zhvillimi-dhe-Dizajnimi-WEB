<template>

<div class="card bg-light">
      <div class="card-body text-center">
        <span class="card-text meti22" >{{ category.name }}</span>
        <router-link :to="{name : 'CategoryByID' ,params:{id : category._id} }" class="btn btn-dark meti22">Edit</router-link>
        <span @click.prevent="deleteKategori(category._id)" class="btn btn-danger">Delete</span>
      </div>
    </div>
       
</template>


<script>
import axios from 'axios'
export default {
    props:{
        category:{
            required: true,
            type:Object
        }
    },
    methods:{
        deleteKategori(katID){
             axios.delete(`/api/v1/categories/${katID}`)
               .then(() => {
              //refresh on same page
              this.$router.go({
               
              })
            })
            .catch(() => {
              this.$toasted.show("Something went wrong", { position: "top-center", duration : 5000});
            })
        }     
    }
}
</script>

<style scoped>
.meti22{
    margin-right:30px;
}
</style>