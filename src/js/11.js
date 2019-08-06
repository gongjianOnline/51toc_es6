/**模板字符串&&标签模板*/
/**
 * 模板字符串:
 * 格式:``
 * 加入内容:`${变量名称}`
 */
let uls = document.getElementById("uls")
{
   let username = 'hello word'
   let userpwa = 'admin'
   let module = `
    <li>${username}</li> <li>${userpwa}</li>
   `;
   uls.innerHTML = module
   
}

/**标签模板
 * alert() ===> alert``
 *注意点:
 * 1=>加入变量,会把字符串放入到一个数组中
 */