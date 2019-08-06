/**字符串扩展 */
/**unicode编码 */
/**注意点:
 * 1=> 超出了ffff范围:吉
 * 2=> 解决超出不能正确识别的字符:{}
 */
{
    let str = '\u20BB7'
    console.log(str)
    /**es6解决 */
    let strEs6 = '\u{20BB7}'
    console.log(strEs6)
}

/**新增方法 
 * codePointAt() //可以识别32位的UTF-16字符
 * 应用场景:判断当前字符是否大于0xffff
*/
{
    function demo (str){
        return str.codePointAt(0) > 0xFFFF
    }
    console.log(demo("你"))
    console.log(demo("吉"))
}
/**新增方法
 * at() // 修正了charAt()不能解释大于0xffff字符
 */
