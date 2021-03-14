<template>
    <section>
        <h2>Edito Category  </h2>
        <br>
        <br>
        <div class="container maxwidth">

            <form >
                <div class="form-group">
                  <label for="usr" class="floatLeftItem">Name:</label>
                  <input v-model="category.name" type="text" class="form-control" 
                        required minlength="2" placeholder="Category name" 
                         @blur="$v.category.name.$touch()">
                        <div  v-if="$v.category.name.$error"
                       class="text-danger">
                        <span v-if="!$v.category.name.required"  class="text-danger">Name is required !  </span>
                         <span v-if="!$v.category.name.minLength"  class="text-danger"> Name minimum character is 2</span>
                     </div>
                 </div>
                    <button @click.prevent="EditKategori" type="submit" class="btn btn-primary margmeti33">Save</button>
             </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import { required,minLength } from  'vuelidate/lib/validators'
export default {
    data(){
        return{
            category:{ }
        }
    },validations:{
        category:{
            name:{
                required,
                minLength: minLength(2)
            }
        }
    },
    methods:{
        EditKategori(){
            const catID = this.$route.params.id
             this.$v.category.$touch()
                axios.put(`/api/v1/categories/${catID}`,this.category)
                .then(()=> this.$router.push('/categories'))
            .catch( () => {
              this.$toasted.show("Something went wrong", { position: "top-center", duration : 5000});
            })
            
        }
    },
    created(){
        const catID = this.$route.params.id
        axios.get(`/api/v1/categories/${catID}`)
        .then(res => {
            this.category = res.data
        })
    }
}
</script>


<style scoped>
.margmeti33{
    margin-bottom: 40px;
}

.floatLeftItem{
    float: left;
}
.maxwidth{
    width: 400px;
}

</style>