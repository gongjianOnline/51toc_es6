/**箭头函数 */
/**
 * 1>函数参数的默认值
 *      function fn(obj=xxx){}
 * 2>函数作用域
 * 3>rest
 * 4>箭头函数
 * 注意点：
 *  1=》没有arguments对象 *
 *  2=》不能new  *
 *  3=》this指向(es5中function().this指向window；()=>this.指向函数本身)
 */
{
    // es5判断函数默认值
    function fn(obj){
        var obj= obj || {};
        obj.userName = "张三";
        return obj.userName;
    }
    console.log(fn())
    //es6优化
    function fn2(obj = {}){
        obj.name = "张三2"
        return obj.name
    }
    console.log(fn2())
}
{
    //rest
    function fn (a,b,...c){
        console.log(a,b,...c)
    }
    fn(1,2,3,4,5,6)
}
{
    //箭头函数

}