/**函数解构赋值 */
/**函数解构赋值场景 */
{
    function test (){
        return [1,2]
    }
    let a,b;
    [a,b] = test()
    console.log(a,b)
}