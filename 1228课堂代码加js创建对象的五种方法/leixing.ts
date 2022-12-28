//交又类型就是取多个类型的并集，使用 符号定义，被&符链接的多个类型构成一个交又类型，表示这个类型同时具备这几个连接起来的类型的特点
/**
 *交叉类型 &
 */
interface use {
  name: string;
  age: number;
}
interface per {
  sex: number;
}
type allInfo = use & per;
let person: use & per = { name: "小刘", age: 1, sex: 1 };

//2。联合类型(1)
/**
联合类型
不是这个 就是那个，满足两者中的任意一个
**/
let allType: number | string;
allType = "你好";
allType = 1;
//allType = false // 不能将类型“boolean”分配给类型“string | number"

