/**Set和WeakSet */
/**Set
 * 概述：
 *  1》新的数据结构,类似于数组
 *  2》值是唯一 (数组去重***要看数据类型***)
 *  3》
 *  使用：
 *  1=>new Set()
 *      add //增加
 *      size //length
 *      clear //全删
 *      delete //删除某一个
 *      has //查
 *  2=>遍历器
 *  keys()  //返回键名
 *  values() //返回键值
 *  enries() //返回键值对
 *  forEach() //回调函数遍历每一个成员
 */

/** WeakSet */
/**
 * 与Set的区别:
 *  WeakSet:必须是对象
 * 使用:
 *  new WeakSet()
 *  方法:
 *  add()
 *  delete()
 *  has()
 * 注意： 不可遍历
 */



{
    let set1 = new Set();
    console.log(set1);

    let set2 = new Set();
    console.log(set2)
}
{
    /**场景一:数组去重 */
    let arr = [1,2,2,2,2,2,5,55,5,5,5,6]
    let set3 = new Set(arr);
    console.log(set3)
}

{
    //add添加
    let set4 = new Set()
    set4.add(1)
    set4.add("hello word")
    //has查
    console.log(set4.has(1))
    //delete\clear 删除
    set4.delete(1);
    set4.clear();
    console.log(set4);
}
{
    //遍历器
    console.log("遍历器测试")
    let set6 = new Set(['a','b','c'])
    for(let k of set6.keys()){
        console.log(k)
    }
    for(let val of set6.values()){
        console.log(val)
    }
    set6.forEach((tiem,index,arr) =>{
        console.log(tiem,index,arr)
    })
}


