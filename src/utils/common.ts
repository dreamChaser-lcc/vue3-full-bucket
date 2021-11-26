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
