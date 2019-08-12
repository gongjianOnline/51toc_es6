/**Proxy(代理)*/
/**
 * 概述:
 *  源对象
 *  代理(拦截)
 *  操作
 * 使用(拦截):
 *  1=> get() //拦截对象属性的读取
 *  2=> set() //拦截对象属性的设置
 *  3=> deleteProperty() //拦截删除对象key操作
 * 
 * 使用场景:
 * 
 */


{
    //基本用例
    let obj = { //源对象
        name:'张三',
        age:'18'
    }
    let personZ = new Proxy(obj,{})
    console.log(personZ.name)
}
{
    //拦截用例
    let obj = { //源对象
        name:'张三',
        age:'18'
    }
    let personZ = new Proxy(obj,{
        //获取
        get(target,key,val){
            if(key == "name"){
                return false;
            }else{
                return target[key]
            }
        },
        //修改
        set(target,key,val){
            if(key == 'age'){
                return target[key] = val
            }else{
                return false
            }
        },
        //删除
        deleteProperty(target,key){
            if(key == 'str'){
                return false
            }else{
                return delete target[key]
            }
        }   
    })
    console.log(personZ.name) //读
    personZ.age = "20"
    console.log(personZ.age) //改
    console.log(delete personZ.name ) //删
    console.log(personZ) //查
    
}

