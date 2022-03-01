# TypeScript-axios

使用typescript从零实现axios

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

## features

- 在浏览器使用XMLHttpRequest对象通讯
- 支持Promise API
- 支持请求和响应的拦截器
- 支持请求数据和响应数据的转换
- 支持请求的取消
- JSON数据的自动转换
- 客户端防止XSRF

typescript library starter

它是一个开源的typescript开发基础库的脚手架工具，可以帮助我们快速初始化一个TypeScripT项目

git clone

cd ts-axios

npm install

```
editorconfig // 编辑器的配置
gitignore
tsconfig.json
tslint.json
rollup.config.ts // 打包构建

src // 源码
test // 单元测试
tools // 发布
```

TypeScript library starter 创建的项目集成了很多优秀开源工具:

```
使用RollupJS帮助我们打包
使用Prettier和TSLint帮助我们格式化代码以及保证代码风格一致性
使用TypeDoc帮助我们自动生成文档并部署到GitHub pages
使用Jest帮助我们做单元测试
使用Commitizen帮助我们生成规范化的提交注解
使用Semantic release帮助我们管理版本和发布
使用husky帮助我们更简单地使用git hooks
使用Conventional changelog帮助我们通过代码提交信息自动生成change log 
```

> 对标目标+重现过程+分析原因+总结经验

npm script

- `npm run list`,使用TSLint工具检查src和test目录下TypeScript代码的可读性，可维护性和功能性错误。
- `npm start`,观察者模式运行`rollup`工具打包代码
- `npm test`,运行`jest`工具跑单元测试
- `npm run commit`,运行`commitizen`工具提交格式化的`git commit`注解
- `npm run build`,运行`rollup`编译打包`TypeScript`代码，并运行`typedoc`工具生成文档

```
npm run start 打包
npm run lint
npm test 单元测试
```

```
// 查看远程分支
git remote -v

git remote add origin git@gith...

git pull origin master

// rm README.md 删除

git branch // 查看分支

git add . // 工作区提交到暂停区

git commit -m //

// 工具

npm run commit
```

> 代码提交

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space,
- formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests

```
// 提交的主题
feat: A new feature
// 修改哪些文件等等
all the file
// 简单的描述，这次的改编
init project by typescript library starter
// Are there any breaking changes? No
// Does this change affect any open issues? No

git push origin master
```

## Demo

利用node.js的express库去运行我们的demo，利用webpack来作为demo的构建工具。

```
webpack 4.28.4
webpack-dev-middleware 3.5.0
webpack-hot-middleware 2.24.3
ts-loader 5.3.3
tslint-loader 3.5.4
express 4.16.4
body-parser 1.18.3
```

- webpack是打包构建工具
- webpack-dev-middleware和webpack-hot-middleware是2个express的webpack中间件，
- ts-loader和tslint-loader是webpack需要的TypeScript相关loader，
- express是Node.js的服务端框架，
- body-parser是express的一个中间件，解析body数据用的。

依赖包：

```
webpack.config.js

module.exports = {
	mode: 'development',
	
	// 我们会在examples目录下建多个子目录
	// 我们会把不同章节的 demo 放到不同的子目录中
	// 每个子目录的下会创建一个 app.ts
	// app.ts 作为webpack构建的入口文件
	// entries收集了多目录个入口文件
	// entries是一个对象，key为目录名
	// 多入口
	
	// 唯一的
	// 根据不同的目录名称，打包生成目标 js，名称和目录名一致
	output: {
		path: path.join(__dirname, '__build__'),
		filename: '[name].js',
		publicPath: '/__build__/'
	},
	
	// rules
	module
	
	resolve: {
		// 解析
		extensions: ['.ts', '.tsx', ]
	}
	
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}
```

```
import axios from '../../src/index'

axios({
	method: 'get',
	url: '/simple/get',
	params: {
		a: 1,
		b: 2
	}
})

// npm run dev

dev: node examples/server.js
```

> server.js

```
// Request URL:  http://localhost:8080/simple/get
// Request Method: GET
// Status Code: 200 OK

// Connection: keep-alive
// Content-Length: 21
// Content-Type: application/json;charset=utf-8

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

router.get('/simple/get', function(req, res) {
	res.json({
		msg: `hello world`
	})
})

app.use(router)

const port = process.env.PORT || 8080
module.exports = app.listen(port, () => {
	console.log('dadaqianduan.cn')
})
```

> 处理请求url参数

```
axios({
	method: 'get',
	url: '/base/get',
	params: {
		a: 1,
		b: 2
	}
})

// params对象的key和value拼接到url上

// /base/get?a=1&b=2

参数为数组

params: {
	foo: ['bar', 'baz']
}

// /base/get?foo[0]=bar&foo[1]=baz

参数为对象

params: {
	foo: {
		bar: 'baz'
	}
}

// /base/get?foo=xxxlx encode后的结果

参数值为Date类型

params: {
	date
}

// url是 /base/get?date= date后面拼接的是date.toISOString()的结果
```

```
特殊字符支持：... // 允许出现在url中的，不希望被encode
// /base/get?foo=@:$+ 注意会把空格转换成+
```

> 空值忽略

对于值为null或者undefined的属性，我们是不会添加到url参数中的

```
axios({
	method: 'get',
	url: '/base/get',
	params: {
		foo: 'bar',
		baz: null
	}
})

// url /base/get?foo=bar
```

> forEach return 是跳不出的，它是跳下一次循环

```
import { isDate, isObject } from './util'

export function buildURL(url: string, params?: any): string {
	if (!params) {
		return url
	}
	
	const parts: sting[] = []
	
	Object.keys(params).forEach((key) => {
		const val = params[key]
		if (val === null || typeof val === 'undefined') {
			return
		}
		let values = []
		if (Array.isArray(val)) {
			values = val
			key += '[]'
		} else {
			values = [val]
		}
		values.forEach((val) => {
			if (isDate(val)) {
				val = val.toISOString()
			} else if (isObject(val)) {
				val = JSON.stringify(val)
			}
			parts.push(`${key}=${val}`)
		})
	})
}
```

> util.ts

```
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
	return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
	return val !== null && typeof val === 'object'
}
```






















> 编写代码

实现简单的发送请求功能，即客户端通过XMLHttpRequest对象把请求发送到server端，
server端能收到请求并响应即可。

实现axios最基本的操作，通过传入一个对象发送请求：

```
axios({
	method: 'get',
	url: '/simple/get',
	params: {
		a: 1,
		b: 2
	}
})
```

创建入口文件

我们删除src目录下的文件，先创建一个index.ts文件，作为整个库的入口文件，

定义一个axios方法，

```
function axios(config) {
	
}

export default axios
```

学习tsconfig.json

> 编写基础请求代码

src/types/index.ts
src/index.ts
src/xhr.ts

```
// type/index.ts
export type Method = 'get' | 'GET'
 | 'delete' | 'Delete'
 | 'head' | 'HEAD'
 | 'options' | 'OPTIONS'
 | 'post' | 'POST'
 | 'put' | 'PUT'
 | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
	url: string
	method?: Method
	data?: any
	params?: any
}

// src/index.ts
import {AxiosRequestConfig} from './types';

function axios(config: AxiosRequestConfig) {
	// TODO
}

export default axios
```

xhr.ts

```
import { AxiosRequestConfig } from './types'

// 发送数据
export default function xhr(config: AxiosRequestConfig): void {
	const {data = null, url, method = 'get'} = config
	
	const request = new XMLHttpRequest()
	
	// 异步
	request.open(method.toUpperCase(), url, true)
	
	request.send(data)
}
```

## XMLHttpRequest

使用XMLHttpRequest(XHR)对象可以与服务器交互。您可以从URL获取数据，而无需让整个的页面刷新。这使得Web页面可以只更新页面的局部，而不影响用户的操作。

XMLHttpRequest在Ajax编程中被大量使用。

EventTarget->XMLHttpRequestEventTarget->XMLHttpRequest

XMLHttpRequest可以用于获取任何类型的数据，而不仅仅是XML，它还支持HTTP以外的协议（包括文件和ftp）。

如何您的通信需要从服务器接收事件或消息数据，请考虑通过EventSource接口使用serversent events。
对于full-duplex通信，WebSockets可能是更好的选择。

```
src
 types
  index.ts
 index.ts
 xhr.ts
```

```
index.ts

import { AxiosRequestConfig } froom './types'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
	xhr(config)
}

export default axios
```

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

- 基础示例
- 继承
- 公共，私有与受保护的修饰符
- readonly修饰符
- 存取器
- 静态属性
- 抽象类
- 高级技巧

```
class Greeter {
	greeting: string
	constructor(message: string) {
		this.greeting = message
	}
	greet() {
		return "hello" + this.greeting
	}
}
let greeter = new Greeter("world")
greeter.greet()
```

基础+继承：

```
class Animal {
	move(distance: number = 0) {
		console.log('Animal moved ${distance}m')
	}
}
class Dog extends Animal {
	bark() {
		console.log('Woof')
	}
}

const dog = new Dog()
dog.bark()
dog.move(10)
```

```
class Animal {
	name: string
	constructor(name: string) {
		this.name = name
	}
	move(distance: number = 0) {
		console.log(`${this.name} moved ${distance}m`)
	}
}

class Snake extends Animal {
	constructor(name: string) {
		super(name)
	}
	move(distance: number = 5) {
		console.log('Slithering...')
		super.move(distance)
	}
}

class Horse extends Animal {
	constructor(name: string) {
		super(name)
	}
	move(distance: number = 45) {
		console.log('Galloping...'),
		super.move(distance)
	}
}

let sam = new Snake('Sammy')
let tom: Animal = new Horse('Tommy')

sam.move()
tom.move(34)
```

修饰符+readonly修饰符

```
class Animal {
	private name: string
	
	constructor(name: string) {
		this.name = name
	}
	move(distance: number = 0) {
		console.log(`${this.name} moved ${distance}m`)
	}
}
class Rhino extends Animal {
	constructor() {
		super('Rhino')
	}
}
class Employee {
	private name: string
	constructor(name: string) {
		this.name = name
	}
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')
```

```
animal = rhino //ok
animal = employee //error
```

```
class Person {
	protected name: string
	
	constructor(name: string) {
		this.name = name
	}
}

class Employee extends Person {
	private department: string
	
	constructor(name: string, department: string) {
		super(name)
		this.department = department
	}
	
	getElevatorPitch() {
		return `Hello, my name is ${this.name} and I work in ${this.department}.`
	}
}

let howard = new Employee('Howard', 'Sales')
```

```
class Person {
	readonly name
	
	constructor(name: string) {
		this.name = name
	}
}
let john = new Person('John')
console.log(john.name)

john.name = '' // error
```

> 存取器

```
class Employee {
	fullName: string
}
let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
	console.log(employee.fullName)
}
```

```
let passcode = 'secret passcode'

class Employee {
	private _fullName: string
	get fullName(): string {
		return this._fullName
	}
	
	set fullName(newName: string) {
		if(passcode && passcode === 'secret passcode') {
			this._fullName = newName
		} else {
			console.log('Error: Unauthorized update of employee!')
		}
	}
}

let employee = new Employee()
employee.fullName = 'Bob Simth'
if (employee.fullName) {
	console.log(employee.fullName)
}
```

es5: 

```
var passcode = 'secret1 passcode';
var Employee = (function() {
	function Employee() {
		
	}
	Object.defineProperty(Employee.prototype, "fullName", {
		get: function () {
			return this._fullName;
		},
		set: function (newName) {
			if (passcode && passcode === 'secret passcode') {
				this._fullName = newName;
			}
			else {
				console.log('Error: Unauthorized update of employee!')
			}
		},
		enumerable: true,
		configurable: true
	});
	return Employee;
}());
var employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
	console.log(employee.fullName);
}
```

> 静态属性

```
class Grid {
	static origin = {x: 0, y: 0}
	
	scale: number
	
	constructor(scale: number) {
		this.scale = scale
	}
	
	calculateDistanceFromOrigin(point: { x: number; y: number }) {
		let xDist = point.x - Grid.origin.x
		let yDist = point.y - Grid.origin.y
		return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
	}
}
let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigin({x:3,y:4}))
console.log(grid2.calculateDistanceFromOrigin({x:3,y:4}))
```

> 高级技巧

```
abstract class Animal {
	abstract makeSound(): void
	move(): void {
		console.log('roaming the earth...')
	}
}
```

```
// 抽象方法不具体实现
abstract class Department {
	name: string
	
	constructor(name: string) {
		this.name = name
	}
	
	printName(): void {
		console.log('Department name ' + this.name)
	}
	
	abstract printMeeting(): void
}

class AccountingDepartment extends Department {
	constructor() {
		super('Accounting ad Auditing')
	}
	
	printMeeting(): void {
		console.log('dadaqianduan.cn')
	}
	
	genterateReports(): void {
		console.log('Generating accounting reports...')
	}
}

let department: Department
department = new AccountingDepartment()
department.printName()
department.printMeeting()
department.genterateReports() // error 类型你是Department，没有这个方法
```

```
class Greeter {
	static standardGreeting = 'Hello, there'
	
	greeting: string
	
	constructor(message: string) {
		this.greeting = message
	}
	
	greet() {
		return 'Hello, ' + this.greeting
	}
}

let greeter: Greeter
greeter = new Greeter('world')
console.log(greeter.greet())
```

```
// js

// 构造函数 原型上的方法，静态属性

// 类具有实例部分 和 静态部分
var Greeter = (function() {
	function Greeter(message) {
		this.greeting = message;
	}
	Greeter.prototype.greet = function() {
		return 'Hello, ' + this.greeting;
	};
	Greeter.standardGreeting = 'Hello, there';
	return Greeter;
}());
var greeter;
greeter = new Greeter('world');
console.log(greeter.greet());
```

类可当接口使用

```
// 通常不建议，可以使用interface

interface Point {
	x: number
	y: number
}

interface Point3d extends Point {
	z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}
```

> 函数

函数类型，可选参数，默认参数，this，重载

```
function add(x, y) {
	return x + y
}

let myAdd = function (x, y) {
	return x + y
}

let z = 100
function addToZ(x, y) {
	return x + y + z
}
```

```
// ?可选参数 默认参数 = ''
```

使用默认参数 nudefined

```
function buildName(firstName: string, ...restOfName: string[]): string {
	return firstName + '' +
}

let buildNameFn: (fname: striing, ...rest: string[]) => string =
buildName
```

函数+this+重载

```
let deck = {
	suits: ['hearts', 'spades', 'clubs', 'diamonds'],
	cards: Array(52),
	createCardPicker: function () {
		return function () {
			let pickedCard = Math.floor(Math.random() * 52)
			let pickedSuit = Math.floor(pickedCard / 13)
			
			return {
				suit: this.suits[pickedSuit],
				card: pickedCard % 13
			}
		}
	}
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()
```

this

```
interface UIElement {
	addClickListener(onclick: (this: void, e: Event) => void): void
}
class Handler {
	type: string
	
	onClickBad = (e: Event) => {
		this.type = e.type
	}
}
let h = new Handler()
let uiElement: UIElement = {
	addClickListener() {
		
	}
}
uiElement.addClickListener(h.onClickBad)
```

重载：参数和返回值呢？是可以发生变化的

```
function pickCard(x: { suit: string; card: number } []): number
function pickCard(x: number): {suit: string; card: number}
```

泛型，使用泛型变量，泛型类型，泛型类，泛型约束

```
function identity<T>(arg: T): T {
	return arg
}

// let output = identity<string>('myString')

let output = identity('myString')
```

```
function identity<T>(arg: T): T {
	return arg
}
interface GenericIdentityFn<T> {
	(arg: T): T
}
let myIdentity: GenericIdentityFn<number> = identity
```

> 泛型类+泛型约束

```
class GenericNumber<T> {
	zeroValue: T
	add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add  = function(x,y) {
	return x + y
}

let stringNumeric = nuew GenericNumber<string>()
stringNumeric.zeroValue = ''
stringNumeric.add = function (x, y) {
	return x + y
}

console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))
```

> 泛型约束

```
interface Lengthwise {
	length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
	console.log(arg.length)
	return arg
}
loggingIdentity({length: 1})
```

```
function getProperty<T, K extends keyof T>(obj: T, key: K) {
	return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4}

getProperty(x, 'a')
getProperty(x, 'm') // error
```

工厂函数的构造器

类类型：

```
function create<T>(c: { new(): T }): T {
	return new c()
}

class BeeKeeper {
	hasMask: boolean
}

class LionKeeper {
	nametag: string
}

class Animal {
	numLengs: number
}

class Bee extends Animal {
	keeper: BeeKeeper
}

class Lion extends Animal {
	keeper: LionKeeper
}

function createInstance<T extends Animal>(c: new() => T): T {
	return new c()
}
```

类型推断

- 基础
- 最佳通用类型
- 上下文类型

```
let x = [0, 1, null]

class Animal {
	numLegs: number
}

class Bee extends Animal {
	
}

class Lion extends Animal {
	
}

let zoo = [new Bee(), new Lion()]
```

上下文类型

```
class Animal {
	numLegs: number
}

class Bee extends Animal {
	
}

class Lion extends Animal {
	
}

function createZoo(): Animal[] {
	return [new Bee(), new Lion()]
}
```

> 交叉类型

```
// 多个类型
function extend<T, U>(first: T, second: U): T & U {
	let result = {} as T & U
	
	for (let id in first) {
		result[id] = first[id] as any
	}
	
	for (let id in second) {
		if (!result.hasOwnProperty(id)) {
			result[id] = second[id] as any
		}
	}
	
	return result
}

class Person {
	constructor(public name: string) {
		
	}
}

interface Loggable {
	log(): void
}

class ConsoleLogger implements Loggable {
	log() {
		// ..
	}
}

var jim = extend(new Person('jim'), new ConsoleLogger)
jim.name
jim.log()
// 拥有两个 的属性和方法的
```

> 联合类型

```
function padLeft(value: string, padding: any) {
	if (typeof padding === 'number') {
		return Array(padding + 1).join(' ') + value
	}
	if (typeof padding === 'string') {
		return padding + value
	}
	throw new Error ('xxx')
}
// 联合类型 string | number
padLeft('Hello world', '')
```

交叉类型:联合类型之和，联合类型之一

调用公有方法：

```
// 只能
interface Bird {
	fly()
	
	layEggs()
}

interface Fish {
	swin()
	
	layEggs()
}

function getSmallPet(): Fish | Bird {
	// ...
}

let pet = getSmallPet()
pet.layEggs()
pet.swim() // error
```

> 类型保护

```
if (isFish(pet)) {
	pet.swim()
} else {
	pet.fly()
}

// 类型断言 as
function isFish(pet: Fish | Bird): pet is Fish {
	return (pet as Fish).swim !== undefined
}

function isNumber(x: any): x is number {
	return typeof x === 'number'
}

function isString(x: any): x is string {
	return typeof x === 'string'
}
```

```
function padLeft(value: string, padding: string | number) {
	if (isNumber(padding)) {
		return Array(padding + 1).join(' ') + value
	}
	if (isString(padding)) {
		return paddiing + value
	}
	throw new Error(`dadaqianduan.cn`)
}
```

```
// is
// typeof
// instanceof

function getRandomPet(): Fish | Bird {
	return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet = getRandomPet()

if (pet instanceof Bird) {
	pet.fly()
}

if (pet instanceof Fish) {
	pet.swim()
}
```

> null类型+字符串字面量类型

```
// null undefined
function f(sn: string | null): string {
	return sn || 'default'
}
```

```
function broken(name: string | null): string {
	function postfix(epither: string) {
		return name!.charAt(0) + '. the' + epither
	}
	name = name || 'Bob'
	return postfix(name)
}
```

> 字符串字面量类型

```
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'

class UIElement {
	animate (dx: number, dy: number, easing: Easing) {
		if (easing === 'ease-in') {
			// ...
		} else if (easing === 'ease-out') {
			// ...
		} else {
			
		}
	}
}

let button = new UIElement(0, 0, 'ease-in')
button.animate(0, 0, null)
```

