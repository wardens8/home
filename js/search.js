/* 
  搜索栏
*/

// 初始化搜索引擎切换
function initSearchEngines() {
  const engineBtns = document.querySelectorAll('.engine-btn')
  const searchInput = document.getElementById('search-input')
  const searchButton = document.getElementById('search-button')
  let currentEngine = 'sogou'

  // 搜索引擎配置
  const engines = {
    sogou: 'https://www.sogou.com/web?query=',
    baidu: 'https://www.baidu.com/s?wd=',
    bing: 'https://www.bing.com/search?q=',
    google: 'https://www.google.com/search?q=',
  }

  // 切换搜索引擎
  engineBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // 更新按钮样式
      engineBtns.forEach((b) => {
        b.classList.remove('active', 'bg-primary', 'text-white')
        b.classList.add('bg-gray-100', 'text-gray-700')
      })

      btn.classList.add('active', 'bg-primary', 'text-white')
      btn.classList.remove('bg-gray-100', 'text-gray-700')

      currentEngine = btn.dataset.engine
    })
  })

  // 执行搜索
  function performSearch() {
    const query = searchInput.value.trim()
    if (query) {
      window.open(engines[currentEngine] + encodeURIComponent(query), '_blank')
    }
  }

  // 搜索按钮点击事件
  searchButton.addEventListener('click', performSearch)

  // 回车键搜索
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch()
    }
  })
}
// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => initSearchEngines())
