/**Reflect */
/**
 * 概述：
 *  1=》设计目的
 *      1>以后对象的一些方法会在Reflect身上
 *      2>修改某些Object方法的返回结果
 *      3>统一标准
 *         例如：
 *          "assign" in Object
 *          Reflect.has(Object,'assign') 
 *      4>可以复用Proxy的方法
 *      5>便于操作
 * 使用：
 *  和Proxy API类似
 *  
 * 
 */


{
    let obj = {
        name:'zangsan'
    }
    console.log(Reflect.get(obj,'name'))
    Reflect.set(obj,'name','lisi')
    console.log(Reflect.get(obj,'name'))
    Reflect.deleteProperty(obj,'name')
    console.log(obj)
}