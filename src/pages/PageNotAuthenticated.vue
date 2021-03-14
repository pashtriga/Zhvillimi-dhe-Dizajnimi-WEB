<template>
<ErrorView :title="'Ooops you are not authenticated to visit to this page,please login'" 
            :status="'401'" 
            :navigateToPage="'Login'" 
            :navigateToText="'Navigate to Login Page'"/>
</template>

<script>
import ErrorView from '../components/ErrorView'
export default {
    components:{
        ErrorView
    }   
}
</script>

<style scoped>
#btnMarginmeti{
    margin:30px;
}
</style>