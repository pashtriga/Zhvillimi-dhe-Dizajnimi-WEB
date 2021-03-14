import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import HomePage from '@/components/movies/movieList'
import ListCategories from '../pages/categoriesList.vue'
import Login from '../components/users/Login.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import Register from '../components/users/Register.vue'
import SecretPage from '../pages/SecretPage.vue'
import PageNotAuthented from '../pages/PageNotAuthenticated.vue'
import AuthorList from '../components/authors/authorList.vue'
import AuthorByID from '../components/authors/AuthorByID'
import CreateAuthor from '../components/authors/CreateAuthor.vue'
import MovieByID from '../components/movies/movieByID.vue'
import CreateCategory from '../components/categories/createCategory.vue'
import CategoryByID from '../components/categories/editCategory.vue'

Vue.use(Router)

const router = new Router({
    routes:[
        {
            path:'/',
            name:'HomePage',
            component:HomePage
        },{
            path:'/authors',
            name:'AuthorList',
            component:AuthorList
        },{
            path:'/authors/create',
            name:'CreateAuthor',
            component: CreateAuthor
        },{
            path:'/authors/:id',
            name:'AuthorByID',
            component: AuthorByID
        },
        {
            path:'/categories',
            name:'Categories',
            component:ListCategories
        },
        {
            path:'/categories/create',
            name:'CreateCategories',
            component:CreateCategory
        },
        {
            path:'/categories/:id',
            name:'CategoryByID',
            component:CategoryByID
        },
        {
            path:'/categories/secret',
            name:'SecretPage',
            component:SecretPage,
            meta:{
                onlyAuthUser:true
            }
            
        },
        {
            path:'/login',
            name:'Login',
            component:Login,
            meta:{onlyGuestUSer: true}
        },
        {
            path:'/register',
            name:'Register',
            component:Register,
            meta:{onlyGuestUSer: true}
        },
        {
            path:'/movie/:id',
            name:'MovieByID',
            component:MovieByID
        },
        {
            path:'/401',
            name:'PageNotAuthenticated',
            component:PageNotAuthented
        },
        {
            path:'*',
            name:'PageNotFound',
            component:PageNotFound
        }
    ],
    mode:'history'
})

router.beforeEach((to,from,next)=>{
    store.dispatch('auth/getAuthUser')
        .then( () => {
            const isAuthenticated = store.getters['auth/isAuthenticated']
           if(to.meta.onlyAuthUser){
               
               if(isAuthenticated){
                   next()
               }else{
                   next({name: 'PageNotAuthenticated'})
               }
           }else if(to.meta.onlyGuestUSer){
                if(isAuthenticated){
                    next({name: 'HomePage'})
                }else{
                    next()
                }
           }
           else{
               next()
           }
        })
})

 export default router