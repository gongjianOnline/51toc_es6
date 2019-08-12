/**class继承性 */
/**
 * 格式： 
 * class 子类 extends 父类{
 *      constructor(){
 *          super()
 *      }
 * }
*/
{
    //class继承
    class Parent{
        constructor(){
            this.name="zhangsan"
        }
    }

    class Child extends Parent {
        constructor(){
            super()
            this.age = "18"
        }
    }
    let child = new Child()
    console.log(child.age,child.name)
}