# 类型转换

先看一下这几个运行结果

```js
let a = [] + {};
let b = {} + [];
let c = {} + {};
let d = [] + [];
```

结果是：

```js
a = "[object Object]";
b = 0;
c = "[object Object][object Object]";
d = "";
```

是不是很奇怪？因为 JS 是弱类型语言，所以类型转换发生非常频繁，除了 == 之外，加减乘除大于小于，也都会涉及类型转换。幸好的是，实际上大部分类型转换规则是非常简单的，如下表所示：

![](https://static001.geekbang.org/resource/image/71/20/71bafbd2404dc3ffa5ccf5d0ba077720.jpg)

## StringToNumber

字符串到数字的类型转换，存在一个语法结构，类型转换支持十进制、二进制、八进制和十六进制，比如：

- 30
- 0b111
- 0o13
- 0xFF

此外，JavaScript 支持的字符串语法还包括正负号科学计数法，可以使用大写或者小写的 e 来表示：

- 1e3
- -1e-2

parseInt 和 parseFloat 并不使用这个转换，所以支持的语法跟这里不尽相同。

**多数情况下，Number 是比 parseInt 和 parseFloat 更好的选择。**

## NumberToString

大部分情况都与我们的直觉相同，当 Number 绝对值较大或者较小时，字符串表示则是使用科学计数法表示的。

```js
var a = 99999999999999999999999999999;
a.toString(); // "1e+29"
```

## 装箱转换

所谓装箱转换，正是把基本类型转换为对应的对象，它是类型转换中一种相当重要的种类。每一种基本类型 Number、String、Boolean、Symbol 在对象中都有对应的类

## 拆箱转换 ToPrimitive

ToPrimitive 函数是对象类型到基本类型的转换（即，拆箱转换）对象到 String 和 Number 的转换都遵循“先拆箱再转换”的规则。通过拆箱转换，把对象变成基本类型，再从基本类型转换为对应的 String 或者 Number。

拆箱转换会尝试调用 valueOf 和 toString 来获得拆箱后的基本类型。如果 valueOf 和 toString 都不存在，或者没有返回基本类型，则会产生类型错误 TypeError。

```js
var o = {
  valueOf: () => {
    console.log("valueOf");
    return {};
  },
  toString: () => {
    console.log("toString");
    return {};
  },
};

o * 2;
// valueOf
// toString
// TypeError
```

到 String 的拆箱转换会优先调用 toString。我们把刚才的运算从 o\*2 换成 String(o)，那么你会看到调用顺序就变了。

```js
var o = {
  valueOf: () => {
    console.log("valueOf");
    return {};
  },
  toString: () => {
    console.log("toString");
    return {};
  },
};

String(o);
// toString
// valueOf
// TypeError
```

在 ES6 之后，还允许对象通过显式指定 @@toPrimitive Symbol 来覆盖原有的行为。

```js
const object1 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 42;
    }
    return null;
  },
};

console.log(+object1);
// expected output: 42
```
