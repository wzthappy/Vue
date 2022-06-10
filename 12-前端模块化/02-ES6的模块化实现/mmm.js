// 1. 导入的{}中定义的变量
import aaa, { flag, sum } from "./aaa.js";

if (flag) {
  console.log('小明是天才');
	console.log(sum(20, 30));
}

// 2. 直接导入export定义的变量
import { num1, height } from './aaa.js';
console.log(num1);
console.log(height);

// 3. 导入 export的function/class
import {mul, Person} from './aaa.js';
console.log(mul(111, 2222));
const p = new Person();
p.run();

// 4. 导入 export default 中的内容
import addr from './aaa.js';
// console.log(addr);
addr('你好啊');

// 5. 统一全部导入
import * as a from './aaa.js';
console.log(a.flag);
console.log(a.height);
new a.Person().run();