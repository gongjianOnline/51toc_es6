/**Map和WeakMap */
/**Map
 *  1>数据结构
 *  2>map的作用
 *      key可以是任意的内容
 *  3>使用
 *      长度：size
 *      删除:delete\clear
 *      增: set()
 *      查: get()
 */
/**WeakMap
 *   map和weakmap
 *      1》weakmap的值必须是对象
 *      2》没有set、clear属性
 *      3》垃圾回收机制
 */
{
    let map1 = new Map();
    console.log(map1);
    console.log(map1.size);
    console.log(map1.set("a",123));
    console.log(map1.set(['a','b'],122222));
    console.log(map1.get("a"));
    console.log(map1.delete("a"));
    console.log(map1.clear());
}