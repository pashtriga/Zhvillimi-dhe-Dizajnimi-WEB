import axios from 'axios'
import {rejectError} from '@/helpers'

export default {
    namespaced:true,
    
    actions:{
       
        AddAuthor(context,userData){
            return axios.post('/api/v1/authors/create',userData)
                .catch(err => rejectError(err))
        }

    }
}