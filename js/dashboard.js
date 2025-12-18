/* 
  名人名言 和 待办事项
*/

// 初始化便签
function initMemo() {
  const text = document.getElementById('text')
  const saveText = document.getElementById('saveText')
  const delText = document.getElementById('delText')
  // 初次进入时
  const memoText = window.localStorage.getItem('MEMOTEXT')
  text.value = memoText ? memoText : ''
  // 保存按钮
  saveText.addEventListener('click', () => {
    window.localStorage.setItem('MEMOTEXT', text.value)
  })
  // 删除按钮
  delText.addEventListener('click', () => {
    window.localStorage.removeItem('MEMOTEXT')
    text.value = ''
  })
}
// 初始化名人名言
function initMingyan() {
  const size = {
    1: '爱情',
    2: '道德',
    3: '青春',
    4: '愿望',
    5: '集体',
    6: '理想',
    7: '志向',
    8: '人才',
    9: '谦虚',
    10: '人格',
    11: '天才',
    12: '青年',
    13: '社会',
    14: '国家',
    15: '财富',
    16: '智慧',
    17: '修养',
    18: '工作',
    19: '妇女',
    20: '儿童',
    21: '思想',
    22: '理智',
    23: '学习',
    24: '科学',
    25: '信仰',
    26: '诚信',
    27: '读书',
    28: '成败',
    29: '奉献',
    30: '劳动',
    31: '节约',
    32: '教育',
    33: '企业',
    34: '事业',
    35: '时间',
    36: '勤奋',
    37: '民族',
    38: '真理',
    39: '友谊',
    40: '自由',
    41: '心理',
    42: '心灵',
    43: '人生',
    44: '幸福',
    45: '团结',
  }

  const p1 = document.getElementById('p1')
  const p2 = document.getElementById('p2')

  function GET(url, callback) {
    // 创建 XMLHttpRequest 实例
    const xhr = new XMLHttpRequest()

    // 配置请求：GET 方法 + API 地址 + 异步（true）
    xhr.open('GET', url, true)

    // 监听请求状态变化
    xhr.onreadystatechange = function () {
      // readyState = 4：请求完成；status = 200：请求成功
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr)
      } else if (xhr.readyState === 4) {
        // 请求完成但失败
        console.error('请求失败，状态码：', xhr.status)
      }
    }

    // 监听网络错误
    xhr.onerror = function () {
      console.error('网络错误，无法连接服务器')
    }

    // 发送请求
    xhr.send()
  }

  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')
  window.localStorage.setItem('newDay', day)

  let oldDay = window.localStorage.oldDay
  let newDay = window.localStorage.newDay

  if (newDay !== oldDay) {
    console.log('今天还未调用过，开始调用~')

    //  英文api：https://api.quotable.io/random
    //  中文api：https://api.xygeng.cn/one
    GET('https://v2.alapi.cn/api/mingyan?token=LwExDtUWhF3rH5ib', (xhr) => {
      // // 解析 JSON 数据（需手动 JSON.parse）
      const data = JSON.parse(xhr.responseText)
      // console.log('XMLHttpRequest 数据：', data)
      if (data.success === true) {
        p1.innerHTML = `【${size[data.data.typeid]}分类】${data.data.content}`
        p2.innerHTML = `——${data.data.author}`

        window.localStorage.setItem(
          'content',
          JSON.stringify({
            typeid: data.data.typeid,
            content: data.data.content,
            author: data.data.author,
            nocontent: '',
          })
        )
        console.log('数据正常')
      } else {
        p1.innerHTML = `${data.message}`

        window.localStorage.setItem(
          'content',
          JSON.stringify({
            typeid: '',
            content: '',
            author: '',
            nocontent: data.message,
          })
        )
        console.log('数据异常')
      }
    })
    window.localStorage.setItem('oldDay', newDay)
  } else if (newDay === oldDay) {
    console.log('今天已经调用过了，不在调用了~')
    const con = JSON.parse(window.localStorage.getItem('content'))
    // console.log(con)

    if (con.typeid !== '') {
      p1.innerHTML = `【${size[con.typeid]}分类】${con.content}`
      p2.innerHTML = `——${con.author}`
    } else {
      p1.innerHTML = `${con.nocontent}`
    }
  }
}
// 初始化待办事项
function initTodoList() {
  const todoList = document.getElementById('todo-list')
  const newTodoInput = document.getElementById('new-todo')
  const addTodoButton = document.getElementById('add-todo')
  const todoCount = document.getElementById('todo-count')
  const STORAGE_KEY = 'dashboard_todos'

  // 从本地存储加载待办事项
  function loadTodos() {
    const savedTodos = localStorage.getItem(STORAGE_KEY)
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: 1, text: '完成项目报告', completed: true },
          { id: 2, text: '回复邮件', completed: true },
          { id: 3, text: '准备会议材料', completed: false },
          { id: 4, text: '购买生活用品', completed: false },
          { id: 5, text: '锻炼身体', completed: false },
        ]
  }

  // 保存待办事项到本地存储
  function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }

  // 渲染所有待办事项
  function renderTodos(todos) {
    // 清空列表
    todoList.innerHTML = ''

    // 渲染每个待办事项
    todos.forEach((todo) => {
      const todoItem = document.createElement('div')
      todoItem.className =
        'todo-item flex items-center justify-between gap-2 p-2 hover:bg-gray-50 rounded'
      todoItem.innerHTML = `
        <label for="input-${todo.id}" class="flex items-center gap-2">
          <input type="checkbox" id="input-${todo.id}" ${
        todo.completed ? 'checked' : ''
      } class="w-4 h-4 rounded text-primary focus:ring-primary" />
          <span class="text-sm  ${
            todo.completed ? 'line-through text-gray-500' : ''
          }">${todo.text}</span>
        </label>
        <button class="text-xs text-gray-400 hover:text-red-500 p-1">删除</button>
        `

      // 添加删除功能
      const deleteButton = todoItem.querySelector('button')
      deleteButton.addEventListener('click', () => {
        const updatedTodos = todos.filter((t) => t.id !== todo.id)
        saveTodos(updatedTodos)
        renderTodos(updatedTodos)
        updateTodoCount(updatedTodos)
      })

      // 添加完成功能
      const checkbox = todoItem.querySelector('input[type="checkbox"]')
      checkbox.addEventListener('change', () => {
        const updatedTodos = todos.map((t) =>
          t.id === todo.id ? { ...t, completed: checkbox.checked } : t
        )
        saveTodos(updatedTodos)
        renderTodos(updatedTodos)
        updateTodoCount(updatedTodos)
      })

      todoList.appendChild(todoItem)
    })
  }

  // 更新待办事项计数
  function updateTodoCount(todos) {
    const total = todos.length
    const completed = todos.filter((todo) => todo.completed).length
    todoCount.textContent = `${completed}/${total}`
    // 更新进度条
    const progressName = document.getElementById('progress-name')
    const progress = document.getElementById('progress')
    let progressNum = ((completed / total) * 100).toFixed(0) + '%'
    progressName.textContent = progressNum
    progress.style.setProperty('width', progressNum)
  }

  // 添加新待办事项
  function addNewTodo(text) {
    if (!text.trim()) return

    const todos = loadTodos()
    const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1

    const newTodo = {
      id: newId,
      text: text.trim(),
      completed: false,
    }

    const updatedTodos = [...todos, newTodo]
    saveTodos(updatedTodos)
    renderTodos(updatedTodos)
    updateTodoCount(updatedTodos)

    newTodoInput.value = ''
  }

  // 按钮添加待办事项
  addTodoButton.addEventListener('click', () => {
    addNewTodo(newTodoInput.value)
  })

  // 回车添加待办事项
  newTodoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addNewTodo(newTodoInput.value)
    }
  })

  // 初始化加载待办事项
  const initialTodos = loadTodos()
  renderTodos(initialTodos)
  updateTodoCount(initialTodos)
}
// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initMemo()
  initMingyan()
  initTodoList()
})
