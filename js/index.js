/* 
  主页js：侧边栏和返回顶部按钮
*/

// 侧边栏切换功能
function initAside() {
  // 获取所有侧边栏项和内容区域
  const sidebarItems = document.querySelectorAll('.sidebar-item')
  const contentSections = document.querySelectorAll('.content-section')

  // 为每个侧边栏项添加点击事件
  sidebarItems.forEach((item) => {
    item.addEventListener('click', function () {
      // 移除所有激活状态
      sidebarItems.forEach((i) => i.classList.remove('active'))
      contentSections.forEach((section) => section.classList.remove('active'))

      // 为当前点击项添加激活状态
      this.classList.add('active')

      // 显示对应的内容区域
      const targetId = this.getAttribute('data-target')
      const targetSection = document.getElementById(targetId)
      if (targetSection) {
        targetSection.classList.add('active')
      }

      // 滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  })
}
// 初始化返回顶部按钮
function initTopButton() {
  // 获取返回顶部按钮元素
  const backToTopButton = document.getElementById('backToTop')

  // 监听滚动事件
  window.addEventListener('scroll', () => {
    // 当滚动距离超过300px时显示按钮，否则隐藏
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('opacity-0', 'invisible')
      backToTopButton.classList.add('opacity-100', 'visible')
    } else {
      backToTopButton.classList.remove('opacity-100', 'visible')
      backToTopButton.classList.add('opacity-0', 'invisible')
    }
  })

  // 点击按钮返回顶部
  backToTopButton.addEventListener('click', () => {
    // 使用平滑滚动效果
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
}
// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initAside()
  initTopButton()
})
