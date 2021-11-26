/**
 * 数组解构转换成树解构
 * @param items 未匹配的节点数组
 * @param parentId 父节点
 * @returns 
 */
export const ArrayToTree = (items: any[], parentId = -1) => {
  // 已匹配成功父节点的数组
  const childNode = items.filter((item) => item.parentId === parentId);
  // 未匹配成功的节点数组
  const unChildNode = items.filter((item) => item.parentId !== parentId);

  const result = childNode.map(current => {
    // 递归匹配子节点
    const children = ArrayToTree(unChildNode, current.id);
    current.children = children;
    return current;
  })
  // 从小到大排序
  const resultSort = result.sort((a, b) => a.sort - b.sort);
  return resultSort;
}
/**
 * 路径转驼峰格式
 * @param viewpath 转换路径
 * 
 * 例如 system/dashboard,hello_world,dashboard-legend
 * 转换成 systemDashboard,helloWorld,dashboardLegend
 */
export function toHump(viewpath: string) {
  const reg = /[\-\_\/](\w)/g; // 匹配字符 -n|_n|/n
  return viewpath.replace(reg, (_all, letter: string) => {
    return letter.toUpperCase();
  }).replace('view', '')

}