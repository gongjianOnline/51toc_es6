/**Symbol*/
/**
 * 作用:解决命名冲突的问题
 * 概述:
 *  1=>新的原始数据类型的值,共有:undefined、null、boolean、string、Number、Object，Symbol
 *  2=>表示独一无二的值
 *  3=>用普通遍历方式无法遍历到Symbol下标
 *  4=>
 * 使用:
 *  1=>symbol  
 *  2=>symbol.for() //for("名称")里面的参数名称不能重复
 *  取值：
 *  Object.getOwnPropertySymbols() //只能取到Symbol的zhi值
 *  Reflect.ownkeys() //可以获取所有对象的key
 *  ****以上2个方法都是返回数组****
 */
{
    //示例
    let sy = Symbol("abc")
    let sy2 = Symbol('abc')
    console.log(sy==sy2)

    let sy3 = Symbol.for("abc")
    let sy4 = Symbol.for("abc")
    console.log(sy3 == sy4)

    let o = Symbol.for("abc")
    let obj1 = {
        abc : '111',
        [0] :'222'
    }
    
}

{
    //Object.getOwnPropertySymbols()
    let o = Symbol.for('abc');
    let obj = {
        test:'index',
        [o]:'indexSymbol'
    }
    //只能遍历出Symbols()
    console.log(Object.getOwnPropertySymbols(obj))

    Reflect.ownKeys(obj).forEach((tiem)=>{
        console.log(obj[tiem])
    })
}
