/* ============================================================
   张家港市中等专业学校 · 门户网站毕业设计 DEMO
   共享数据层：前台 index.html 与后台 admin.html 共用
   数据存于 localStorage，首次访问自动写入示例数据
   ============================================================ */

const DEFAULTS = {
  cats: [
    { id: 'c1', name: '校园新闻', parent: '新闻中心' },
    { id: 'c2', name: '校园公告', parent: '新闻中心' },
    { id: 'c3', name: '部门新闻', parent: '新闻中心' },
    { id: 'c4', name: '系部风采', parent: '新闻中心' },
    { id: 'c5', name: '招生信息', parent: '招生就业' },
    { id: 'c6', name: '教学研究', parent: '教学管理' },
    { id: 'c7', name: '党建新闻', parent: '党建园地' },
    { id: 'c8', name: '学工动态', parent: '学生工作处' }
  ],
  news: [
    {
      id: 1, cat: '校园新闻', dept: '教务处', date: '2026-11-10', views: 61,
      title: '聚焦学考谋全局，锚定目标创一流——我校召开 2026 年省中职学业水平考试技能考试专题会议',
      status: 'published', top: false, cover: 'images/news/n01.jpg',
      desc: '为切实做好 2026 年江苏省中等职业学校学业水平考试技能考试组织工作，学校于 11 月 10 日下午召开专题会议，全面部署考务安排、实训保障与安全管理等工作。',
      body: [
        '为切实做好 2026 年江苏省中等职业学校学业水平考试技能考试组织工作，11 月 10 日下午，学校在行政楼会议室召开专题工作会议。校领导、教学管理处、各系部主任及技能考试相关专业负责人参加会议。',
        '会议通报了本次技能考试的考点设置、考务流程、时间节点和人员分工，重点围绕考场布置、设备调试、耗材准备、安全预案等环节进行了逐项梳理。各系部就本系参考专业的学生训练进度、模拟测试情况和存在的困难作了汇报。',
        '会议指出，学业水平考试技能考试是检验学校教学质量与学生技能水平的重要环节，各部门要压实责任、密切协同，做到考务组织“零差错”、安全保障“零事故”、考生服务“零投诉”。同时要以考促教、以考促练，把考试要求转化为日常实训标准，持续提升人才培养质量。',
        '下一步，学校将组织开展全流程模拟演练，对考场设备、评分标准、应急预案进行再检查、再落实，确保考试平稳有序进行。'
      ]
    },
    {
      id: 2, cat: '校园公告', dept: '教务处', date: '2026-11-12', views: 238,
      title: '关于举办张家港市职业院校第十届“读写结合”作文大赛的通知',
      status: 'published', top: true, cover: 'images/news/n02.jpg',
      desc: '为提升职业院校学生人文素养与表达能力，张家港市教育局决定举办第十届“读写结合”作文大赛，现将有关事项通知如下。',
      body: [
        '为深入贯彻落实立德树人根本任务，提升职业院校学生的人文素养、阅读理解与书面表达能力，经研究，决定举办张家港市职业院校第十届“读写结合”作文大赛。',
        '一、参赛对象：全市职业院校在校学生。二、比赛形式：现场命题写作，限时 120 分钟。三、报名方式：由各校统一组织选拔，择优推荐参赛选手。',
        '四、奖项设置：设一、二、三等奖及优秀指导教师奖若干名，颁发证书。五、有关要求：各校要广泛宣传、认真组织初赛，把大赛作为推动语文教学改革、营造书香校园的重要抓手。',
        '请各系部于本周内将选拔名单报送教务处，逾期视为放弃。'
      ]
    },
    {
      id: 3, cat: '部门新闻', dept: '能源材料系', date: '2026-11-06', views: 78,
      title: '深化产教融合，共筑化工人才高地——2027 届应用化工技术专业专场招聘会成功举办',
      status: 'published', top: false, cover: 'images/news/n03.jpg',
      desc: '11 月 6 日，能源材料系联合张家港保税区化工园区多家企业举办 2027 届应用化工技术专业专场招聘会，现场达成就业意向 60 余人。',
      body: [
        '11 月 6 日，能源材料系联合张家港保税区化工园区多家骨干企业，举办 2027 届应用化工技术专业专场招聘会。',
        '本次招聘会共有 12 家企业参会，提供化工工艺、分析检验、设备维护、安全管理等岗位 180 余个。企业代表通过宣讲、展板、面对面交流等方式，向学生介绍企业发展、岗位要求与成长通道。',
        '现场气氛热烈，学生携带简历有序应聘，不少同学当场与企业达成实习就业意向。系部教师同步开展就业指导，帮助学生分析岗位匹配度、明确职业发展方向。',
        '近年来，能源材料系坚持“校企协同、岗课融通”，与园区企业共建实训基地、共研课程标准，毕业生对口就业率持续保持在较高水平。'
      ]
    },
    {
      id: 4, cat: '招生信息', dept: '招生就业处', date: '2026-11-12', views: 145,
      title: '2026 年招生简章发布：28 个专业面向全市招生',
      status: 'published', top: false, cover: 'images/news/n04.jpg',
      desc: '学校 2026 年招生简章正式发布，涵盖“3+3”分段培养、五年一贯制、职教高考、三年制中专四种办学层次。',
      body: [
        '学校 2026 年招生简章正式发布。今年学校面向全市招收新生，涵盖“3+3”分段培养、五年一贯制、职教高考、三年制中专四种办学层次，共 28 个专业。',
        '其中省品牌专业 4 个、省示范专业 5 个、省现代化专业群 3 个。学校与本地骨干企业深度合作，建有国家级数控技术应用实训基地、3 个省现代化实训基地，为学生技能成长提供有力支撑。',
        '学校坚持“培养实用技术人才，服务港城经济建设”的办学理念，毕业生中级工获证率 99% 以上，高级工获证率 93% 以上，对口就业率 90% 以上。',
        '欢迎广大初中毕业生及家长关注学校官方渠道，了解专业详情与报名流程。'
      ]
    },
    {
      id: 5, cat: '系部风采', dept: '信息工程系', date: '2026-11-11', views: 36,
      title: '信息工程系“云计算技术应用”专业实训基地建设纪实',
      status: 'draft', top: false, cover: 'images/news/n05.jpg',
      desc: '信息工程系围绕云计算技术应用专业，建成集教学、实训、竞赛于一体的云平台实训中心，探索“岗课赛证”融通育人路径。',
      body: [
        '走进信息工程系云计算实训中心，一排排机柜指示灯规律闪烁，学生正在教师指导下完成云平台部署与运维任务。',
        '该实训中心按照企业真实生产环境搭建，涵盖虚拟化平台、容器集群、云存储与云安全等模块，可支撑《云计算基础》《云平台运维》《容器技术》等核心课程的教学与实训。',
        '系部以实训基地为依托，将职业技能等级标准、技能大赛赛项内容融入课程，形成“岗课赛证”融通的育人模式，学生在省市技能大赛中屡获佳绩。',
        '下一步，系部将继续深化与本地数字产业企业的合作，把真实项目引入课堂，让学生的技能成长与产业需求同频共振。'
      ]
    },
    {
      id: 6, cat: '校园新闻', dept: '招生就业处', date: '2026-10-29', views: 127,
      title: '校企同心 筑梦远航——我校成功举办 27 届五年制大专毕业生企业宣讲会',
      status: 'published', top: false, cover: 'images/news/n06.jpg',
      desc: '10 月 29 日，学校举办 27 届五年制大专毕业生企业宣讲会，20 余家企业进校宣讲，为学生搭建精准对接平台。',
      body: [
        '10 月 29 日，学校举办 2027 届五年制大专毕业生企业宣讲会。来自智能制造、信息技术、现代商贸等领域的 20 余家企业进校宣讲。',
        '宣讲会上，企业负责人围绕行业发展趋势、岗位能力要求、薪酬福利与职业晋升通道作了详细介绍，并与学生现场互动答疑。',
        '学校招生就业处同步设置政策咨询台，为学生提供简历诊断、面试指导、就业政策解读等服务，帮助学生提升求职竞争力。',
        '学校将持续推进“访企拓岗”行动，拓宽就业渠道，为毕业生高质量就业保驾护航。'
      ]
    },
    {
      id: 7, cat: '教学研究', dept: '教学管理处', date: '2026-11-03', views: 125,
      title: '开题启新程，研思促成长——我校召开 2026 年度立项研究课题开题论证会',
      status: 'published', top: false, cover: 'images/news/n07.jpg',
      desc: '11 月 3 日，学校召开江苏联合职业技术学院 2026 年度立项研究课题及苏州市职业教育学会课题开题论证与指导会。',
      body: [
        '11 月 3 日，学校召开江苏联合职业技术学院 2026 年度立项研究课题及苏州市职业教育学会 2026 年度职业教育研究课题开题论证与指导会。',
        '各课题负责人围绕研究背景、研究目标、研究内容、研究方法、预期成果等方面作了汇报。专家组逐一点评，就课题的聚焦度、可行性、成果转化路径提出修改建议。',
        '会议指出，课题研究要扎根课堂、服务教学，把研究成果转化为可复制的教学方案与实训标准，避免“重立项、轻落地”。',
        '学校将持续加强教科研过程管理，为课题研究提供经费、平台与团队支持。'
      ]
    },
    {
      id: 8, cat: '学工动态', dept: '学生工作处', date: '2026-11-08', views: 92,
      title: '阳光德育润心田——我校开展“五心”主题教育实践活动',
      status: 'review', top: false, cover: 'images/news/n08.jpg',
      desc: '学校围绕“红心、仁心、恒心、匠心、创心”五维育人体系，组织开展了形式多样的主题教育实践活动。',
      body: [
        '为深入落实“五心”育人体系，学校学生工作处统筹各系部，组织开展了“五心”主题教育实践系列活动。',
        '活动以主题班会、志愿服务、技能展示、劳模进校园等形式展开，引导学生在实践中理解“红心铸魂、仁心修身、恒心砺学、匠心强技、创心赋能”的育人内涵。',
        '各系部结合专业特色设计活动载体：信息工程系开展“数字助老”志愿服务，机械与汽车工程系组织技能作品展，经济贸易系举办职业礼仪大赛。',
        '下一步，学校将把“五心”主题融入日常德育课程与校园文化建设，形成常态化育人机制。'
      ]
    },
    {
      id: 9, cat: '校园新闻', dept: '教务处', date: '2026-11-09', views: 173,
      title: '技能成才 强国有我——我校学子在 2026 年省职业院校技能大赛中再获佳绩',
      status: 'published', top: false, cover: 'images/news/n09.jpg',
      desc: '在 2026 年江苏省职业院校技能大赛中，我校选手沉着应战、奋勇拼搏，共获得一等奖 3 项、二等奖 6 项、三等奖 9 项。',
      body: [
        '近日，2026 年江苏省职业院校技能大赛各赛项陆续收官。我校选手在多个赛项中沉着应战、奋勇拼搏，共获得一等奖 3 项、二等奖 6 项、三等奖 9 项。',
        '备赛期间，各系部组建教练团队，制定“一人一策”训练方案，放弃节假日休息，在实训车间反复打磨每一个操作细节。',
        '学校坚持“以赛促教、以赛促学、以赛促改”，把大赛标准融入课程标准，把赛项任务转化为教学项目，让更多学生在真实任务中提升技能。',
        '下一步，学校将对获奖选手与指导教师进行表彰，并总结备赛经验，推动竞赛成果向教学资源转化。'
      ]
    },
    {
      id: 10, cat: '校园新闻', dept: '保卫处', date: '2026-11-05', views: 88,
      title: '筑牢安全防线 守护平安校园——学校开展消防安全应急疏散演练',
      status: 'published', top: false, cover: 'images/news/n10.jpg',
      desc: '11 月 5 日，学校组织全体师生开展消防安全应急疏散演练，进一步提升师生应急处置与自救互救能力。',
      body: [
        '11 月 5 日上午，随着警报声响起，学校消防安全应急疏散演练正式开始。各班学生在班主任和任课教师引导下，按照预定路线快速有序撤离至指定集合区域。',
        '整个疏散过程用时 3 分 20 秒，全体师生安全到达集合点，各班清点人数并逐级上报，演练达到预期效果。',
        '演练结束后，消防专业人员现场讲解了灭火器使用方法和火场逃生要领，并组织师生代表进行实操体验。',
        '学校将以此次演练为契机，持续完善应急预案，常态化开展安全教育，为师生营造安全稳定的校园环境。'
      ]
    },
    {
      id: 11, cat: '系部风采', dept: '机械与汽车工程系', date: '2026-11-07', views: 64,
      title: '把课堂搬进车间，让技能对接岗位——机械与汽车工程系数控专业教学改革纪实',
      status: 'published', top: false, cover: 'images/news/n11.jpg',
      desc: '机械与汽车工程系依托国家级数控技术应用实训基地，推行“车间课堂”教学模式，让学生在真实生产任务中练技能。',
      body: [
        '在国家级数控技术应用实训基地，机械与汽车工程系的学生正围在机床旁，按照企业下发的图纸完成零件加工。',
        '系部推行“车间课堂”教学模式，把企业真实订单转化为教学任务，学生以班组形式承接任务，完成工艺编制、程序编写、加工检测全流程。',
        '“以前是先学理论再练习，现在是带着任务学、对着标准做。”一位专业教师说，学生的质量意识和规范意识明显增强。',
        '系部还与本地多家制造企业共建校外实训基地，定期选派教师下企业实践，把新技术、新工艺带回课堂。'
      ]
    },
    {
      id: 12, cat: '部门新闻', dept: '经济贸易系', date: '2026-11-04', views: 57,
      title: '经济贸易系举办 2026 年职业礼仪风采大赛',
      status: 'published', top: false, cover: 'images/news/n12.jpg',
      desc: '11 月 4 日，经济贸易系举办职业礼仪风采大赛，来自会计、电商、市场营销等专业的 12 支队伍同台展示。',
      body: [
        '11 月 4 日，经济贸易系职业礼仪风采大赛在报告厅举行，来自会计事务、电子商务、市场营销等专业的 12 支队伍参赛。',
        '比赛分为仪容仪表展示、商务情景模拟、服务礼仪问答三个环节，重点考察学生的职业形象、沟通表达与应变能力。',
        '参赛选手着装规范、举止得体，在情景模拟中展现出良好的职业素养，赢得现场师生阵阵掌声。',
        '系部负责人表示，职业礼仪是商贸类专业学生的重要软实力，系部将把礼仪训练纳入日常教学，帮助学生更好适应岗位要求。'
      ]
    },
    {
      id: 13, cat: '校园新闻', dept: '团委', date: '2026-10-22', views: 201,
      title: '青春心向党 建功新时代——学校举行 2026 年十八岁成人仪式',
      status: 'published', top: false, cover: 'images/news/n13.jpg',
      desc: '10 月 22 日，学校为 2024 级学生举行十八岁成人仪式，引导学生扣好人生第一粒扣子，增强责任意识与家国情怀。',
      body: [
        '10 月 22 日下午，学校举行“青春心向党 建功新时代”十八岁成人仪式，2024 级全体学生及家长代表参加。',
        '仪式上，学生面向国旗庄严宣誓，教师与家长代表为学生佩戴成人纪念章，寄语青年学子勇担时代责任。',
        '校领导在致辞中勉励同学们：成人不仅是年龄的跨越，更是责任的担当，要把个人成长融入国家发展，用技能成就出彩人生。',
        '仪式最后，学生们在签名墙上写下青春誓言，并集体走过“成人门”，标志着人生新阶段的开启。'
      ]
    }
  ],
  messages: [
    { id: 1, name: '李同学家长', phone: '138****6621', time: '2026-11-12 08:40', content: '请问 2026 年五年一贯制招生什么时候开始报名？需要准备哪些材料？', status: 'unread' },
    { id: 2, name: '王同学', phone: '159****3308', time: '2026-11-11 15:22', content: '想了解计算机网络技术专业的实训条件和就业方向，谢谢。', status: 'unread' },
    { id: 3, name: '张先生', phone: '137****9012', time: '2026-11-09 10:05', content: '学校是否提供住宿？宿舍几人间？', status: 'done' }
  ],
  slides: [
    { id: 's1', name: '校园全景（官网 banner）', data: 'images/hero.jpg', on: true },
    { id: 's2', name: '校园环境 · 教学楼', data: 'images/campus/c1.jpg', on: false },
    { id: 's3', name: '数控实训车间', data: 'images/campus/c4.jpg', on: false }
  ],
  logs: [
    { time: '2026-11-12 09:20', user: '管理员', act: '发布文章', target: '关于举办张家港市职业院校第十届“读写结合”作文大赛的通知', ip: '10.69.3.21' },
    { time: '2026-11-12 08:41', user: '招生就业处', act: '提交审核', target: '2026 年招生简章发布：28 个专业面向全市招生', ip: '10.69.3.45' },
    { time: '2026-11-11 17:30', user: '信息工程系', act: '保存草稿', target: '信息工程系“云计算技术应用”专业实训基地建设纪实', ip: '10.69.4.12' },
    { time: '2026-11-11 14:02', user: '管理员', act: '修改栏目', target: '新闻中心 / 系部风采', ip: '10.69.3.21' },
    { time: '2026-11-10 16:22', user: '教务处', act: '发布文章', target: '聚焦学考谋全局，锚定目标创一流——我校召开 2026 年省中职学业水平考试技能考试专题会议', ip: '10.69.2.88' }
  ],
  users: [
    { id: 1, name: '管理员', acct: 'admin', role: '超级管理员', dept: '信息工程系', last: '2026-11-12 09:20', status: 'on' },
    { id: 2, name: '教务处编辑', acct: 'jwc', role: '内容编辑', dept: '教学管理处', last: '2026-11-10 16:20', status: 'on' },
    { id: 3, name: '招生就业处编辑', acct: 'zsb', role: '内容编辑', dept: '招生就业处', last: '2026-11-12 08:41', status: 'on' },
    { id: 4, name: '系部通讯员', acct: 'xtb', role: '通讯员', dept: '各系部', last: '2026-11-11 17:30', status: 'off' }
  ]
};

const Store = (function () {
  const KEY = 'zjg_portal_v4';
  let db = null;

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        db = JSON.parse(raw);
        if (!db.news) throw new Error('bad');
        db.slides = db.slides || [];
        db.media = db.media || [];
      } else {
        db = clone(DEFAULTS);
        save();
      }
    } catch (e) {
      db = clone(DEFAULTS);
    }
    return db;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* 隐私模式忽略 */ }
  }
  function nextId(arr) { return arr.reduce((m, x) => Math.max(m, +x.id || 0), 0) + 1; }

  load();

  return {
    get all() { return db; },
    news() { return clone(db.news).sort((a, b) => (b.top ? 1 : 0) - (a.top ? 1 : 0) || (a.date < b.date ? 1 : -1)); },
    newsAll() { return clone(db.news); },
    get(id) { const n = db.news.find(x => +x.id === +id); return n ? clone(n) : null; },
    published() { return this.news().filter(n => n.status === 'published'); },
    upsert(data) {
      if (data.id) {
        const i = db.news.findIndex(x => +x.id === +data.id);
        if (i > -1) db.news[i] = Object.assign({}, db.news[i], data);
      } else {
        data.id = nextId(db.news);
        data.views = 0;
        db.news.push(data);
      }
      save();
      return data.id;
    },
    remove(id) { db.news = db.news.filter(x => +x.id !== +id); save(); },
    setStatus(id, status) {
      const n = db.news.find(x => +x.id === +id);
      if (n) { n.status = status; save(); }
    },
    toggleTop(id) {
      const n = db.news.find(x => +x.id === +id);
      if (n) { n.top = !n.top; save(); }
    },
    cats() { return clone(db.cats); },
    addCat(name, parent) {
      if (!name) return false;
      db.cats.push({ id: 'c' + nextId(db.cats), name, parent: parent || '其他' });
      save(); return true;
    },
    removeCat(id) { db.cats = db.cats.filter(c => c.id !== id); save(); },
    messages() { return clone(db.messages); },
    replyMsg(id) { const m = db.messages.find(x => +x.id === +id); if (m) { m.status = 'done'; save(); } },
    users() { return clone(db.users); },
    logs() { return clone(db.logs); },
    addLog(act, target) {
      db.logs.unshift({
        time: new Date().toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-'),
        user: '管理员', act, target: target || '', ip: '10.69.3.21'
      });
      db.logs = db.logs.slice(0, 60);
      save();
    },
    stats() {
      const n = db.news;
      return {
        total: n.length,
        published: n.filter(x => x.status === 'published').length,
        review: n.filter(x => x.status === 'review').length,
        draft: n.filter(x => x.status === 'draft').length,
        views: n.reduce((s, x) => s + (+x.views || 0), 0),
        unread: db.messages.filter(m => m.status === 'unread').length
      };
    },
    reset() { db = clone(DEFAULTS); save(); },

    /* ---------- 图片素材库 ---------- */
    media() { return clone(db.media || []); },
    addMedia(name, data, size) {
      db.media = db.media || [];
      const m = {
        id: 'm' + Date.now(),
        name: name || '未命名图片',
        data: data,
        size: size || 0,
        time: new Date().toISOString().slice(0, 10)
      };
      db.media.unshift(m);
      try {
        localStorage.setItem(KEY, JSON.stringify(db));
      } catch (e) {
        db.media.shift();
        return null;   /* 空间不足 */
      }
      return m;
    },
    removeMedia(id) {
      db.media = (db.media || []).filter(m => m.id !== id);
      save();
    },
    mediaUsage() {
      /* 统计每张素材被多少篇文章用作封面 */
      const map = {};
      db.news.forEach(n => { if (n.cover) map[n.cover] = (map[n.cover] || 0) + 1; });
      return map;
    },
    slides() { return clone(db.slides || []); },
    addSlide(name, data) {
      db.slides = db.slides || [];
      const s = { id: 's' + Date.now(), name: name || '未命名轮播', data: data, on: true };
      db.slides.push(s);
      try {
        localStorage.setItem(KEY, JSON.stringify(db));
      } catch (e) {
        db.slides.pop();
        return null;
      }
      return s;
    },
    removeSlide(id) {
      db.slides = (db.slides || []).filter(s => s.id !== id);
      save();
    },
    toggleSlide(id) {
      const s = (db.slides || []).find(x => x.id === id);
      if (s) { s.on = !s.on; save(); }
    },
    moveSlide(id, dir) {
      const a = db.slides || [];
      const i = a.findIndex(s => s.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= a.length) return;
      const t = a[i]; a[i] = a[j]; a[j] = t;
      save();
    },
    activeSlide() {
      const s = (db.slides || []).filter(x => x.on);
      return s.length ? s[0].data : '';
    },
    exportAll() {
      return JSON.stringify(db, null, 1);
    },
    importAll(txt) {
      const o = JSON.parse(txt);
      if (!o || !o.news) throw new Error('格式不正确');
      db = o;
      db.slides = db.slides || [];
      save();
      return true;
    }
  };
})();

/* 状态显示映射 */
const STATUS_MAP = {
  published: { t: '已发布', cls: 'ok' },
  review: { t: '待审核', cls: 'wait' },
  draft: { t: '草稿', cls: 'draft' },
  offline: { t: '已下架', cls: 'draft' }
};
