
const formFetch = (url,params)=>{
    return fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type':"application/json"
                },
                params:{
                    user:params.name,
                    pwd:params.pwd
                }
            }).then((res)=>{
                return res.json()
            })
}
export default formFetch