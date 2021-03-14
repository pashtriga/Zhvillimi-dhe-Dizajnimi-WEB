<template>
<ErrorView :title="'Ooops page you are trying to access doesn\'t exist'" 
            :status="404" 
            :navigateToPage="'HomePage'" 
            :navigateToText="'Navigate back Home'"/>
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