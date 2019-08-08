/**数组的扩展 */
/**
 * 1>运算符(...)--解构
 * 2>方法
 *  1=>Array.from() //将类数组对象转换为数组
 *  2=>Array.of() //将一组值,转换为数组
 *  3=>copyWithin() //将制定位置的成员复制到其他位置(会覆盖原有成员),最后返回新数组
 *      接收三个参数:
 *          target : 从该位置开始替换数据
 *          [start]  : 从该位置开始读取数据,默认为0,如果为负值,表示倒数
 *          [end]    : 到该位置前停止读取数据,默认等于数组长度,如果是负数,表示倒数 
 *  4=>find() // 查找第一个符合条件的数组成员，参数为回调函数,所有数组成员依次执行该回调函数,直到找出第一个返回值为true的成员.
 *  5=>findIndex() // 返回第一个符合条件的数组成员的下标,如果所有成员不符合,返回-1
 *  6=>fill() // 填充数组
 *      接收三个参数
 *          参数1>替换成什么
 *          参数2>开始位置
 *          参数3>结束位置
 *  7=>entries()\keys()\values() //统一数组\对象的遍历标椎
 *      entries() //遍历键值对
 *      keys() //遍历健名
 *      values() //遍历键值
 *  8=>inclides() //数组查找，返回bool值
 */
 {
    //Array.of()
    console.log(Array.of(1,2,3,4,5,'阿'));
}

{

   let test = [1,2,3,4,5].copyWithin(0,3,4);
   console.log(test)
}
{
    let arr = ['a','b','c','d','e']
    console.log(
        arr.find((tiem)=>{
            return tiem === "a"
        }),
        arr.findIndex((tiem)=>{
            return tiem === "a"
        })
    )
}
{
    let arr = ['a','b','c','d','e'];
    console.log(arr.fill('o',0,3))
}
{
    //遍历场景
    let arr = ['a','b','c','d','e'];
    for(let v of arr.values()){
        console.log(v)
    }
    for(let v of arr.values()){
        console.log(v)
    }
    for(let [k,v] of arr.entries()){
        console.log(k,v)
    }
}
{   
    //includes
    let arr = ['a','b','c','d','e'];
    console.log(arr.includes("a"))
}


