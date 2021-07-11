# TypeScript-axios

TypeScript重构axios

- 使用TypeScript实现一个axios库🆒
- 项目的测试，构建与发布
- TypeScript基础知识，ts-axios开发实战
- TypeScript常用语法

1. 基础类型
2. 函数
3. 变量声明
4. 泛型
5. 接口
6. 类型推断
7. 类
8. 高级类型

- 项目脚手架
- 基础功能实现
- 异常情况处理
- 接口扩展
- 拦截器实现
- 配置化实现
- 取消功能实现
- 更多功能实现

前端工具运用：

- Jest做单元测试
- Commitizen规范化提交注释
- RollupJS打包项目
- TSLint保证代码风格一致性
- Prettier美化代码格式
- Semantic release管理版本和发布

1. ts-axios库单元测试，构建和发布

## 安装 TypeScript

```
npm -v

npm install -g typescript

tsc -v

+ typescript@4.3.5
```

```
tsc gxxx.ts

node xxx.js
```

接口，对象结构的描述

```
interface Person {
	firstName: string
	lastName: string
}

function Da(person: Person) {
	return '1024bibi.com'
}
```

## 基础类型

```
let isDone: boolean = false

let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24

let name: string = 'jeskson'
```

```
let list: number[] = [1,2,3]

let list: Array<number> = [1,2,3]

let x: [string, number]
x = ['jeskson', 123]
```

枚举

```
enum Color {
	Red = 1,
	Green,
	Blue
}

let colorName: string = Color[2]

console.log(colorName)
```

编译后的枚举Js

```
var Color;
(function (Color) {
	Color[Color['Red'] = 1] = 'Red';
	Color[Color['Green'] = 2] = 'Green';
	Color[Color['blue'] = 3] = 'Blue';
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
```

```
let arr: any[] = ['1']

function meUser(): void {
	console.log('123')
}

let a: void = undefined
let b: void = null

// void 能赋值undefined 或 null
```

ts中子类型是可以赋值给父类型的

```
let a: undefined = undefined

let b: null = undefined

// 联合类型
let a: undefined | null = 2

// never 不存在的类型
// 场景：函数中，任何类型的子类型
// 没有任何类型是 never 的子类型

function error(message: string): never {
	throw new Error(message)
}

function fail() {
	return error('something failed')
}

// object
declare function create(o: object | null): void;

create({prop: 0})
create(null)
```

```
let someValue: any = 'this is a string'
// let strLength: number = (<string>someValue).length

let strLength: numbers = (someValue as string).length
```

元组Tuple

元组类型允许表示一个已知元素数量和类型的数据，各元素的类型不必相同。比如，你可以定义一对值分别位string和number类型的元素

```
let x: [string, number]
x = ['jeskson', 10] // ok
x = [10, 'jeskson'] // Error
```

当访问一个已知索引的元素，会得到正确的类型：

```
console.log(x[0].substr(1)) // OK
console.log(x[1].substr(1)) // Error
```

当访问一个越界的元素，会使用联合类型替代:

```
x[3] = 'world' // OK 字符串

console.log(x[5].toString()) // OK

x[6] = true // Error,布尔不是(string | number)类型
```

联合类型是高级主题

## 变量声明

```
// 11
function f() {
	var a = 10
	return function g() {
		var b = a + 1
		return b
	}
}

var g = f()
g()
```

解构：

```
function keepWholeObject(wholeObject: {a:string,b?:number}){
	let{a,b=1001} = wholeObject
}
```

展开:

```
// 浅拷贝的过程
let first = [1,2]
let second = [3,4]
let bothPlus = [0, ...first, ...second, 5] // 修改不会影响前面的

console.log(bothPlus)
```

```
let defaults = {
	food: 'spicy',
	price: '$10',
	ambiance: 'noisy'
}

let search = {...defaults, food: 'rich'}

console.log(search)
```

接口是如何工作的：

```
function printLabel(labelledObj: {label: string}) {
	console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10'}
printLabel(myObj)

// 接口
interface LabelledValue {
	label: string
}
function printLabel(labelledObj: LabelledValue) {
	console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10'}
printLabel(myObj)
```

只读属性：

```
interface Point {
	readonly x: number
	readonly y: number
}

let p1: Point = {x: 10, y: 20}
```

```
let a: number[] = [1,2,3,4]
let ro: ReadonlyArray<number> = a

a = ro as number[]
```

> 接口-额外属性检查+函数类型+可索引的类型

任意数量的属性：

```
interface SquareConfig {
	[propName: string]: any
}

let myArray: StringArray

myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]
```

类类型-继承接口-混合类型-接口继承类

```
interface ClockInterface {
	currentTime: Date
	
	setTime(d: Date)
}

interface ClockConstructor {
	new(hour: number, minute: number)
}

class Clock implements ClockConstructor {
	currentTime: Date
	
	constructor(h: number, m: number) {
		
	}
	
	setTime(d: Date) {
		this.currentTime = d
	}
}
```

继承接口：

```
interface Shape {
	color: string
}

interface PenStroke {
	penWidth: number
}

interface Square extends Shape, PenStroke {
	sideLength: number
}

let squre = {} as Square
squre.color = 'blue'
squre.sideLength = 10
squre.penWidth = 5.0
```

```
class Control {
	private state: any
}
interface SelectableControl extends Control {
	select()
}
class Button extends Control implements SelectableControl {
	select() {}
}
class TextBox extends Control {
	select(){}
}
```

## 类













