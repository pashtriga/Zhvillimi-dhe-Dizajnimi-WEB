<template>
    <div>
        <h1>Home page meti</h1>
        <ul>
            <li v-for="item in categories" v-bind:key="item.id"> {{ item.name }} </li> 
          
        </ul>
         <div class="form-group">
                  <button type="button" class="btn btn-primary">Primary</button>
                </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            categories:[]
        }
    },
    created(){
        axios.get('/api/v1/categories')
        .then(res => {
            debugger
            this.categories = res.data
        })
    }
    
}
</script>