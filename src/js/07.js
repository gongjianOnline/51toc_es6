/**字符串解构赋值 */
/**注意点:
 * 1=>类似于数组的对象都有一个length属性，可以对这个属性解构赋值
 */
{
    let [a,b,c] = "hello"
    console.log(a,b,c);
    let {length:len} = "hello"
    console.log(len)
}

/***数值和布尔值的解构赋值 */
/**注意点:
 * 1=>如果等号右边是数值和布尔值,则会先转为对象
 */
{
    let {toString:s} = 123
    console.log(s)
}