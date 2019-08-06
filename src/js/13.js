/**es6数值扩展 */
/**
 * 注意点:
 *  1>es5中
 *      parseInt() parseFloat()
 *      都在全局对象下(window)
 *   es6中
 *      Number.parseInt()
 *      Number.parseFloat()
 * 
 * 2=>number对象新增方法
 *  1>Number.isFinite() //检查一个数值是否有限
 *  2>Numbre.isNaN(0) //检测一个数值是否是NaN
 *  3>Number.isInteger() //判断一个数值是否为整数
 * 3=>Math对象新增方法
 */
{
    let str = "3.00px"
    console.log(Number.parseInt(str))
    console.log(Number.parseFloat(str))
}
{
    console.log(Number.isFinite(3));
    console.log(Number.isFinite(NaN));
    console.log(Number.isFinite("hello word"));
    console.log(Number.isFinite(true));
}
{
    console.log(Number.isNaN(3));
    console.log(Number.isNaN(NaN));
}
{
    console.log(Number.isInteger(3))
    console.log(Number.isInteger(3.1415926))
    console.log(Number.isInteger(3.0))
}

/**Math对象新增方法 
 * 1>Math.trunc() //去除小数部分,返回整数部分
 * 2>Math.sign() //判断一个数值是:整数(1),负数(-1),0\-0(0\-0),其他(NaN)
 * 
 * 
*/
{
    console.log(Math.trunc(3.14))
}
{
    console.log(Math.sign(3))
    console.log(Math.sign(-3))
    console.log(Math.sign(0))
    console.log(Math.sign('hello wrod'))
}
