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

/**fetch使用场景*/
import formFetch from "../common/fromFetch"
fetchbtn.onclick = async function(){
    let data = await formFetch("/login",{name:'zhangsan',pwd:'123456'})
    console.log(data)
}