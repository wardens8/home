/* 
  生成全部网站卡片
*/

// 网站数据 - 全部
// 仪表盘 - 快速访问网站
const websiteQuickAccess = {
  first: [
    { name: '哔哩哔哩', url: 'https://www.bilibili.com' },
    { name: '抖音', url: 'https://www.douyin.com' },
    { name: '豆包', url: 'https://www.doubao.com' },
    { name: '搜狗翻译', url: 'https://fanyi.sogou.com' },
    { name: 'QQ邮箱', url: 'https://mail.qq.com' },
    { name: 'GitHub', url: 'https://github.com/' },
    {
      name: '粉笔题库',
      url: 'https://www.fenbi.com/spa/tiku/guide/catalog/xingce?prefix=xingce',
    },
    { name: '公考雷达', url: 'https://www.gongkaoleida.com/' },
  ],
}
// 学习资源
const websiteStudyResources = {
  first: [
    {
      name: '粉笔题库',
      url: 'https://www.fenbi.com/spa/tiku/guide/catalog/xingce?prefix=xingce',
    },
    { name: '党的知识学习词典', url: 'https://www.12371.cn/special/cidian/' },
    {
      name: '报纸大全',
      url: 'https://www.dtdjzx.gov.cn/szlib/newspaper/index.jhtml',
    },
    { name: '微信读书', url: 'https://weread.qq.com/' },
    { name: '国家法规数据库', url: 'https://flk.npc.gov.cn/' },
    { name: '食品伙伴网', url: 'http://down.foodmate.net/' },
    { name: '标准信息服务平台', url: 'https://hbba.sacinfo.org.cn/' },
    { name: '中小学智慧教育平台', url: 'https://basic.smartedu.cn/' },
    { name: '石墨文档', url: 'https://shimo.im/' },
    { name: '道客巴巴', url: 'https://www.doc88.com/' },
    { name: '古诗文网', url: 'https://www.gushiwen.cn/' },

    { name: '秘塔写作猫', url: 'https://xiezuocat.com/?s=itab' },
    { name: '第一试卷网', url: 'https://www.shijuan1.com/#google_vignette' },
    {
      name: '刘文超Vin',
      url: 'https://wenchaoedu.lanzouw.com/b01bej7ud?pwd=f687',
    },
    {
      name: '阳焱夸克网盘',
      url: 'https://pan.quark.cn/s/c8e84c2dc377#/list/share/0ac5ffdefbc94760a862f0cd671eb35c-阳焱B站资料分享/',
    },
  ],
  // 课程
  kecheng: [
    { name: '中国大学MOOC', url: '' },
    { name: '慕课网', url: '' },
    { name: '学堂在线', url: '' },
    { name: '爱课程', url: '' },
    { name: '网易公开课', url: '' },
    { name: '腾讯课堂', url: '' },
    { name: '潭州课堂', url: '' },
    { name: '国家精品课程供销服务信息平台', url: '' },
  ],
  // 英语类
  yingyu: [
    { name: '百词斩', url: '' },
    { name: '英语自学网', url: '' },
    { name: '七彩英语', url: '' },
    { name: '英语阅读', url: '' },
    { name: '沪江英语网', url: '' },
    { name: '英语流利说', url: '' },
    { name: '英文写作网', url: '' },
  ],
  // 考研考博类
  kaoyan: [
    { name: '中国研究生招生信息网', url: 'http://yz.chsi.com.cn/' },
    { name: '中国考研网', url: 'http://www.chinakaoyan.com/' },
    { name: '中国教育在线', url: '' },
    { name: '考研论坛', url: '' },
    { name: '考研帮', url: '' },
    { name: '网易教育', url: '' },
    { name: '小木虫论坛', url: '' },
    { name: '向博学习网', url: '' },
    { name: '科学网', url: '' },
  ],
  // 论文类
  lunwen: [
    { name: '学术堂', url: '' },
    { name: '论文网', url: '' },
    { name: '中国知网', url: 'http://www.cnki.net/' },
    { name: '百度学术', url: '' },
    { name: '中国免费论文网', url: '' },
    { name: '地方志', url: '' },
    { name: '万方数据知识服务平台', url: '' },
    { name: '中华人民共和国国家统计局', url: 'http://www.stats.gov.cn/' },
  ],
}
// 就业招聘
const websiteJobInfo = {
  first: [
    { name: '公考雷达', url: 'https://www.gongkaoleida.com/' },
    { name: '事业单位考试招聘网', url: 'https://www.shiyebian.net/' },
    { name: 'NTCE考试网', url: 'https://ntce.neea.edu.cn' },
    { name: '山东人事考试信息网', url: 'https://hrss.shandong.gov.cn/rsks/' },
    { name: '山东高校毕业生就业信息网', url: 'https://www.sdgxbys.cn/' },
    { name: '山东省教育招生考试院', url: 'http://www.sdzk.cn/' },
    { name: '中国人事考试网', url: 'http://www.cpta.com.cn' },
    { name: 'BOSS直聘', url: 'https://www.zhipin.com' },
    { name: '智联招聘', url: 'https://www.zhaopin.com' },
    { name: '齐鲁人才网', url: 'https://www.qlrc.com' },
    { name: '前程无忧', url: 'https://www.51job.com' },
    { name: '猎聘网', url: 'https://www.liepin.com' },
    { name: '中国公共招聘网', url: 'http://job.mohrss.gov.cn/' },
    { name: '中华英才网', url: 'https://www.chinahr.com' },
  ],
  jianli: [
    { name: '个人简历网', url: 'https://www.gerenjianli.com/' },
    {
      name: '简历模版_站长素材',
      url: 'https://sc.chinaz.com/jianli/shangye.html',
    },
    { name: '简历模板_90设计', url: 'https://90sheji.com/tupian/jianli.html' },
    { name: '简历模板_花瓣', url: 'https://huaban.com/search?q=简历' },
  ],
}
// 实用工具
const websiteTools = {
  first: [
    { name: '锤子在线工具网', url: 'https://www.toolhelper.cn/' },
    { name: '站长工具', url: 'https://tool.chinaz.com' },
    { name: '在线工具', url: 'https://tool.lu' },
    { name: '在线OCR', url: 'https://ocr.wdku.net/' },
    { name: '在线PS', url: 'https://ps.gaoding.com/' },
    { name: '思维导图', url: 'https://www.processon.com/' },
    { name: '草料二维码', url: 'https://cli.im/' },
    { name: '临时邮箱', url: 'https://temp-mail.org/zh/' },
    { name: '在线计算器', url: 'https://www.calculator.net/' },
    { name: '正则工具', url: 'https://regexr.com' },
    { name: 'JSON格式化', url: 'https://www.json.cn/' },
    { name: '格式转换', url: 'https://convertio.co/zh/' },
    { name: '图片压缩', url: 'https://tinypng.com' },
    { name: '颜色拾取器', url: 'https://htmlcolorcodes.com/zh/' },
    { name: '配色工具', url: 'https://colorhunt.co' },
    { name: '函数图像', url: 'https://zuotu.91maths.com/' },
    { name: '特殊字符', url: 'https://copypastecharacter.com' },
    { name: '千帆搜索', url: 'https://www.niceso.net/' },
    { name: '猫狸云搜索', url: 'https://www.maoliyun.com/' },
    {
      name: '趣盘搜-夸克网盘资源搜索',
      url: 'https://pan.funletu.com/',
    },
    { name: 'KK网盘资源', url: 'https://www.kkpans.com/' },
    {
      name: 'KK小站综合性的夸克网盘资源共享网站',
      url: 'https://kkxz.vip/',
    },
    {
      name: '刘明野的工具箱',
      url: 'https://tools.liumingye.cn/#google_vignette',
    },
    {
      name: '软件安装目录',
      url: 'https://mp.weixin.qq.com/s/5kFiW1NMz8x7PoC7RHVMAA',
    },
    { name: '吾爱破解', url: 'https://www.52pojie.cn/' },
    { name: '泼辣修图', url: 'https://www.polaxiong.com/' },
    { name: '在线抠图软件', url: 'https://www.remove.bg/zh' },
    { name: '吾爱破解', url: 'https://www.52pojie.cn/' },

    { name: 'Smallpdf.com', url: 'https://smallpdf.com/cn' },
    { name: 'PDF24', url: 'https://tools.pdf24.org/zh/all-tools' },
    { name: 'iLovePDF', url: 'https://www.ilovepdf.com/zh-cn' },
  ],
  AI: [
    { name: '豆包', url: 'https://www.doubao.com/chat/' },
    { name: 'deepseek', url: 'https://chat.deepseek.com/' },
    { name: '文心一言', url: 'https://yiyan.baidu.com/?utm_source=uisdc' },
    { name: 'chatGPT', url: 'https://chat.openai.com/' },
    { name: 'AiPPT', url: 'https://www.aippt.cn/' },
    { name: 'Midjourney', url: 'https://www.midjourney.com/' },
    { name: 'Stable Diffusion', url: 'https://www.uisdc.com/stable-diffusion' },
    { name: '优设AI导航', url: 'https://hao.uisdc.com/ai/' },
  ],
  qita: [
    // 办公技能类
    {
      name: 'Desmos | 图形计算器',
      url: 'https://www.desmos.com/calculator/',
    },
    {
      name: '在线fooplot数学函数绘图器工具',
      url: 'http://tools.jb51.net/aideddesign/fooplot/',
    },
    {
      name: '函数图像|在线函数图像生成',
      url: 'https://zuotu.91maths.com/',
    },
    { name: 'GeoGebra 免费数学软件', url: 'https://www.geogebra.org/' },
    { name: '第一试卷网', url: 'https://www.shijuan1.com/' },
    { name: '深圳学校网', url: 'https://www.szxuexiao.com/' },
    { name: '小学试卷网', url: 'https://appsj.szxuexiao.com/' },
    {
      name: 'Net Web（国内登录谷歌的网站，不需要魔法）',
      url: 'https://hideip.network/',
    },
    { name: '标准下载网', url: 'http://www.bzmfxz.com/' },
    { name: 'word联盟', url: '' },
    { name: 'PS联盟', url: '' },
    { name: '瑞普PPT论坛', url: '' },
    { name: '三节课', url: '' },
    { name: '手工课', url: '' },
    { name: '跟我学', url: '' },
    { name: 'Excelhome', url: '' },
  ],
}
// 新闻资讯
const websiteNews = {
  news1: [
    { name: '共产党员网', url: 'https://www.12371.cn/' },
    { name: '求是网', url: 'https://www.qstheory.cn/' },
    { name: '人民网', url: 'http://www.people.com.cn/' },
    { name: '人民日报', url: 'https://paper.people.com.cn/' },
    { name: '学习强国', url: 'https://www.xuexi.cn/' },
    { name: '半月谈', url: 'http://www.banyuetan.org/' },
    { name: '光明网', url: 'https://www.gmw.cn/' },
    { name: '光明日报', url: 'https://epaper.gmw.cn/gmrb/' },
    { name: '央视网', url: 'https://www.cctv.com/' },
    { name: '央视网新闻直播', url: 'https://news.cctv.com/' },
    { name: '闪电新闻', url: 'https://sdxw.iqilu.com/' },
    { name: '学信网', url: 'https://account.chsi.com.cn/' },
  ],
  news2: [
    { name: '今日头条', url: 'https://www.toutiao.com/' },
    { name: '百度新闻', url: 'https://news.baidu.com' },
    { name: '新浪新闻', url: 'https://news.sina.com.cn' },
    { name: '腾讯新闻', url: 'https://news.qq.com' },
    { name: '网易新闻', url: 'https://163.com' },
    { name: '搜狐新闻', url: 'https://news.sohu.com/' },
    { name: 'CNN', url: 'https://cnn.com' },
    { name: 'BBC新闻', url: 'https://bbc.com' },
    { name: 'The Verge', url: 'https://theverge.com' },
    { name: 'TechCrunch', url: 'https://techcrunch.com' },
    { name: '36氪', url: 'https://36kr.com' },
    { name: '虎嗅网', url: 'https://huxiu.com' },
    { name: '财经新闻', url: 'https://finance.sina.com.cn' },
    { name: '体育新闻', url: 'https://sports.qq.com' },
  ],
}
// 休闲娱乐
const websiteEntertainment = {
  daohang: [
    { name: 'iMyShare', url: 'https://imyshare.com/' },
    { name: '书签地球', url: 'https://www.bookmarkearth.com/' },
    { name: 'Jay的资源库', url: 'https://www.lovejay.top/' },
    { name: '有意思导航', url: 'https://daohang.youyisi8.com/' },
    { name: '大哈导航', url: 'https://dh.sqst.xyz/' },
    { name: '不死鸟官网发布页', url: 'https://dalao.ru/' },
  ],
  xiuxian: [
    { name: '微信', url: 'https://weixin.qq.com/' },
    { name: 'QQ', url: 'https://im.qq.com/' },
    { name: '微博', url: 'https://weibo.com/' },
    { name: '贴吧', url: 'https://tieba.baidu.com/' },
    { name: '虎扑', url: 'https://www.hupu.com/' },
    { name: '天涯论坛', url: 'https://www.tianya.im/' },
    { name: '知乎', url: 'https://zhihu.com' },
    { name: '小红书', url: 'https://xiaohongshu.com' },
    { name: '豆瓣', url: 'https://douban.com' },
    { name: '豆瓣小组', url: 'https://www.douban.com/group/' },
    { name: '今日热榜', url: 'https://rebang.today/' },
    { name: '今日热榜官网', url: 'https://tophub.today/' },
    { name: 'QQ邮箱', url: 'https://mail.qq.com/' },
    { name: '网易163邮箱', url: 'https://email.163.com/' },
    { name: '网易126邮箱', url: 'https://m.126.com/' },
    { name: 'Gmail邮箱', url: 'https://mail.google.com/' },
    { name: '百度网盘', url: 'https://pan.baidu.com/' },
    { name: '夸克网盘', url: 'https://pan.quark.cn/' },
    { name: '蓝奏云盘', url: 'https://www.lanzou.com/' },
    { name: '阿里云盘', url: 'https://www.alipan.com/' },
  ],
  yingshi: [
    { name: '斗鱼直播', url: 'https://douyu.com' },
    { name: '虎牙直播', url: 'https://huya.com' },
    { name: '哔哩哔哩', url: 'https://bilibili.com' },
    { name: 'AcFun', url: 'https://acfun.cn' },
    { name: '抖音', url: 'https://www.douyin.com' },
    { name: '快手', url: 'https://kuaishou.com' },
    { name: 'YouTube', url: 'https://youtube.com' },
    { name: 'Twitch', url: 'https://twitch.tv' },
    { name: '爱奇艺iQIYI', url: 'https://www.iqiyi.com/' },
    { name: '优酷', url: 'https://www.youku.com/' },
    { name: '腾讯视频', url: 'https://v.qq.com/' },
    { name: '搜狐视频', url: 'https://tv.sohu.com/' },
    { name: '咪咕视频', url: 'https://www.miguvideo.com/' },
    { name: '土豆', url: 'https://www.tudou.com/' },
    { name: '百家讲坛', url: 'http://tv.cctv.com/lm/bjjt/' },
    { name: 'FreeOK', url: 'https://www.freeok.mobi/' },
    { name: 'LIBVIO官网', url: 'https://www.libviohd.com/' },
    { name: '豌豆PRO', url: 'https://wandou.la/' },
    { name: '打驴动漫', url: 'https://www.dalvdm.cc/' },
  ],
  gouwu: [
    { name: '淘宝', url: 'https://taobao.com' },
    { name: '京东', url: 'https://jd.com' },
    { name: '拼多多', url: 'https://pinduoduo.com' },
    { name: '苏宁易购', url: 'https://suning.com' },
    { name: '亚马逊', url: 'https://amazon.com' },
    { name: '唯品会', url: 'https://vip.com' },
    { name: '天猫', url: 'https://tmall.com' },
    { name: '1688批发', url: 'https://1688.com' },
    { name: '美团', url: 'https://meituan.com' },
    { name: '饿了么', url: 'https://ele.me' },
    { name: '考拉海购', url: 'https://kaola.com' },
    { name: '京东全球购', url: 'https://jd.hk' },
  ],
  yinyue: [{ name: '米兔音乐', url: 'https://www.qqmp3.vip/' }],
  bizhi: [
    { name: 'P站-Pixiv', url: 'https://www.huashi6.com/' },
    { name: '动漫场景截图搜索引擎', url: 'https://trace.moe/' },
    { name: 'ACG喵导航', url: 'https://www.miaoaaa.com/' },
    { name: '叽哩叽哩游戏网ACG', url: 'https://www.jiligamefun.com/' },
    { name: '动漫图片和壁纸', url: 'https://anime-pictures.net/?lang=zh_CN' },
    { name: 'WALLPAPER ABYSS', url: 'https://wall.alphacoders.com/' },
    { name: '彼岸壁纸', url: 'http://www.netbian.com/' },
  ],
  youxi: [
    { name: 'Steam', url: 'https://steamcommunity.com' },
    { name: '小霸王红白机', url: 'https://www.yikm.net/' },
    { name: 'Poki（宝玩）', url: 'https://poki.com/zh' },
    { name: '文王', url: 'https://jinqiangua.911cha.com/' },
    { name: '周易大学堂', url: 'https://zydx.top/' },
    { name: '吉祥风水网', url: 'https://www.gdjxfsw.com/pp/index.html' },
    { name: '全民万年历', url: 'https://www.qmrl888.com/' },
    { name: '万年历网', url: 'https://www.wannianli3.com/' },
  ],
}
// 设计
const websiteDesign = {
  first: [
    { name: '优设导航', url: 'https://hao.uisdc.com/' },
    { name: '设计导航', url: 'https://hao.shejidaren.com/' },
    { name: '奇迹秀', url: 'https://www.qijishow.com/' },
    { name: '搜图导航', url: 'https://www.91sotu.com/' },
    { name: '16导航', url: 'https://16map.com/' },
    { name: '美叶', url: 'https://www.meiye.art/' },
    { name: 'Uxmap', url: 'https://www.uxmap.cn/' },
    { name: 'HiPPTER', url: 'https://www.hippter.com/' },
    { name: '花瓣网', url: 'https://huaban.com/' },
    { name: '站酷ZCOOL', url: 'https://www.zcool.com.cn/' },
    { name: '觅元素', url: 'https://www.51yuansu.com/' },
    { name: 'Canva可画', url: 'https://www.canva.cn/' },
    { name: 'Behance', url: 'https://www.behance.net/' },
    { name: 'Dribbble', url: 'https://dribbble.com/' },
    { name: 'UI中国', url: 'https://www.ui.cn/' },
    { name: 'Pinterest', url: 'https://pinterest.com/' },
  ],
  // 导航
  daohang: [
    {
      name: '优秀的设计网站',
      url: 'https://www.zhihu.com/question/20369808',
    },
    { name: '90设计网', url: 'http://90sheji.com/' },
    { name: '创造狮', url: 'http://www.chuangzaoshi.com/' },
    { name: 'HiPPTER | PPT资源导航', url: 'http://www.hippter.com/' },
    { name: '美叶', url: 'https://www.meiye.art/' },
    { name: '奇迹秀', url: 'http://www.qijishow.com/' },
    {
      name: '奇迹秀工具箱',
      url: 'http://www.qijishow.com/down/index.html',
    },
    { name: 'Seeseed', url: 'https://www.seeseed.com/' },
    { name: '设计导航', url: 'http://www.uxmap.cn/' },
    { name: '设计导航', url: 'http://hao.shejidaren.com/' },
    { name: '设计导航', url: 'http://16map.com/' },
    { name: '设计订阅', url: 'https://idesign.qq.com/' },
    { name: '搜图导航', url: 'http://91sotu.com/' },
    { name: 'UI酷设计', url: 'http://www.uicool123.com/webnav' },
    { name: 'UI设计师导航网', url: 'http://so.uigreat.com/' },
    { name: '优波设计', url: 'https://www.ubuuk.com/' },
    { name: '优设导航', url: 'https://hao.uisdc.com/' },
  ],
  // 灵感
  linggan: [
    { name: '68Design-您的线上设计部', url: 'http://www.68design.net/' },
    { name: '爱果果', url: 'https://www.iguoguo.net/' },
    { name: 'AD110', url: 'http://www.ad110.com/' },
    { name: 'Aotu.io「凹凸实验室」', url: 'https://aotu.io/' },
    { name: 'Awwwards', url: 'https://www.awwwards.com' },
    { name: '包图网', url: 'https://ibaotu.com/' },
    { name: 'Behance', url: 'https://www.behance.net/' },
    { name: 'Canva可画', url: 'https://www.canva.cn/' },
    { name: 'CollectUI', url: 'http://collectui.com/' },
    { name: 'Dribbble', url: 'https://dribbble.com/' },
    { name: '古田路9号', url: 'https://www.gtn9.com/' },
    { name: '花瓣网', url: 'https://huaban.com/' },
    { name: '觅元素', url: 'http://www.51yuansu.com/' },
    { name: '千库网', url: 'https://588ku.com/' },
    { name: '千图', url: 'http://www.58pic.com/' },
    { name: 'Reeoo', url: 'http://reeoo.com/' },
    { name: '摄图网', url: 'https://699pic.com/' },
    { name: '素材国度', url: 'https://www.dc10000.com' },
    { name: 'TheFWA', url: 'http://www.thefwa.com/' },
    { name: '昵图网', url: 'http://soso.nipic.com/' },
    { name: '图翼网', url: 'http://www.tuyiyi.com/' },
    { name: 'UI社', url: 'http://www.uishe.cn/' },
    { name: '我图网', url: 'http://www.ooopic.com/' },
    { name: '优设网官网', url: 'https://www.uisdc.com/' },
    { name: '原创馆', url: 'https://ycg.qq.com/' },
    { name: '站酷(ZCOOL)', url: 'https://www.zcool.com.cn/' },
  ],
  // 配色
  peise: [
    { name: 'Coolors', url: 'https://coolors.co/' },
    {
      name: '散热器1',
      url: 'https://coolors.co/461220-8c2f39-b23a48-fcb9b2-fed0bb',
    },
    { name: 'Color Hex', url: 'http://www.colorhexa.com/' },
    { name: 'Color Lisa', url: 'http://www.colorlisa.com/' },
    { name: 'Color Hunt', url: 'https://colorhunt.co/' },
    { name: 'Color Picker', url: 'http://colorsupplyyy.com/app/' },
    { name: 'Color Safe', url: 'http://colorsafe.co/' },
    {
      name: 'Sessions College',
      url: 'https://www.sessions.edu/color-caLculator/',
    },
    { name: 'Color Drop', url: 'http://www.colordrop.io/' },
    { name: 'Color Me', url: 'http://colorme.io/' },
    { name: 'Colormind', url: 'http://colormind.io/' },
    {
      name: 'House of van Schneider',
      url: 'http://www.vanschneider.com/colors/',
    },
    { name: 'Colorsinspo', url: 'https://colorsinspo.com' },
    { name: 'Colourcode', url: 'http://www.colourco.de/' },
    { name: 'FlatUI Colors2', url: 'https://flatuicolors.com/' },
    { name: 'Creative Market', url: 'https://creativemarket.com/' },
    { name: 'WebGradients.com💎', url: 'https://webgradients.com/' },
    { name: 'HappyHues', url: 'https://www.happyhues.co/' },
    { name: 'MaterialPalette', url: 'https://www.materialpalette.com/' },
    { name: 'Khroma', url: 'http://khroma.co/' },
    {
      name: 'Threebù',
      url: 'https://www.threebu.it/randommaterial-paLette/',
    },
    { name: 'Palettable', url: 'http://www.palettable.io/' },
    { name: 'Pixeden', url: 'https://www.pixeden.com/' },
    { name: 'ShapeFactory', url: 'https://shapefactory.co' },
    { name: 'AdobeColor', url: 'https://color.adobe.com' },
    { name: '色選びが簡単に', url: 'https://colorsupplyyy.com' },
    { name: 'uiGradients(ui渐变)', url: 'https://uigradients.com/' },
    { name: '中国传统颜色手册', url: 'https://colors.ichuantong.cn/' },
    { name: '中国色－中国传统颜色', url: 'http://zhongguose.com/' },
  ],
  // 纹理
  wenli: [
    { name: 'WeGraphics', url: 'https://we.graphics/' },
    { name: 'Bg-patterns', url: 'http://bg-patterns.com/' },
    { name: 'Patterninja', url: 'https://www.patterninja.com/' },
    { name: 'The Pattern Library', url: 'http://thepatternlibrary.com/' },
  ],
  // 素材
  sucai: [
    { name: '7MX', url: 'https://7mx.com/' },
    { name: 'abdz', url: 'https://abduzeedo.com/' },
    { name: 'AnimatedIcons', url: 'https://icons8.com/animated-icons' },
    { name: '笔图网', url: 'https://bitu360.com/' },
    { name: 'Unsplash', url: 'https://unsplash.com/' },
    { name: 'Tookapic', url: 'https://stock.tookapic.com/photos' },
    { name: 'Cupcake', url: 'http://cupcake.nilssonlee.se/' },
    { name: '堆糖，美图壁纸兴趣社区', url: 'https://www.duitang.com/' },
    { name: 'Fancycrave', url: 'https://fancycrave.com/' },
    { name: 'FoodPictures', url: 'https://www.foodiesfeed.com' },
    {
      name: 'FreeIllustrations[FreeSVGIllustrations]MITLicensed',
      url: 'https://Lukaszadam.com/illustrations',
    },
    { name: 'PSDRepo', url: 'https://psdrepo.com/' },
    { name: 'StickPNG', url: 'https://www.stickpng.com' },
    { name: 'ByPeople', url: 'https://freebies.bypeople.com/' },
    { name: '蛤蟆资源', url: 'http://www.hamaziyuan.com/' },
    { name: 'PS笔刷吧', url: 'https://brushes8.com/' },
    { name: '红动网', url: 'https://www.redocn.com/' },
    { name: '红森林', url: 'http://www.hoslin.cn/' },
    { name: '黄蜂网', url: 'http://woofeng.cn/' },
    { name: '懒人图库', url: 'http://www.Lanrentuku.com/' },
    {
      name: 'Lightroom预设下载',
      url: 'http://www.3h3.com/k/LightroomPresetsDownload/',
    },
    { name: '灵感图库-Arting365', url: 'http://arting365.com/gallery' },
    { name: '免费素材图片Pexels', url: 'https://www.pexels.com' },
    { name: '免费正版高清图片素材库', url: 'https://www.pixabay.com/zh/' },
    { name: 'Kapwing', url: 'https://www.kapwing.com/484-illustrations' },
    { name: 'picjumbo', url: 'https://picjumbo.com/' },
    { name: 'PixiteSource', url: 'http://source.pixite.co/' },
    { name: 'PNGimages', url: 'http://pngimg.com/' },
    { name: 'PNG搜索网', url: 'https://pngss.com/' },
    { name: '全景视觉', url: 'http://www.quanjing.com/' },
    { name: 'Scene360', url: 'https://scene360.com/' },
    { name: '沙沙野', url: 'https://www.ssyer.com/' },
    { name: 'Stubborn', url: 'https://stubborn.fun/' },
    { name: 'Streetwill', url: 'http://streetwill.co/' },
    { name: 'FreeImages', url: 'https://cn.freeimages.' },
    { name: 'UI酷设计', url: 'http://www.uicool123.com' },
    { name: 'Unblast', url: 'https://unblast.com' },
    { name: 'VisualHunt', url: 'https://www.visualhunt' },
    { name: '站长素材', url: 'https://sc.chinaz.com/' },
    { name: '致设计', url: 'https://www.zhisheji.com/' },

    { name: 'mixkit', url: 'https://mixkit.co/' },
    { name: '新片场', url: 'https://www.xinpianchang.com/' },
    { name: 'videezy', url: 'https://www.videezy.com/' },
    { name: '预告片世界', url: 'https://www.yugaopian.cn/' },
    { name: '高清电影', url: 'https://gaoqing.fm/' },
    { name: '音范丝', url: 'http://www.yinfans.me/' },
    { name: '站长素材', url: 'http://sc.chinaz.com/' },
    { name: '爱给网', url: 'http://www.aigei.com/' },
    { name: '91flac', url: 'https://www.91flac.com/' },
    { name: 'Voicer', url: 'http://www.voicer.com/' },

    { name: '沐风网-cad图纸下载', url: 'https://www.mfcad.com/' },
  ],
  // 插画
  chahua: [
    {
      name: '100,000freeicons,illustrations,emojis–Streamline4.0',
      url: 'https://www.streamlinehq.com/',
    },
    {
      name: 'DelesignFreeDesigns',
      url: 'https://delesign.com/free-designs/graphics/',
    },
    {
      name: 'DownloadFreeIllustrationsForCommercialUseandForWebsiteDesign|Iconscout',
      url: 'https://iconscout.com/free-illustrations',
    },
    {
      name: 'FreeIcons,ClipartIllustrations,Photos,andMusic',
      url: 'https://icons8.com/',
    },
    {
      name: 'Freestockillustrations,BeautifulFreeArt|Mixkit',
      url: 'https://mixkit.co/free-stock-art/',
    },
    {
      name: 'FreetoUseClipArtImages&amp;VectorIllustrations|ManyPixels',
      url: 'https://gallery.manypixels.co/',
    },
    { name: 'Humaaans', url: 'http://www.humaaans.com' },
    { name: 'Illustrations', url: 'https://undraw.co/illustrations' },
    { name: 'IRADesign', url: 'https://iradesign.io/' },
    { name: 'Isobuild', url: 'https://isoflat.com/isobuild/' },
    { name: 'Open Doodles', url: 'https://www.opendoodles.com/' },
    {
      name: 'Open Doodles Generator',
      url: 'https://generator.opendoodles.com/',
    },
  ],
  // 字体
  ziti: [
    { name: 'Aa字库', url: 'http://www.aafont.com.cn/' },
    { name: 'DaFont', url: 'http://www.dafont.com/' },
    { name: '动态网站制作指南', url: 'http://font.knowsky.com/' },
    { name: 'FontShop', url: 'http://www.fontshop.com/' },
    { name: 'iFonts字体助手', url: 'https://51ifonts.com/' },
    { name: '猫啃网', url: 'https://www.maoken.com/' },
    { name: '识字体网', url: 'https://www.likefont.com/' },
    { name: '第一字体网', url: 'http://www.diyiziti.com/' },
    { name: '站长字体下载', url: 'http://font.chinaz.com/' },
    { name: '字加网', url: 'https://www.zijia.com.cn/' },
    { name: '字体库下载', url: 'https://www.ypppt.com/ziti/' },
    { name: '字体视界', url: 'https://www.17font.com/' },
    { name: '字体下载字魂网', url: 'https://izihun.com/' },
    { name: '字体下载求字体网', url: 'http://www.qiuziti.com/' },
    { name: '字客网', url: 'http://www.fontke.com/' },
    { name: '字体下载网(不能用了)', url: 'http://www.font168.com/' },
    { name: '字由', url: 'https://www.hellofont.cn/' },
    { name: '求字体网', url: 'https://www.qiuziti.com/' },
    { name: '模板王字库', url: 'https://fonts.mobanwang.com/' },
    { name: '字体传奇网', url: 'https://www.ziticq.com/' },
  ],
  // icon
  icon: [
    { name: 'iconfont阿里巴巴矢量图标库', url: 'https://www.iconfont.cn/' },
    { name: 'iconpark', url: 'https://iconpark.oceanengine.com/' },
    { name: 'icoMoon', url: 'https://icomoon.io/' },
    {
      name: 'Byte Dance Icon Park',
      url: 'https://iconpark.oceanengine.com/official',
    },
    { name: 'igoutu', url: 'https://igoutu.cn/' },
    { name: 'iconscout', url: 'https://iconscout.com/' },
    { name: 'tablericons', url: 'https://tablericons.com/' },
    { name: 'remixicon', url: 'https://remixicon.com/' },
    { name: 'iconmonstr', url: 'https://iconmonstr.com/' },
    { name: 'icomoon', url: 'https://icomoon.io/' },
    { name: 'iconfont', url: 'https://www.iconfont.cn/' },
    { name: '寻图标', url: 'https://icon.52112.com/' },
    { name: 'iconstore', url: 'https://iconstore.co/' },
    { name: 'flaticon', url: 'https://www.flaticon.com/' },
    { name: 'lordicon', url: 'https://lordicon.com/' },
    { name: 'ikonate', url: 'https://ikonate.com/' },
    { name: 'NounProject', url: 'https://thenounproject.com' },
    {
      name: '7,425,000+freeandpremiumvectoricons,illustrationsand3Dillustrations',
      url: 'https://www.iconfinder.com',
    },
  ],
  // logo
  logo: [
    {
      name: 'Instant Logo Search',
      url: 'http://www.instantLogosearch.com/',
    },
    { name: 'LOGO设计神器', url: 'https://www.logosc.cn/' },
    { name: 'Logopond', url: 'http://logopond.com/' },
    { name: 'NounProject', url: 'http://thenounproject.com/' },
    { name: '色大师人工智能', url: 'http://www.sedashi.cn/' },
  ],
  // 样机
  yangji: [
    { name: '21wallpaper', url: 'https://21wallpaper.design' },
    { name: 'ArtboardStudio', url: 'http://artboard.studio/' },
    { name: '包小盒', url: 'https://www.baoxiaohe.com/' },
    { name: '叮当设计', url: 'https://www.dingdangsheji.com/' },
    { name: 'Graphberry', url: 'https://www.graphberry.com/' },
    { name: 'FreeMockups', url: 'https://www.ls.graphics/free-mockups' },
    {
      name: 'Make Mockups, Logos, Videos and Design sin Seconds',
      url: 'https://placeit.net/',
    },
    {
      name: 'Graphics Fuel',
      url: 'https://www.graphicsfuel.com/category/mockup-templates/',
    },
    { name: 'Mockup World', url: 'https://www.mockupworLd.co/' },
    { name: 'MyWed', url: 'https://mywed.com' },
    { name: 'Screenzy', url: 'https://screenzy.io/' },
    {
      name: '设计样机云瑞设计',
      url: 'https://www.yrucd.com/category/vip/mockups',
    },
    { name: 'The Mockup Club', url: 'https://themockup.cLub/' },
    { name: 'UIKit', url: 'http://www.uikit.me/' },
    { name: '西田样机', url: 'https://mockup.sitapix.com/' },
    {
      name: '6500+ Best Free High Quality Mockup PSD Files - Good Mockups',
      url: 'https://goodmockups.com/',
    },
  ],
  // 模板
  muban: [
    { name: 'CG资源网', url: 'https://www.cgown.com/' },
    { name: 'LookAE', url: 'http://www.lookae.com/' },
    { name: '新CG儿', url: 'https://www.newcger.com/shipinsucai/' },
    { name: 'VIDEOCOPILOT中文站', url: 'https://videocopilot.net.cn/' },
    { name: 'VJ师网', url: 'https://www.vjshi.com/' },
    { name: '知鱼素材', url: 'https://sucai.zhiyu.art/' },
  ],
  // 小神器
  shenqi: [
    { name: '3ddd', url: 'https://3ddd.casa' },
    { name: '3DHandsgestures', url: 'https://www.handz.design' },
    {
      name: 'Avataaars Generator(卡通形象在线生成器)',
      url: 'https://getavataaars.com/',
    },
    { name: 'Biteable', url: 'https://app.biteable.com' },
    {
      name: 'CodePen:OnlineCodeEditorandFrontEndWebDeveloperCommunity',
      url: 'https://codepen.io',
    },
    { name: 'Fontpair', url: 'https://fontpair.co/' },
    {
      name: 'Promo.com',
      url: 'https://promo.com/tools/image-resizer/?utmcontent=header',
    },
    {
      name: 'Imagemotion Photoshop Extension for animation your images.',
      url: 'https://mikesreda.com/imagemotion/',
    },
    { name: '蓝湖切图标注等', url: 'https://lanhuapp.com/' },
    { name: 'Panzoid', url: 'https://Panzoid.com' },
    {
      name: 'Parallel dimension(混合线条生成器)',
      url: 'https://codepen.io/funxer/pen/Zvjebx',
    },
    { name: '泼辣修图', url: 'http://www.polayoutu.com/collections' },
    { name: 'Sketchfab', url: 'https://sketchfab.com' },
    { name: 'Superscene5.0', url: 'https://superscene.pro' },
    { name: 'TinyPNG', url: 'https://tinypng.com/' },
    { name: 'Vectary', url: 'https://Vectary.com' },
    { name: 'Yasai', url: 'https://wangyasai.github.io/' },
    { name: '在线制作webp', url: 'http://zhitu.isux.us/' },
  ],
  // 学习
  xuexi: [
    { name: '破洛洛手机版', url: 'http://www.poLuoluo.com/' },
    { name: 'ps教程自学网', url: 'https://www.16xx8.com/' },
  ],
}
// 编程
const websiteCode = {
  // 软件安装
  ruanjian: [
    { name: 'VsCode', url: 'https://code.visualstudio.com/' },
    { name: 'Vscode网页版', url: 'https://vscode.dev/' },
    {
      name: 'Visual Studio',
      url: 'https://visualstudio.microsoft.com/zh-hans/vs/',
    },
    { name: 'WebStorm', url: 'https://www.jetbrains.com/webstorm/' },
    { name: 'HBuilderX', url: 'https://www.dcloud.io/' },
    { name: 'Markdown', url: 'https://markdown.p2hp.com/index.html' },
    { name: 'Postman', url: 'https://www.postman.com/' },
    { name: 'python', url: 'https://www.python.org/' },
    { name: 'PyCharm', url: 'https://www.jetbrains.com/pycharm/' },
    { name: 'JetBrains', url: 'https://www.jetbrains.com/' },
    { name: 'codepen', url: 'https://codepen.io/' },
  ],
  // 前端导航
  daohang: [
    { name: 'github', url: 'https://github.com/' },
    { name: 'gitee', url: 'https://gitee.com/' },
    { name: '程序员导航', url: 'http://cxy521.com/' },
    { name: '马哥导航', url: 'https://www.mgnav.com/' },
    { name: '无涯教程', url: 'https://www.learnfk.com/' },
    {
      name: '大佬博客',
      url: 'https://github.com/timqian/chinese-independent-blogs/',
    },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com' },
    { name: '力扣LeetCode', url: 'https://leetcode.cn' },
    { name: '思否', url: 'https://segmentfault.com' },
    { name: '稀土掘金', url: 'https://juejin.cn' },
    { name: 'edX', url: 'https://www.edx.org/' },
    { name: '我要自学网', url: 'https://www.51zxw.net/' },
  ],
  // 文档
  wendang: [
    { name: '菜鸟教程', url: 'https://www.runoob.com' },
    {
      name: 'javascript中文手册,js中文手册-脚本之家',
      url: 'http://shouce.jb51.net/jscript/index.html',
    },
    { name: 'w3school在线教程', url: 'https://www.w3school.com.cn/' },
    { name: 'W3Schools', url: 'https://w3schools.com' },
    { name: 'MDN', url: 'https://developer.mozilla.org' },
    { name: 'overAPI', url: 'https://overapi.com/' },
    { name: 'Bootstrap 5', url: 'https://www.bootstraph.com/' },
    { name: 'Bootstrap 4', url: 'https://v4.bootstraph.com/' },
    { name: 'Bootstrap 3', url: 'https://v3.bootstraph.com/' },
    { name: 'Bootstrap中文网', url: 'https://www.bootcss.com/' },
    { name: 'Bootstrapv5', url: 'https://v5.bootcss.com/' },
    { name: 'Bootstrapv4', url: 'https://v4.bootcss.com/' },
    { name: 'Bootstrapv3', url: 'https://v3.bootcss.com/' },
    {
      name: 'Bootstrapv5中文文档',
      url: 'https://www.bootstrap.cn/doc/book/2.html',
    },
    {
      name: 'Bootstrapv4中文文档',
      url: 'https://getbootstrap.net/docs/getting-started/introduction/',
    },
    { name: 'LayUI', url: 'https://layui.dev/' },
    { name: 'easyUI', url: 'https://www.jeasyui.cn/' },
    { name: 'TailwindCSS', url: 'https://tailwindcss.com/' },
    { name: 'TailwindCSS中文文档', url: 'https://www.tailwindcss.cn/' },
    { name: 'Moment.js中文网', url: 'http://momentjs.cn/' },
    { name: 'Day.js中文网', url: 'https://dayjs.fenxianglu.cn/' },
    { name: 'three.js', url: 'https://threejs.org/' },
    { name: 'three.js中文网', url: 'http://www.webgl3d.cn/' },
    { name: 'clipboard.js中文网', url: 'https://www.clipboardjs.com/' },
    { name: 'Mock.js', url: 'http://mockjs.com/' },
    { name: 'chart.js', url: 'https://www.chartjs.org/' },
    { name: 'chart.js中文文档', url: 'https://chartjs.bootcss.com/' },
    { name: 'Apache Echarts', url: 'https://echarts.apache.org/zh/index.html' },

    { name: 'Less官网', url: 'https://lesscss.org/' },
    { name: 'Less-Bootstrap', url: 'https://less.bootcss.com/' },
    { name: 'Sass官网', url: 'https://www.sass.hk/' },
    { name: 'Sass-Bootstrap', url: 'https://sass.bootcss.com/' },
    { name: 'Stylus官网', url: 'https://www.stylus-lang.com/' },
    { name: 'Stylus-Bootstrap', url: 'https://stylus.bootcss.com/' },

    { name: 'jQuery官网', url: 'https://jquery.com/' },
    { name: 'jQuery中文网', url: 'https://www.jquery123.com/' },
    { name: 'jQuery在线文档', url: 'https://api.jquery.com/' },
    { name: 'jQuery插件库', url: 'https://www.jq22.com/' },
    { name: 'jQuery之家', url: 'http://www.htmleaf.com/' },
    {
      name: 'jQuery网页特效最全网页模板和网站模板jQuery代码17素材网',
      url: 'https://www.17sucai.com/',
    },
    { name: 'Font Awesome', url: 'https://fontawesome.com/v4/' },
    { name: 'ES6入门教程-阮一峰', url: 'https://es6.ruanyifeng.com/' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'TypeScript中文网', url: 'https://ts.nodejs.cn/' },
    { name: 'Git下载', url: 'https://git-scm.com/' },
    {
      name: 'Git的使用（连接远程仓库）',
      url: 'https://zhuanlan.zhihu.com/p/359108193',
    },
    { name: 'Node.js', url: 'https://nodejs.org/en' },
    { name: 'Node.js中文网', url: 'https://nodejs.cn/' },
    { name: 'npm', url: 'https://www.npmjs.com/' },
    { name: 'npm中文文档', url: 'https://npm.nodejs.cn/' },
    { name: 'Express', url: 'https://expressjs.com/' },
    { name: 'Express中文网', url: 'https://www.expressjs.com.cn/' },
    { name: 'axios中文网', url: 'http://www.axios-js.com/' },
    { name: 'webpack', url: 'https://webpack.js.org/' },
    { name: 'Webpack中文网', url: 'https://www.webpackjs.com/' },
    { name: 'Grunt', url: 'https://www.gruntjs.net/' },
    { name: 'gulp.js', url: 'https://www.gulpjs.com.cn/' },
    { name: 'rollup.js', url: 'https://www.rollupjs.com/' },
    { name: 'Parcel', url: 'https://www.parceljs.cn/' },
    { name: 'React', url: 'https://react.docschina.org/' },
    { name: 'React中文文档', url: 'https://zh-hans.react.dev/' },
    { name: 'madewithreact', url: 'https://madewithreactjs.com/' },

    { name: 'Vue.js', url: 'https://cn.vuejs.org/' },
    { name: 'Vuev2', url: 'https://v2.cn.vuejs.org/' },
    { name: 'Vuev3', url: 'https://cn.vuejs.org/' },
    { name: 'Vue3', url: 'https://vue3js.cn/global/' },
    { name: 'VueCLI', url: 'https://cli.vuejs.org/zh/' },
    {
      name: 'vue.config.js配置参考',
      url: 'https://zhuanlan.zhihu.com/p/354740692/',
    },
    { name: 'VueRouter', url: 'https://router.vuejs.org/zh/' },
    { name: 'madewithvue', url: 'https://madewithvuejs.com/' },
    { name: 'Vite中文网', url: 'https://vitejs.cn/' },
    { name: 'Vite官方中文文档', url: 'https://cn.vitejs.dev/' },
    {
      name: '为什么要先commit，然后pull，最后再push？而不是commit然后直接push',
      url: 'https://blog.csdn.net/Sweet__Cat/article/details/79397629?utm_source=blogxgwz2',
    },
    {
      name: '后端的vue笔记',
      url: 'https://zhuanlan.zhihu.com/p/408366155/',
    },
    { name: 'uni-app官网', url: 'https://uniapp.dcloud.io/' },
    {
      name: '微信小游戏制作工具',
      url: 'https://gamemaker.weixin.qq.com/#/',
    },
    { name: 'ElementUI', url: 'https://element.eleme.cn/#/zh-CN/' },
    {
      name: 'vue-element-admin',
      url: 'https://panjiachen.github.io/vue-element-admin/',
    },
    {
      name: '推荐几个VUEUI组件库',
      url: 'https://blog.csdn.net/qq_48960335/article/details/124685062',
    },
    {
      name: '推荐几个移动端前端UI框架',
      url: 'https://zhuanlan.zhihu.com/p/160908549',
    },
    { name: 'Angular英', url: 'https://angular.io/' },
    { name: 'Angular汉', url: 'https://angular.cn/' },
  ],
  // CDN
  cdn: [
    { name: 'jsdelivrCDN', url: 'https://www.jsdelivr.com/' },
    { name: 'BootCDN', url: 'https://www.bootcdn.cn/' },
    { name: 'StaticfileCDN', url: 'https://staticfile.org/' },
    { name: 'cdnjs', url: 'https://cdnjs.com/' },
  ],
  // API
  api: [
    { name: '接口大全', url: 'https://www.free-api.com/' },
    { name: '搏天api', url: 'https://api.btstu.cn/' },
    {
      name: 'fangzesheng/free-api:收集免费的接口服务,做一个api的搬运工',
      url: 'https://github.com/fangzesheng/free-api',
    },
    { name: '免费API', url: 'https://api.aa1.cn/' },

    { name: '星辰API', url: 'https://api.xcboke.cn/' },
    { name: '网易云音乐API', url: 'http://iwenwiki.com:3000/' },
  ],
  // 小工具
  gongju: [
    {
      name: 'Quicker软件您的指尖工具箱-Quicker',
      url: 'https://getquicker.net/',
    },
    {
      name: 'freefq/free:翻墙、免费翻墙、免费科学上网、免费节点、免费梯子、免费ss/v2ray/trojan节点、蓝灯、谷歌商店、翻墙梯子',
      url: 'https://github.com/freefq/free',
    },
    { name: '王亚赛', url: 'https://wangyasai.github.io/' },

    { name: 'loading效果网', url: 'https://loading.io/' },
    { name: 'Neumorphism.io', url: 'https://neumorphism.io/' },
    { name: 'cssdeck', url: 'https://cssdeck.com/' },
  ],
}

// 考试时间
const test = {
  test1: [
    {
      name: '2025年教师资格证笔试',
      time: '报名时间：已结束 | 考试时间：已结束',
      color: 'gray',
      // color: 'green',
    },
    {
      name: '2026年国家公务员笔试',
      time: '报名时间：10月15日-10月24日 | 考试时间：11月29日-11月30日',
      color: 'gray',
      // color: 'green',
    },
    {
      name: '2026年山东公务员笔试',
      time: '报名时间：11月07日-11月10日 | 考试时间：12月06日-12月07日',
      color: 'gray',
      // color: 'green',
    },
    {
      name: '2026年山东事业编笔试',
      time: '报名时间：未开始 | 考试时间：未开始',
      // color: 'gray',
      color: 'green',
    },
  ],
  test2: [
    {
      name: '2025年教师资格证面试',
      time: '报名时间：已结束 | 考试时间：已结束',
      color: 'gray',
      // color: 'green',
    },
    {
      name: '2026年国家公务员面试',
      time: '报名时间：未开始 | 考试时间：未开始',
      color: 'gray',
      color: 'green',
    },
    {
      name: '2026年山东公务员面试',
      time: '报名时间：未开始 | 考试时间：未开始',
      color: 'gray',
      color: 'green',
    },
    {
      name: '2026年山东事业编面试',
      time: '报名时间：未开始 | 考试时间：未开始',
      color: 'gray',
      color: 'green',
    },
  ],
}

// 推荐内容
const websiteTuijian = {
  // 电影
  tuijian1: [
    '肖申克的救赎',
    '控方证人',
    '霸王别姬',
    '死亡诗社',
    '怦然心动',
    '功夫熊猫',
    '第74届（2002年）：《怪物史莱克》（Shrek）',
    '第75届（2003年）：《千与千寻》（Spirited Away）',
    '第76届（2004年）：《海底总动员》（Finding Nemo）',
    '第77届（2005年）：《超人特工队》（The Incredibles）',
    '第78届（2006年）：《超级无敌掌门狗：人兔的诅咒》（Wallace & Gromit: The Curse of the Were-Rabbit）',
    '第79届（2007年）：《快乐的大脚》（Happy Feet）',
    '第80届（2008年）：《美食总动员》（Ratatouille）',
    '第81届（2009年）：《机器人总动员》（WALL·E）',
    '第82届（2010年）：《飞屋环游记》（Up）',
    '第83届（2011年）：《玩具总动员3》（Toy Story 3）',
    '第84届（2012年）：《兰戈》（Rango）',
    '第85届（2013年）：《勇敢传说》（Brave）',
    '第86届（2014年）：《冰雪奇缘》（Frozen）',
    '第87届（2015年）：《超能陆战队》（Big Hero 6）',
    '第88届（2016年）：《头脑特工队》（Inside Out）',
    '第89届（2017年）：《疯狂动物城》（Zootopia）',
    '第90届（2018年）：《寻梦环游记》（Coco）',
    '第91届（2019年）：《蜘蛛侠：平行宇宙》（Spider-Man: Into the Spider-Verse）',
    '第92届（2020年）：《玩具总动员4》（Toy Story 4）',
    '第93届（2021年）：《心灵奇旅》（Soul）',
    '第94届（2022年）：《魔法满屋》（Encanto）',
    '第95届（2023年）：《吉尔莫·德尔·托罗的匹诺曹》（Guillermo Del Toro’s Pinocchio）',
    '第96届（2024年）：《你想活出怎样的人生》（The Boy and the Heron）',
    '第97届（2025年）：《猫猫的奇幻漂流》（Straume）',
  ],
  // 电视剧
  tuijian2: [
    '老友记1-10',
    '生活大爆炸1-12',
    '风骚律师1-6',
    '摩登家庭1-11',
    '权力的游戏1-8',
    '浴血黑帮1-6',
    '越狱1-5',
    '无耻之徒1-11',
    '绝命毒师1-5',
    '黄石1-5',
    '性爱自修室1-4',
    '破产姐妹1-6',
    '绝望主妇1-8',
    '怪奇物语1-4',
    '斯巴达克斯1-3',
    '黑袍纠察队1-3',
    '行尸走肉1-11',
    '小谢尔顿1-5',
    '黑吃黑1-4',
    '汉尼拔1-3',
  ],
  // 书籍
  tuijian3: [
    '月亮与六便士——毛姆',
    '边城——沈从文',
    '国富论——亚当斯密',
    '万历十五年——黄仁宇',
    '天朝的崩溃——茅海建',
    '霍乱时期的爱情——加西亚·马尔克斯',
    '三体——刘慈欣',
    '曾国藩传——萧一山',
    '天国之秋——裴士锋',
    '青铜时代/白银时代/黄金时代——王小波',
    '瓦尔登湖——亨利·戴维·梭罗',
    '追风筝的人——卡勒德·胡赛尼',
    '飞鸟集——泰戈尔',
    '明朝那些事儿——当年明月',
    '中国通史——吕思勉',
    '历史巨人毛泽东——迪克·威尔逊',
    '傲慢与偏见——简·奥斯丁',
    '战争与和平',
    '简爱',
    '教父',
    '丰乳肥臀',
    '红树林',
    '时间简史',
    '替身',
    '狂人日记',
    '三个火枪手',
    '普京传',
    '局外人',
    '白夜行',
  ],
}

// 其他
// 蕾丝猫https://www.lesmao.co/
// https://www.2c3b6.com/
// https://www.271nn.com/
// https://www.740oo.com/
// https://www.471mm.com/
// https://efef4.com/
// https://www.242tt.com/play/index41862-0-0.html

// 生成网站卡片
function generateWebsiteCards(containerId, websites) {
  // 随机颜色
  function randomColor() {
    const arrColor = [
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
      'rose',
    ]
    const randomNum = Math.floor(Math.random() * 17)

    return arrColor[randomNum]
  }

  const container = document.getElementById(containerId)
  container.innerHTML = ''
  websites.forEach((website) => {
    let randomColorA = randomColor()
    // 换成 insertAdjacentHTML() 方法
    container.insertAdjacentHTML(
      'beforeend',
      `
      <a href='${website.url}' target='_blank' title=${website.name} class="website-card bg-white rounded-lg border border-gray-100 p-4 text-center truncate gap-2 hover:border-${randomColorA}-300 hover:bg-${randomColorA}-300/30">
          <span class="text-sm font-medium">${website.name}</span>
        </a>
        `
    )
  })
}
// 初始化网站卡片
function initWebsiteCards() {
  generateWebsiteCards('quick-access-container', websiteQuickAccess.first)
  generateWebsiteCards('study-resources-container', websiteStudyResources.first)
  generateWebsiteCards('job-info-container-1', websiteJobInfo.first)
  generateWebsiteCards('job-info-container-2', websiteJobInfo.jianli)
  generateWebsiteCards('tools-container', websiteTools.first)
  generateWebsiteCards('AI-container', websiteTools.AI)
  generateWebsiteCards('news-container-1', websiteNews.news1)
  generateWebsiteCards('news-container-2', websiteNews.news2)
  generateWebsiteCards(
    'entertainment-daohang-container',
    websiteEntertainment.daohang
  )
  generateWebsiteCards(
    'entertainment-xiuxian-container',
    websiteEntertainment.xiuxian
  )
  generateWebsiteCards(
    'entertainment-yingshi-container',
    websiteEntertainment.yingshi
  )
  generateWebsiteCards(
    'entertainment-gouwu-container',
    websiteEntertainment.gouwu
  )
  generateWebsiteCards(
    'entertainment-yinyue-container',
    websiteEntertainment.yinyue
  )
  generateWebsiteCards(
    'entertainment-bizhi-container',
    websiteEntertainment.bizhi
  )
  generateWebsiteCards(
    'entertainment-youxi-container',
    websiteEntertainment.youxi
  )
  generateWebsiteCards('design-container', websiteDesign.first)
  generateWebsiteCards('code-ruanjian-container', websiteCode.ruanjian)
  generateWebsiteCards('code-daohang-container', websiteCode.daohang)
  generateWebsiteCards('code-wendang-container', websiteCode.wendang)
  generateWebsiteCards('code-cdn-container', websiteCode.cdn)
  generateWebsiteCards('code-api-container', websiteCode.api)
  generateWebsiteCards('code-gongju-container', websiteCode.gongju)
}
// 初始化考试日历
function initTestTime() {
  const bishi = document.getElementById('bishi')
  const mianshi = document.getElementById('mianshi')

  test.test1.forEach((e) => {
    bishi.insertAdjacentHTML(
      'beforeend',
      `
      <div class="p-3 border-l-4 border-${e.color}-500 bg-${e.color}-100 rounded">
        <h4 class="font-medium">${e.name}</h4>
        <p class="text-sm text-gray-500 mt-1">${e.time}</p>
      </div>
      `
    )
  })

  test.test2.forEach((e) => {
    mianshi.insertAdjacentHTML(
      'beforeend',
      `
      <div class="p-3 border-l-4 border-${e.color}-500 bg-${e.color}-100 rounded">
        <h4 class="font-medium">${e.name}</h4>
        <p class="text-sm text-gray-500 mt-1">${e.time}</p>
      </div>
      `
    )
  })
}
// 初始化推荐内容
function initTuijian() {
  const tuijian1 = document.getElementById('tuijian1-container')
  const tuijian2 = document.getElementById('tuijian2-container')
  const tuijian3 = document.getElementById('tuijian3-container')

  websiteTuijian.tuijian1.forEach((element, index) => {
    tuijian1.insertAdjacentHTML(
      'beforeend',
      `<li class="mb-2">${index + 1}. ${element}</li>`
    )
  })
  websiteTuijian.tuijian2.forEach((element, index) => {
    tuijian2.insertAdjacentHTML(
      'beforeend',
      `<li class="mb-2">${index + 1}. ${element}</li>`
    )
  })
  websiteTuijian.tuijian3.forEach((element, index) => {
    tuijian3.insertAdjacentHTML(
      'beforeend',
      `<li class="mb-2">${index + 1}. ${element}</li>`
    )
  })
}
// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initWebsiteCards()
  initTestTime()
  initTuijian()
})
