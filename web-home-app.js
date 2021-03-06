var express = require('express')
var path = require('path')

// 创建app
var app = express()

//公开public的资源
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

//配置使用模板引擎
app.engine('html', require('express-art-template'))

var comments = [{
        url: 'http://111.230.232.189:8000',
        img: './public/images/tianwen.png',
        msgheader: '天文科普网',
        msg1: '美工+前端：小铛铛',
        msg2: '后台：小铛铛'

    },
    {
        url: 'http://111.230.232.189:8001',
        img: './public/images/dr-jisuanjixi.png',
        msgheader: '广东东软学院计算机系网(账号:AAA,密码:123)',
        msg1: '美工+前端：小铛铛&小组',
        msg2: '后台：小铛铛'

    },
    {
        url: 'http://111.230.232.189:8002',
        img: './public/images/tianqi.png',
        msgheader: '天气查询网',
        msg1: '美工：未完善',
        msg2: '前端+后台：小耶耶'

    },
    {
        url: '/op',
        img: './public/images/hzw-poster.png',
        msgheader: 'One Piece 海贼王',
        msg1: '美工：小铛铛',
        msg2: '前端+后台：小铛铛'

    },
    {
        url: 'http://111.230.232.189:8003',
        img: './public/images/gulugulu-fm.png',
        msgheader: 'GULUGULU 视频直播网站',
        msg1: '美工：Melonmelon',
        msg2: '前端+后台：小铛铛'
    },
    {
        url: 'http://111.230.232.189:8004',
        img: './public/images/animal-fm.png',
        msgheader: 'Animal 动物守护之家',
        msg1: '美工：小铛铛',
        msg2: '前端+后台：小铛铛'
    }
]


//首页
app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    })
})
//海贼王onePiece
app.get('/op', function (req, res) {
    res.render('onePiece.html')
})

//监听端口
app.listen(80, function () {
    console.log('express is running...')
})