<template>
    <section>
    <div class="container maxwidth">
        <section>
            <form  method="post">
                <h5>Welcome to Login</h5>
                <div class="form-group">
                    <input v-model="form.email"
                     class="form-control"
                     type="email"
                     autofocus="" 
                     placeholder="Your Email"/>
                     <div  v-if="$v.form.email.$error"
                       class="text-danger">
                        <span v-if="!$v.form.email.email"  class="text-danger">Email is not valid</span>
                        <span v-if="!$v.form.email.required"  class="text-danger">Email is required</span>
                     </div>
                    
                </div>
                    
                <div class="form-group">
                    <input v-model="form.password"
                     class="form-control"
                     type="password"
                     autofocus="" 
                     placeholder="Your Password"/>
                     <div  v-if="$v.form.password.$error"
                       class="text-danger">
                        <span v-if="!$v.form.password.required"  class="text-danger">Password is required</span>
                     </div>
                    
                </div>
                
                <div class="form-group">
                    <button @click.prevent="login" type="submit" class="btn btn-primary">Log in</button>
                </div>
                <div class="form-group">
                    <p>
                        <router-link :to="{name : 'Register' }" >Register as a new user</router-link>
                    </p>
                </div>
            </form>
        </section>
    </div>
    </section>
</template>


<script>
import { required,email } from  'vuelidate/lib/validators'
export default {
    data(){
        return{
            form:{
                email: null,
                password: null
            }
        }
    },
    validations:{
        form:{
            email:{
                required,
                email
            },
            password:{
                required
            }
        }
    },
    methods:{
        login()
        {
            this.$v.form.$touch()
            this.$store.dispatch('auth/LoginWithEmailAndPassword',this.form)
                .then(()=>this.$router.push('/'))
                .catch(errorMessage => {
             this.$toasted.show(errorMessage, { position: "top-center", duration : 5000});
            })
        }
    }
}
</script>

<style scoped>

.maxwidth{
    width: 400px;
}

</style>