/**字符串方法 */
/**新增方法
 * includes() //返回布尔值,表示是否找到了参数字符串
 * startsWith() //返回布尔值,表示参数字符串是否在原字符串的头部
 * endsWith() //返回布尔值,表示参数字符串是否在原字符串的尾部
 * repeat() //返回一个新字符串,表示将原字符串重复N次
 * padStart() //头部补全
 * padEnd() // 尾部补全
 */
{
    /**接收两个参数,第一个参数是查找的内容,[第二个参数为从下标几开始向后查找] */
    let str = "hello wrod"
    console.log(str.includes("l",1))
}
{
    /**接收两个参数,第一个参数是查找的内容,[第二个参数为从下标几开始向后查找] */
    let str = "hello word"
    console.log(str.startsWith("word",6))
}
{
     /**接收两个参数,第一个参数是查找的内容,[第二个参数为从下标几开始向后查找] */
     let str = "hello word"
     console.log(str.endsWith("word",10))
}

{
    let str = "ab"
    console.log(str.repeat(5))
}

{
    console.log("5".padStart(2,"0"))
    console.log("5".padEnd(2,"0"))
}
