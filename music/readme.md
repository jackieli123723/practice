# 一个简单的音乐播放器

已完成功能: 

* 登录/注册
* 获取歌单
* 获取歌曲列表
* 播放单曲
* 播放列表(查看/删除/清空)
* 播放面板(上一首/下一首/点击调整进度)
* 歌词同步播放

todo: DEBUG、个人歌单、管理员功能

歌单数据均来源于网易云音乐api,通过nodejs代理
frontEnd中是前端部分源码

前后端已整合
node启动前需要自行打开mongodb数据库接口

	npm install
	npm run dev 			


    //接口详情
	mongoose.connect('mongodb://localhost:27018/music', ...
	
数据库目前的数据结构(目前仅实现基础登录功能):

	username: String,
    password: String,
    isAdmin:{
        type: Boolean,
        default:false
    }

![Alt text](https://github.com/leat14536/practice/blob/gh-pages/music/images/4.png?raw=true)
![Alt text](https://github.com/leat14536/practice/blob/gh-pages/music/images/1.png?raw=true)
