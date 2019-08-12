/**module的语法(关联common)*/ 
/**
 * 引入文件:
 *  1=>import "路径" (js/css)
 *  2=>import {xx} from "路径"
 *  3=>import * as obj from "路径"
 * 
 * 抛出文件:
 *  export xxx
 * 
 * 模式二
 * 引入全部
 *  1=>import obj from "路径" //所有路径
 *  抛出文件
 *  export default{
 *     变量名,
 *      ...
 *  }
 *  

// import '../common/index'

/**场景一*/
// import {a,fn}  from "../common/index"
// fn()

/**场景二 */
// import * as obj  from '../common'
// obj.fn()

/**场景三 */
// import obj from '../common'
// obj.fn()


