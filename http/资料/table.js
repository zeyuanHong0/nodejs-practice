// 获取所有表格单元格
const cells = document.querySelectorAll("td");

// 为每个单元格添加点击事件监听器
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    // 清除其他单元格的高亮样式
    cells.forEach(c => c.classList.remove("highlight"));
    // 为当前点击的单元格添加高亮样式
    cell.classList.add("highlight");
  });
});