/*
	内容:'解构赋值'
*/
/**一、数组的解构赋值
 * 注意:1>如果匹配不到,则变量是undefined
 * 		2>如果等号右边不是数组(不可比遍历的结构),报错
 */
{
	let arr = [10,20,30]
	let [a,b,c] = arr;
	console.log(a,b,c)
}

{
	/**默认值 */
	let [a=true] = [];
	console.log(a)
}
{
	/*数组解构赋值 */
	let [a,b,...c] = [1,2,3,4,5,6,7]
	console.log(a)
	console.log(b)
	console.log(c)
}

