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
      { text: "首页", link: "/" },
      { text: "计算机基础", link: "/computerbase/" },
      { text: "javaScript 进阶", link: "/javascript/" },
      { text: "TypeScript", link: "/typescript/" },
    ],
    sidebar: {
      "/javascript/": ["", "one"],
      "/typescript/": ["", "type"],
    },
  },
};
