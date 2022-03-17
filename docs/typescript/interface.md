# 接口

接口是 ts 中很重要的一个概念，我理解最简单的话说接口就是类型的变量名。如果把所有的类型都放在类型注解中，一是无法复用，二是代码可读性也会差，因此接口对项目的可维护性还是很重要的。

## 语法

interface + Name，按照惯例，首字母大写。很像对象字面量的语法，规定属性名和属性的类型。

```ts
interface LabelValue {
  name: string;
  value: number;
}

const lable: LabelValue = {
  name: "下拉框1",
  value: 1,
};
```

属性的顺序如果不同，不会被报错，只要需要的属性存在即可。

## 可选属性

如果对象中有些属性在某些条件下才存在，可以使用可选属性的语法来定义

```ts
interface LabelValue {
  name?: string;
  value?: number;
}

const lable: LabelValue = {
  name: "下拉框1",
  value: 1,
};
```

## 只读属性

与 `const` 类似，用于接口中无法修改的属性。

```ts
interface LabelValue {
  readonly name: string;
  readonly value: number;
}

const lable: LabelValue = {
  name: "下拉框1",
  value: 1,
};

lable.value = 2; // Error!
```

ts 中还有一个 `ReadonlyArray<T>` 的类型，看字面意思就知道是只读的数组，创建后无法修改。（有点像枚举）

## 任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```ts
interface LabelValue {
  name: string;
  value: number;
  [propName: string]: any;
}
```

需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

```ts
interface LabelValue {
  name: string;
  value?: number;
  [propName: string]: string;
}

const lable: LabelValue = {
  name: "下拉框1",
  value: 1,
};

// TS2411: Property 'value' of type 'number | undefined' is not assignable to 'string' index type 'string'.
```

这里编辑器就会报错，因为 value 属性 number 不是 string 类型的子集，要解决可以这样：

```ts
interface LabelValue {
  name: string;
  value?: number;
  [propName: string]: string | number | undefined;
}

const lable: LabelValue = {
  name: "下拉框1",
  value: 1,
};
```

确保可选属性和确定属性是任意属性的子集即可。
