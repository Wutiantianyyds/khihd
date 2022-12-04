// 国际时间渲染
var t = null;
t = setTimeout(time, 1000);
function time() {
    clearTimeout(t);
    dt = new Date();
    var year = dt.getFullYear()
    var month = dt.getMonth() + 1
    var day = dt.getDate()
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    document.querySelector(".time").innerHTML = "时间：" + year + "年-" + month + "月-" + day + "日" + h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000);
}
//创建一个新数据区分男女
var list = [{
    name: "李妍",
    sex: 0
},
{
    name: "张世权",
    sex: 1
},
{
    name: "王龙翔",
    sex: 1
},
{
    name: "徐婉颖",
    sex: 0
},
{
    name: "付高聪",
    sex: 1
},
{
    name: "吴倩",
    sex: 0
},
{
    name: "张立",
    sex: 1
},
{
    name: "巴钦",
    sex: 1
},
{
    name: "章奥博",
    sex: 1
},
{
    name: "孙铭",
    sex: 1
},
{
    name: "程怀博",
    sex: 1
},
{
    name: "张建雨",
    sex: 1
},
{
    name: "李宏恩",
    sex: 1
},
{
    name: "王伟宸",
    sex: 1
},
{
    name: "李宏恩",
    sex: 1
},
{
    name: "孙旭瑶",
    sex: 0
},
{
    name: "杨志豪",
    sex: 1
},
{
    name: "高鹏亚",
    sex: 1
},
{
    name: "宋海宇",
    sex: 1
},
{
    name: "宋增杰",
    sex: 1
},
{
    name: "侯建荞",
    sex: 0
},
{
    name: "薛翔元",
    sex: 1
},
{
    name: "郝嫚嫚",
    sex: 0
},
{
    name: "代伊涵",
    sex: 1
},
{
    name: "邓林柯",
    sex: 1
},
{
    name: "章涵语",
    sex: 1
},
{
    name: "郑锋",
    sex: 1
},
{
    name: "江萌洋",
    sex: 0
},
{
    name: "张宗耀",
    sex: 1
},
{
    name: "周璇",
    sex: 0
},
{
    name: "韩雨泽",
    sex: 1
},
{
    name: "刘艺",
    sex: 0
}

]
//   打乱数组顺序
function arraysort(count) {
    var a = new Array();
    for (var i = 0; i < count.length; i++) {
        a[i] = count[i];

    }
    a.sort(function () {
        return 0.5 - Math.random();
    })
    return a;

}
// 获取ul
var ul = document.querySelector('.ul')
// 获取选中的名字
var h2 = document.querySelector('h2')
var music = document.querySelector('.music')
// 使用事件委托 随机选中
ul.onclick = function (e) {
    if (e.target.className == 'ul') return

    if (e.target.className == 'one') {
        if (e.target.innerHTML == '单人点名') {

            select(e, '停止')
        } else {

            h2.innerHTML = `${arraysort(list)[0].name}`
            select(e, '单人点名')

        }

    }
    if (e.target.className == 'two') {
        if (e.target.innerHTML == '双人点名') {
            select(e, '停止')
        } else {
            h2.innerHTML = `${arraysort(list)[0].name}  ${arraysort(list)[1].name}`
            select(e, '双人点名')

        }

    }
    if (e.target.className == 'boy') {
        if (e.target.innerHTML == '男生点名') {
            select(e, '停止')
        } else {
            var arr = list.filter(item => item.sex == 1)
            h2.innerHTML = `${arraysort(arr)[0].name}`
            select(e, '男生点名')

        }

    }
    if (e.target.className == 'girl') {
        if (e.target.innerHTML == '女生点名') {
            select(e, '停止')
        } else {
            var arr = list.filter(item => item.sex == 0)
            h2.innerHTML = `${arraysort(arr)[0].name}`
            select(e, '女生点名')

        }
    }
}

// 点击的时候显示停止
function select(e, font) {
    if (font != '停止') {
        music.pause()//停止当前播放的音频或视频
    } else {
        music.play()//开始当前播放的音频或视频
    }
    e.target.innerHTML = font
}