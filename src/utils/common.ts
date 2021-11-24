/**
 * 复制文本
 * @param text 复制内容
 */
export function copyText(text: string) {
  return new Promise((resolve, reject) => {
    const copyInput = document.createElement('input'); // 创建输入框
    copyInput.value = text;
    document.body.appendChild(copyInput); // 添加input输入框元素
    copyInput.select(); // 选择文本
    const isSuccess = document.execCommand('copy'); // 命令复制
    copyInput.remove(); // 移除元素
    isSuccess ? resolve(true) : reject(false)
  })
}
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