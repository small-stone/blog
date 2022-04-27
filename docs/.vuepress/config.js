module.exports = {
  title: "小石头的博客",
  description: "兰生幽谷，不以无人而不芳",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    nav: [
      { text: "计算机基础", link: "/computerbase/" },
      { text: "数据结构和算法", link: "/algorithm/" },
      { text: "javaScript", link: "/javascript/" },
      { text: "TypeScript", link: "/typescript/" },
    ],
    sidebar: {
      "/computerbase/": ["", "one", "cpu", "data", "net", "tcp", "http"],
      "/javascript/": ["", "func", "toPrimitive"],
      "/typescript/": ["", "type", "interface"],
    },
  },
};
