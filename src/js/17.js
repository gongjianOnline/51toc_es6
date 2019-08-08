/**对象扩展二*/
/**
 * 6=>对象属性的可枚举和遍历
 *  1=>Object.getOwnPropertyDescriptor //可以获取该属性的描述对象
 * 7=>Object.setPrototypeOf() //用来设置一个对象的prototype对象,返回参数对象本身
 * 8=>Object.getPrototypeOf() //用于读取一个对象的原型对象
 * 9=>Object.keys();object.values();Object.entries() //对象的遍历循环
 */
{
    /**接收两个参数,第一参数为自身的属性,第二参数向自身属性的原型上添加新的原型对象*/
    let proto = {};
    let obj = {x:10};
    Object.setPrototypeOf(obj,proto)
    proto.y = 20;
    proto.z = 40;
    console.log(obj)
    console.log(Object.getPrototypeOf(obj))
}
{
    //遍历
    let obj ={
        a:1,
        b:2,
        c:3
    }
    for(let key of Object.keys(obj)){
        console.log(key)
    }
    for(let key of Object.values(obj)){
        console.log(key)
    }
    for(let key of Object.entries(obj)){
        console.log(key)
    }
}
