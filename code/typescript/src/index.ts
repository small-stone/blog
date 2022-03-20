let hello: string = 'hello typescript'
console.log('hello: ', hello);
// @ts-ignore
document.getElementById('app').innerHTML = hello

type LabelValue = {
  name: string;
  value?: number;
};

const lable: LabelValue = {
  name: "下拉框1",
  value: 1,
};