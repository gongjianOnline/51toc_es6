/**正则-修饰符-属性 */
/**
 * 构造函数
 *  new RegExp('xxx/igm','i')
 *  参数2 (修饰符) 会覆盖前面的修饰符
 * 属性
 *  flags ==>返回正则表达式的修饰符
 *  stucky 
 * 修饰符
 *  i、g、m
 * （新增）
 *  y //y和g类似 (全文匹配)
 *      区别：
 *          g：后面有就可以
 *          y:从匹配后面第一个开始算
 *  u //正确处理大于\uFFFF的Unicode字符
 *  
 *  
 */

 {
    let reg1 = new RegExp('xxx','i');
    let reg2 = /xxx/i;
    console.log(reg2.flags)
 }

 {
    let reg = new RegExp(/XXX/igm,'i')
    console.log(reg.flags)
 }
 {
    let str = 'bbb_bb_b';
    let reg1 = /b{2,}/g;
    let reg2 = /b{2,}/y;
    console.log(reg1.exec(str),reg2.exec(str))
 }
 {
console.log(/^\uD83D/u.test('\uD83D\uDC2A'))
 }
 
