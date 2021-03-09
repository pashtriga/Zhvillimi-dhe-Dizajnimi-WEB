<template >
    <section>
        <div>
    <h4>Details of Author</h4>
    <hr />
    <dl class="row">
        <dt class="col-sm-2">
           Name:
        </dt>
        <dd class="col-sm-10">
           {{ author.name }}
        </dd>
       <dt class="col-sm-2">
           LastName:
        </dt>
        <dd class="col-sm-10">
           {{ author.lastname }}
        </dd>
        <dt class="col-sm-2">
           Discription:
        </dt>
        <dd class="col-sm-10">
           {{ author.discription }}
        </dd>
    </dl>
</div>

<div>
    <router-link :to="{name:'AuthorList'}">Back to List</router-link>
</div>

    </section>
</template>

<script>
import axios from 'axios'
export default {
     data(){
        return {
            author:{}
        }
    },
    created(){
        const authorID = this.$route.params.id
        axios.get(`/api/v1/authors/${authorID}`)
        .then(res => {
            this.author = res.data
        })
    }
}
</script>