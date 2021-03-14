<template>
<section>
  
    <div class="container maxwidth">
        <form  method="post">
            <h4>Create a new account.</h4>
            <hr />
             <div class="form-group">
                    <label class="floatLeftItem">Email:</label>
                    <input v-model="form.email"
                    @blur="$v.form.email.$touch()"
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
                    <label class="floatLeftItem">Username:</label>
                    <input v-model="form.username"
                    @blur="$v.form.username.$touch()"
                     class="form-control"
                     type="text"
                     autofocus="" 
                     placeholder="Your Username"/>
                     <div  v-if="$v.form.username.$error"
                       class="text-danger">
                        <span v-if="!$v.form.username.required"  class="text-danger">Username is required</span>
                     </div>
                    
                </div>
             <div class="form-group">
                    <label class="floatLeftItem">Password:</label>
                    <input v-model="form.password"
                    @blur="$v.form.password.$touch()"
                     class="form-control"
                     type="password"
                     autofocus="" 
                     placeholder="Your Password"/>
                     <div  v-if="$v.form.password.$error"
                       class="text-danger">
                        <span v-if="!$v.form.password.required"  class="text-danger">Password is required</span>
                        <span v-if="!$v.form.password.minLength"  class="text-danger"> Password minimum character is 4</span>
                     </div>
                    
                </div>
            <div class="form-group">
                    <label class="floatLeftItem">Confirmation Password:</label>
                    <input v-model="form.passwordConfirmation"
                    @blur="$v.form.passwordConfirmation.$touch()"
                     class="form-control"
                     type="password"
                     autofocus="" 
                     placeholder="Your Password Confirmation"/>
                     <div  v-if="$v.form.passwordConfirmation.$error"
                       class="text-danger">
                        <span v-if="!$v.form.passwordConfirmation.required"  class="text-danger">PasswordConfirmation is required !  </span>
                         <span v-if="!$v.form.passwordConfirmation.sameAsPassword"  class="text-danger"> PasswordConfirmation is not the same as Password</span>
                     </div>
                    
                </div>
            <button @click.prevent="register" type="submit" class="btn btn-primary margmeti33">Register</button>
        </form>
    </div>

   </section> 
</template>


<script>
import { required,email,minLength,sameAs } from  'vuelidate/lib/validators'
export default {
    data(){
        return{
            form:{
                email: null,
                username:null,
                password: null,
                passwordConfirmation: null
            }
        }
    },
    validations:{
        form:{
            email:{
                required,
                email
            },
            username:{
                required
            },
            password:{
                required,
                minLength: minLength(4)
            },
            passwordConfirmation:{
                required,
                sameAsPassword: sameAs('password')
            }
        }
    },
    methods:{
        register()
        {
            this.$v.form.$touch()
            this.$store.dispatch('auth/RegisterUser',this.form)
            .then(()=> this.$router.push('/login'))
             .catch(errorMessage => {
             this.$toasted.show(errorMessage, { position: "top-center", duration : 5000});
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