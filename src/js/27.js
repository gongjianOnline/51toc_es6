/**Generator函语法 */
/**
 *概述
 *  1=>异步编程解决方案
 *  2=>函数      
 *格式
 *  let fn = function* (){
 *      yirld 执行语句
 *      yirld 执行语句
 *  }
 * 
 */
{
    let fn = function* (){
        yield function(){
            console.log("hello word")
        }
        yield 'b'
        yield 'c'
    }
    let f = fn();
    console.log(f.next().value())
    console.log(f.next())
    console.log(f.next())
    console.log(f.next())
}
