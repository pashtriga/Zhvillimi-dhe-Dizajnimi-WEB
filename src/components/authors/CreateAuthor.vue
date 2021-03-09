<template>
    <section>
        <h2>Create new Author</h2>
        <br>
        <br>
         <div class="container maxwidth">

              <form >
                <div class="form-group">
                  <label for="usr" class="floatLeftItem">Name:</label>
                  <input v-model="form.name" type="text" class="form-control" 
                        required minlength="3" placeholder="Author name" 
                         @blur="$v.form.name.$touch()">
                        <div  v-if="$v.form.name.$error"
                       class="text-danger">
                        <span v-if="!$v.form.name.required"  class="text-danger">Name is required !  </span>
                         <span v-if="!$v.form.name.minLength"  class="text-danger"> Name minimum character is 2</span>
                     </div>
                 </div>
                <div class="form-group">
                  <label for="usr" class="floatLeftItem">LastName:</label>
                  <input v-model="form.lastname" type="text" class="form-control" 
                        required minlength="3" placeholder="Author lastname" 
                         @blur="$v.form.lastname.$touch()">
                        <div  v-if="$v.form.lastname.$error"
                       class="text-danger">
                       <span v-if="!$v.form.lastname.required"  class="text-danger">LastName is required !  </span>
                         <span v-if="!$v.form.lastname.minLength"  class="text-danger"> LastName minimum character is 2</span>
                     </div>
                </div>
                <div class="form-group">
                  <label for="usr" class="floatLeftItem">Discription:</label>
                  <input v-model="form.discription" type="text" class="form-control" 
                        required minlength="3" placeholder="Author discription" 
                         @blur="$v.form.discription.$touch()">
                        <div  v-if="$v.form.discription.$error"
                       class="text-danger">
                        <span v-if="!$v.form.discription.required"  class="text-danger">Discription is required !  </span>
                         <span v-if="!$v.form.discription.minLength"  class="text-danger"> Discription minimum character is 2</span>
                     </div>
                </div>
                <button @click.prevent="CreateAutor" type="submit" class="btn btn-primary margmeti33">Save</button>
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
            form:{
                name:null,
                lastname:null,
                discription:null
            }
        }
    },
     validations:{
        form:{
            name:{
                required,
                minLength: minLength(2)
            },
            lastname:{
                required,
                minLength: minLength(2)
            },
            discription:{
                required,
                minLength: minLength(2)
            }
        }
    },
    methods:{
        CreateAutor(){
            this.$v.form.$touch()
             axios.post(`/api/v1/authors/create`,this.form)
             .then(()=> this.$router.push('/authors'))        
            .catch(() => {
              this.$toasted.show("Something went wrong", { position: "top-center", duration : 5000});
            })
        }
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