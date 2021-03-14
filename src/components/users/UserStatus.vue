<template>
    <ul class="navbar-nav">

        <template v-if="user">
        <li class="nav-item">
                <a  class="nav-link text-dark" >Hello {{user.username}}</a>
            </li>
            <li class="nav-item">
                <form  class="form-inline" >
                    <button @click.prevent="logout"  type="submit" class="nav-link btn btn-link text-dark">Logout</button>
                </form>
            </li>
        </template>
        <template v-else>
            <li class="nav-item">
                <router-link :to="{name : 'Register' }" class="nav-link text-dark" >Register</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name : 'Login' }" class="nav-link text-dark" >Login</router-link>
            </li>
        </template>              

</ul>

</template>


<script>
import {mapGetters} from 'vuex'

export default {
     data(){
        return{
            shfaq: false
        }
    },
    computed:{
        ...mapGetters({
            'user':'auth/authUser'
        })
    },
    methods:{
        logout(){
            this.$store.dispatch('auth/logout')
        }
    }  
}
</script>