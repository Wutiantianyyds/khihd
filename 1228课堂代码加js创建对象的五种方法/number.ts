/**
 * 两个数相加
 * **/

/***number */


let num1: number = 1;
let num2: number = 2;
let sum: number = num1 + num2;
/**string */
let str1: string = "ts初始之路";
let str2: string = "希望疫情早日过去";
let str: string = str1 + str2;

/***元组
Tuple
* 概念: 但是长度有限，元组组成的内容的属性 类型不是单一的
*/
//错误写法 不能将类型“[number，string]”分配给类型“[number，string，boolean]”。 源具有 2 个元素，目标需要 3个
// let tuple: [number,string,boolean] = [1，2]
let tuple: [number, string, boolean] = [1, "2", true];

/**null undefind
 * * 概念:既为类型，又为值*
 * **/
let a: null = null;
let b: undefined = undefined;

/**object的对象
 * object nul 类型断言**/
declare function create(o: object | null): void;
create({ props: 0 });
create(null);
//create(3222) // 类型“number”的参数不能赋给类型“object"的参数
//create("dddd") // 类型“string”的参数不能赋给类型“object”的参数。
//create(undefined) // Error类型“undefined”的参数不能赋给类型“object  null”的参数
// 简单
let obj: { name: string; age: number };
obj = { name: "小红", age: 13 };

/**
 * interface
 * 类似于对象：{}代码块
 * 接口的高阶用法
 * **/
interface Person {
  name: string;
  age: number;
  sex: number;
  isJob: boolean;
  hobby: string[];
  former: number;
  formerName: [string, string, string];
}
let person: Person = {
  name: "王一博",
  age: 19,
  sex: 0,
  isJob: true,
  hobby: ['滑板","跳舞'],
  former: 3,
  formerName: ["肖战", "吴甜甜","王一博"],
};
