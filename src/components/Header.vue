<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container">
                <router-link :to="{name : 'HomePage' }" class="navbar-brand">Cineplexx</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    <!-- <partial name="_LoginPartial" /> -->
                       <userComp></userComp>
                    <ul class="navbar-nav flex-grow-1">
                        <li class="nav-item">
                             <router-link :to="{name : 'HomePage' }" class="navbar-brand">Movies</router-link>
                        </li>
                        <li class="nav-item">
                             <router-link :to="{name : 'AuthorList' }" class="navbar-brand">Authors</router-link>
                        </li>
                        <li class="nav-item">
                             <router-link :to="{name : 'Categories' }" class="navbar-brand">Categories</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
import UserStatus from './users/UserStatus.vue';


export default {
    components:{
        userComp:UserStatus
    }
    
}
</script>