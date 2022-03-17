# 基本类型

先看一下 es6 数据类型 typescript 数据类型的不同

![es6type.png](https://xg3.jiashumao.net/2022/03/12/g2CUO7iR.png)

typescript 数据类型

![typescript_type.png](https://xg3.jiashumao.net/2022/03/12/0YPFSQKJ.png)

TS 在 js 的基础之上增加了一些类型，下面我们看一下这些新的类型有什么用。

## 原始类型

对于 js 已有的原始类型`string`，`number` 和 `boolean`可以直接在类型注解中书写。

```ts
let word: string = "hello,world";
let num: number = 1;
let flag: boolean = true;
```

## 数组

数组有两种定义类型的方式

1. 元素类型 + []

```ts
const arr: number[] = [1, 2, 3];
```

2. 泛型 array + <元素类型>

```ts
const arr: Array<number> = [1, 2, 3];
```

## 元组

元组有点像数组的一种形式，用于表示**确定元素类型和数量**的数组

```ts
const arr: [string, number] = ["1", 2];
```

如果越界访问时会用联合类型代替

```ts
arr[3] = "3"; // string number 都可以
arr[4] = false; // Error，只能是 string 或者 number
```

## 枚举

枚举我个人理解就是一系列常量的集合，比如常见的一个场景是账户的权限，如果服务端用 1，2，3 等数字来表示，可读性就比较差，所以前端用枚举做一次映射就会提升可维护性。

```ts
enum Auth {
  admin,
  member,
}
```

默认情况下，从 0 开始为元素编号。也可以手动的指定成员的数值。

```ts
enum Auth {
  admin = 1,
  member,
}
```

### 常数枚举

常数枚举是使用 const enum 定义的枚举类型，它会在编译阶段被删除，并且不能包含计算成员。

```ts
const enum Auth {
  admin,
  member,
}
```

### 外部枚举

外部枚举（Ambient Enums）是使用 declare enum 定义的枚举类型，只会用于编译时的检查，编译结果中会被删除。

```ts
declare enum Auth {
  admin,
  member,
}
```

也可以同时使用 `declare` 和 `const`

```ts
declare const enum Auth {
  admin,
  member,
}
```

## Any

很多人戏称自己的 ts 是 anyscript，就是因为 any 的意思是不做检查，可能最大的场景是为了逃过编辑器的报错提示。

## Void

void 类型像是与 any 类型相反，它表示没有任何类型。 最常用的场景是用于表示一个函数没有返回值

```ts
const fn = (): viod{
  // do something
}
```

## 类型断言

当 ts 类型推断不正确的时候，可以使用类型断言来告诉 ts，我知道这个类型是什么。它没有运行时的影响，只是在编译阶段起作用。有两种写法：

1. 尖括号

```ts
let str: any = "hello ts";
let leng: number = (<string>str).length;
```

2. as

```ts
let str: any = "hello ts";
let leng: number = (str as string).length;
```

**需要注意的是，在 tsx 中不能用尖括号，以免混淆**
