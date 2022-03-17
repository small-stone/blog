let hello: string = 'hello typescript'
console.log('hello: ', hello);
// @ts-ignore
document.getElementById('app').innerHTML = hello

interface LabelValue {
  name: string;
  value?: number;
  [propName: string]: string | number | undefined;
}

const lable: LabelValue = {
  name: "下拉框1",
  value: 1,
};