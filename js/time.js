/* 
  日期、时间、问候语和天气
*/

// 初始化日期、时间、问候语
function initDateTime() {
  const dateElement = document.getElementById('date')
  const timeElement = document.getElementById('time')
  const greetingElement = document.getElementById('greeting')
  const day1 = document.getElementById('day1')
  const day2 = document.getElementById('day2')
  const day3 = document.getElementById('day3')

  // 更新日期
  function updateDate() {
    const today = new Date()
    // 格式化当天日期格式（可选）
    const threeDay = [today]
    const formattedDate = threeDay.map((date) => {
      const year = String(date.getFullYear())
      const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从0开始，需+1
      const day = String(date.getDate()).padStart(2, '0')
      const weekdays = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ]
      const weekday = weekdays[date.getDay()]
      return `${year}年${month}月${day}日 ${weekday}`
    })

    // 生成连续三天的日期数组
    const threeDays = []
    for (let i = 0; i < 3; i++) {
      // 克隆当前日期（避免修改原日期对象）
      const date = new Date(today)
      // 增加i天（i为0时是当天，1是明天，2是后天）
      date.setDate(today.getDate() + i)
      threeDays.push(date)
    }

    // 格式化三天日期格式（可选）
    const formattedDates = threeDays.map((date) => {
      const year = String(date.getFullYear())
      const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从0开始，需+1
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}年${month}月${day}日`
    })

    dateElement.textContent = formattedDate[0]
    day1.textContent = `今天（${formattedDates[0]}）`
    day2.textContent = `明天（${formattedDates[1]}）`
    day3.textContent = `后天（${formattedDates[2]}）`
  }
  // 更新时间
  function updateTime() {
    const today = new Date()
    // 格式化当天时间格式（可选）
    const threeDay = [today]
    const formattedTime = threeDay.map((date) => {
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')
      return `⏱️ ${hours}:${minutes}:${seconds}`
    })

    timeElement.textContent = formattedTime[0]
  }
  // 更新问候语
  function updateGreeting() {
    const today = new Date()
    const hour = today.getHours()
    const greet = ['早上好！', '上午好！', '中午好！', '下午好！', '晚上好！']
    let greeting = greet[0]
    if (hour >= 9 && hour < 11) {
      greeting = greet[1]
    } else if (hour >= 11 && hour < 13) {
      greeting = greet[2]
    } else if (hour >= 13 && hour < 18) {
      greeting = greet[3]
    } else if (hour >= 18) {
      greeting = greet[4]
    }
    greetingElement.textContent = `${greeting}`
  }

  // 初始更新
  updateDate()
  updateTime()
  updateGreeting()
  // 每秒更新一次
  setInterval(updateTime, 1000)
}
// 初始化天气
function initWeather() {
  const weather = document.getElementById('weather')
  const weather1 = document.getElementById('weather1')
  const weather2 = document.getElementById('weather2')
  const weather3 = document.getElementById('weather3')
  let day1_weather
  let day2_weather
  let day3_weather

  // get获取天气
  function getWeather() {
    const xhr = new XMLHttpRequest()
    const apiUrl =
      'https://api.seniverse.com/v3/weather/daily.json?key=SCYrvkytJze9qyzOh&location=rizhao&language=zh-Hans&unit=c'

    // 配置请求（方法、地址、是否异步）
    xhr.open('GET', apiUrl, true)

    // 设置响应类型（可选，如 'json'、'text'）
    xhr.responseType = 'json'

    // 监听请求完成
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        // 请求成功
        // console.log(xhr.response)
        let daily = xhr.response.results[0].daily

        ;(day1_weather = `${daily[0].low}℃~${daily[0].high}℃ ${daily[0].text_day} / ${daily[0].text_night}`),
          (day2_weather = `${daily[1].low}℃~${daily[1].high}℃ ${daily[1].text_day} / ${daily[1].text_night}`),
          (day3_weather = `${daily[2].low}℃~${daily[2].high}℃ ${daily[2].text_day} / ${daily[2].text_night}`)

        weather.innerHTML = `🌞 <a href="https://weatherol.cn/index.html?cityid1=371100&cityid=101121501" target="_blank" class="underline hover:text-blue-500">日照</a>：${day1_weather}`
        weather1.innerHTML = day1_weather
        weather2.innerHTML = day2_weather
        weather3.innerHTML = day3_weather
      } else {
        // 请求失败
        console.error('请求失败，状态码：', xhr.status)
      }
    }

    // 监听网络错误
    xhr.onerror = function () {
      console.error('网络错误，无法连接到服务器')
    }

    // 发送请求
    xhr.send()
  }

  getWeather()
}
// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initDateTime()
  initWeather()
})
