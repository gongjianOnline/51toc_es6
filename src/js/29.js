/**补充内容
 * fetch: 类似于$.axajs axios
 *  注意点:
 *      1=》兼容底浏览器需要安装promise-polyfill
 *  格式：（示例中对其封装操作）
 *  fetch('路径',{
 *      method:'POST',
 *      headers:{
 *          'Content-Type':'application/json'    
 *      },
 *      params:{
 *          user:user.value,
 *          pwd:pwd.valulle
 *      }
 *  }).then(res=>{
 *      return res.json() //直接转换为JSON格式
 *  })
 * 
 * 
 * async await :解决异步的方式 类似于Generator中的yirld
 *  async:异步函数也就意味着该函数的执行不会阻塞后面代码的执行
 *  await:等待async执行完,才会执行后面的东西,等待的东西是异步的,他就会阻塞当前代码,他只能在async函数里使用,虽然阻塞,但是是异步的;
 *      
 * mock:模拟接口
 */
// fetchbtn.onclick(()=>{
//     console.log("hello wrode")
// })

/**fetch */
/**基本场景 */
// console.log(fetchbtn)
// fetchbtn.onclick = function(){
//     console.log("hello word")
//     console.log(fetch)
// }

// /**fetch使用场景*/
// import formFetch from "../common/fromFetch"
// fetchbtn.onclick = async function(){
//     let data = await formFetch("/login",{name:'zhangsan',pwd:'123456'})
//     console.log(data)
// }

/**async\await*/
// {
// //async当设置timeout函数为异步函数时,函数内部出错不会影响后边代码
// async function timeout(){
//     console.loh('hello word')
// }
// timeout()
// console.log("异步执行测试")
// }
{
//async异步函数返回的是promise属性
    async function timeout(){
        return 'hello word'
    }
    console.log(timeout())
    timeout().then(res=>{console.log(res)}) //hello wrod
    console.log("异步执行测试")  
}

{
    async function getData_1(){
        return '100'
    };
    function getData_2(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('200')
            }, 2000)
        })
    };
    async function run(){
        const data_1 = await getData_1();
        console.log(data_1);

        const data_2 = await getData_2();
        console.log(data_2);
    };
    run()
    /**getData_1前面即使不声明async,使用await也是可以得,因为await啥都能等
     * 1=>如果等到的是promise,他就把promise的resolve的参数返回
     * 2=>如果等到的是普通东西,就直接返回这个东西
     * 就像上面的data_1,就算getData_1没有async他的结果也一样
     * 
     * 在人函数中,data_1后的代码需要getdata_1执行完毕才会执行
     * data_1得出以后,data_2其实会2秒之后才会得出,但是此时,他会等2秒
     * 直到data_2得出以后,才会执行后面的console
    */
}
