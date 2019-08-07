/**
 * 对象的解构赋值
 * 注意:1>如果匹配不到,则变量是undefined
 * 
 */
{
    let {aoo:ooo} = {aoo:'aaa',brr:'bbb'}
    //aoo是匹配模式
    //ooo是变量
    console.log(ooo)
}
{
    /**模式匹配用例 */
    let obj ={
        arr:[
            '111',
            {brr:222}
        ]
    }
    let {arr,arr:[x,{brr}]} = obj
    console.log("模式匹配用例")
    console.log(arr,x,brr)
}

{
    /**默认值生效的条件是,对象的属性值严格等于undefined*/
    let {a=true} = {a:undefined}
    console.log(a) //true
}

