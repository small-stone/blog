# 前言

谈起 Typescript，大部分前端都能说出一些好处，比如避免 js 的弱类型的缺点，因为 ts 可以做类型检查、编码阶段发现 bug，但弱类型语言真的有这么多问题，需要我们用另外的 ts 来解决吗？这可能大部分人都答不上来了。要搞懂这个问题，首先需要明白两个点。

## 强类型和是弱类型

关于强类型语言，一个比较通俗的说法是是：**不允许改变变量的数据类型，除非进行强制类型转换**。比如这样一段 java 代码

```java
class C {
  public static void main(String[] args){
    int x = 1;
    boolean y = true;
    x = y;
    System.our.println(x);
  }
}
```

这时候程序就会报错，不能将布尔值转换为整型 ![1646748565596.png](https://xg3.jiashumao.net/2022/03/08/B0Vq3ECz.png)

我们把代码修改一下

```java
class C {
  public static void main(String[] args){
    int x = 1;
    char z = 'a'
    x = z
    System.our.println(x);
  }
}
```

输入 `97`，这是因为 java 进行强制类型转换，字符 a 的 ASCII 编码是 97。

相对应的弱类型语言是指**变量可以被赋予不同的数据类型**，比如 js 的代码：

```js
let a = 1;
let y = true;
x = y;
```

```js
let a = 1;
let z = "z";
x = z;
```

这两段代码都不会报错，可以看出弱类型更灵活，但是相应的也容易产生 bug。

## 静态类型语言和动态类型语言

静态类型语言就是指**在编译阶段**确定所有变量的类型。动态类型语言是指**在执行阶段**确定所有变量的类型。先看两段代码

```js
// javasrcript
class C {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function add(a, b) {
  return a.x + a.y + b.x + b.y;
}
```

单独看这一段代码我们完全无法知道 x 和 y 的变量类型，有可能是 number，也有可能是 string。而 C++ 的代码则很明显可以看出来变量的类型。

```cpp
// C++
class C {
  public:
    int x;
    int y;
}

int add(C a, C b){
  return a.x + a.y + b.x + b.y;
}
```

## 结论

这样来看，动态弱类型语言就一无是处吗？其实任何的语言特性都有两面性，js 被这样设计是有当初设计者的理由的，只不过随着时代的发展，最初的动态加弱类型的弊端大于获得的收益，而且团队配合越来越重要，因此 Typescript 的出现适时的解决了这些问题，而且经过几年的发展也越来越丰富和完善，因此 Typescript 渐渐称为前端必须要学会的技能之一了。

> Typescript 是 ECMAScript 推出静态类型检查之前的最佳方案
