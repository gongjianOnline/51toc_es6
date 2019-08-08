/**class的基本语法 */
/**
 * 格式:
 *  class 名称{
 *      constructor(){}
 *      方法名称(){},
 *      方法名称(){}
 *  }
 *  new 名称()
 */
{
    class Tabs{
        constructor(name){
            this.name = name
        }
        run(){
            return "hello word"
        }

    }
    let lab = new Tabs("zhangsan");
    console.log(lab)
}