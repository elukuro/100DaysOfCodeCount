import axios from 'axios'
import NPprogress from 'nprogress'

const http={
    request(url,params='',methods='GET'){
        NPprogress.start();
        return axios({
            method:methods,
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            url:url,
            data:{
                params
            }
        })
        .then((response)=>{
            NPprogress.done();
            return response.data;
        })
        .catch((error)=>{
            console.log(error)
            NPprogress.done();
        })

        
        
    }
}


export default http;