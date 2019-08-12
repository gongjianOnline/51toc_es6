/**Iterator 和 for...of */
/**
 * for...of
 * 概述：遍历数据结构
 * 格式：
 *  for(let k of xxx){}
 */
{
    let arr = ['a','b','c']

}
/**Iterator
 * 概述:类似于迭代器(遍历器)arr\object\set\map
 * 使用:
 */
{
    let arr = ['aa','b','c']
    let iter = arr[Symbol.iterator]();
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
    console.log(iter.next())
}