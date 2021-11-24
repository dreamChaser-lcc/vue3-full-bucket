/**
 * 下面代码复制阿里巴巴矢量图项目控制台
 * 可以爬取配置
 */
const fetchConfig = () => {
  // var iconconfig = []
  // document
  //   ?.querySelector(".project-iconlist")
  //   ?.querySelectorAll("li")
  //   ?.forEach((icon) => {
  //     const name = icon?.querySelector(".icon-name").innerText;
  //     const code = icon?.querySelector(".icon-code.icon-code-show").innerText;
  //     iconconfig.push({ title: name, code: code })
  //     console.log(JSON.parse(JSON.stringify(iconconfig)));
  //   });
}

export const iconConfig = [
  {
    title: "进货单",
    code: "icon-lanshou"
  },
  {
    title: "02包裹、发货",
    code: "icon-send"
  },
  {
    title: "签收",
    code: "icon-qianshou"
  },
  {
    title: "首页-发货",
    code: "icon-yunshu"
  },
  {
    title: "派送提醒-物流详情",
    code: "icon-paisong"
  }
]