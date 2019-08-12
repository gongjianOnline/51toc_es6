import { IncomingMessage } from "http";

/** ****Promise(核心)**** */
/**
 * 概述:
 *  1=》解决异步编程的一种方案（让异步编程写法感觉像是同步的感觉）
 * 
 * 
 * 使用:
 *  new Promise(function(resolve,reject){
 *   resolve//成功的
 *   reject //失败的  
 *  })
 *  化简：
 *  new Promise((res,rej)=>{
 *      res()
 *  })
 * 
 * 方法:
 *  all() //将多个Promise示例,包装成一个新的Promise实例,同时触发全部返回时状态改变
 *  race() //将多个Promise示例,包装成一个新的Promise实例,同时触发,只有一个返回结果就可以
 * 
 */

{
   //es5经典回调
    let fn = function (callback) {
        console.log(111);
        setTimeout(function(){
            callback()
        },1000)
    }
    fn(function(){
        console.log(222)
    })
}

{
    // Es6回调
    let fn = function(){
        console.log("aaa");
        return new Promise((res,rej)=>{
            res()
        })
    }
    fn().then(()=>{
        console.log("bbb")
        //连续异步
        return new Promise((res,rej)=>{
            res()
        })
    }).then(()=>{
        console.log("ccc")
    })
}

{
    //all
    let loadImg = function(srcURL){
        return new Promise((res)=>{
            let img= document.createElement("img");
            img.src = srcURL;
            img.onload = function(){
                res(img);
            } 
        })
    }
    Promise.all([
        loadImg('http://img0.imgtn.bdimg.com/it/u=1756633021,617129201&fm=26&gp=0.jpg'),loadImg('http://img0.imgtn.bdimg.com/it/u=1756633021,617129201&fm=26&gp=0.jpg'),
        loadImg('http://img0.imgtn.bdimg.com/it/u=1756633021,617129201&fm=26&gp=0.jpg')
    ]).then((img)=>{
        
        img.forEach((item)=>{
            console.log(item)
            document.getElementById("imgDiv").appendChild(item)
        })
    })
}
