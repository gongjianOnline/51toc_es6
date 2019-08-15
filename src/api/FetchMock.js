import FetchMock from 'fetch-mock'
/**基本语法 */
// FetchMock.mock('/login',{code:200})

/**可接受函数 */
FetchMock.mock('/login',(url,params)=>{
    return {code:200,mag:'登陆成功'}
})