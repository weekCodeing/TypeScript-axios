> 点击勘误[issues](https://github.com/webVueBlog/TypeScript-axios/issues)，哪吒感谢大家的阅读

const 是对 let 的一个增强，它能阻止对一个变量再次赋值。

因为 TypeScript 是 JavaScript 的超集，所以它本身就支持 let 和 const。

## var 声明

在 ES5 的时代，我们都是通过 var 关键字定义JavaScript 变量：

```js
var a = 10
```

我们也可以在函数内部定义变量：

```js
function f() {
  var message = 'Hello World!'

  return message
}
```

并且我们也可以在其它函数内部访问相同的变量：

```js
function f() {
  var a = 10
  return function g() {
    var b = a + 1
    return b
  }
}

var g = f()
g() // returns 11
```

### 作用域规则

```js
function f(shouldInitialize) {
  if (shouldInitialize) {
    var x = 10
  }

  return x
}

f(true)  // returns '10'
f(false) // returns 'undefined'
```


## let 声明

## const 声明

## let vs const

## 解构

## 展开


