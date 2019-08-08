/**对象的扩展*/
/**
 * 1=>属性的简洁表示法****
 * 2=>属性名表达式
 * 3=>方法的name属性
 * 4=>Object.is() //用于做比较等同于===\==
 * 5=>Object.assign() //用于对象的合并,将源对象(source)的所有可枚举属性,复制到对象(target)
 */
{
    //简洁表示法
    let a = "hello word"
    let obj = {
        a
    }
    console.log(obj)
}
{
    //属性名表达式
    let foo =  "test"
    let obj = {
        [foo]:foo,
        //[key] ===> 取得是变量赋值的内容
    }
    console.log(obj.test)
}
{
    //方法的name属性
    let obj2 = {
        run(){
            return 'hello word'
        }
    }
    console.log(obj2.run.name)
    //对象的方法的名称是什么
}
{
    //Object.assign()
     let target = {a:1}
     let source1 = {b:2}
     let source2 = {c:3}
     Object.assign(target,source1,source2)
     console.log(target) //{a:1,b:2,c:3}
}
