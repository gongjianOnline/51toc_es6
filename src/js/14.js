/**箭头函数 */
/**
 * 1>函数参数的默认值
 *      function fn(obj=xxx){}
 * 2>函数作用域
 * 3>rest
 * 4>箭头函数
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