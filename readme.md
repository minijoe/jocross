![jocross.js logo](https://github.com/minijoe/jocross/blob/master/logo.png)
======
### 欢迎使用 jocross.js
jocross.js 是微信小游戏上的一个交叉营销组件，找作者收录小游戏后，接入代码即可展示相关游戏入口（其他游戏能展示自己游戏入口），目前展示逻辑为随机展示三个入口，未来会根据贡献调整展现几率。
![jocross.js sample](https://github.com/minijoe/jocross/blob/master/sample.jpg)



### 功能

* 不受引擎限制,不需在渲染循环中调用,简单易用
* 利用wx.createUserInfoButton实现所有元素展示
* 提供现成远端接口和临时收录方式



### 如何开始
#### 第1步，联系花叔（微信：minijoe）收录游戏，请提供以下资料
* 小游戏名字
* 小游戏logo
* 小游戏简介，9字以内
* 小游戏appid
* 小游戏的小程序码或者带小程序的海报图片（用以没法直接跳转时展示）
#### 第2步，检出本github，并把jocross文件夹放在微信小游戏项目的根目录，在相关的js文件中页头引入jocross.js
```javascript
import jocross from "jocross/jocross.js"
```
#### 第3步，在需要展示的位置初始化代码
```javascript
var myCross = new jocross({
   appid: 'xxxxx',
   host:'wxnodes.cn',
   forceDiy: true
})
```

### API或文档
#### 参数
* appid, 必须，小游戏的appid
* host，必须，远程数据接口所在域名，需要再微信mp.weixin.qq.com登陆并配置服务器域名，请暂时使用wxnodes.cn
* forceDiy，默认false，是否强制使用自定义样式模式，默认小游戏未授权获取用户资料权限时，jocross会调用系统wx.showActionSheet菜单模式，但授权后会以自定义样式模式显示；如果指定为true，那么不管怎样，都会使用自定义样式模式
#### 属性
* isShow，当前是否显示
#### 方法
* show，显示
* close, 关闭

### 真实案例
![jocross.js code](https://github.com/minijoe/jocross/blob/master/code.jpg)


### 支持或联系
关注

![jocross.js gcode](https://github.com/minijoe/jocross/blob/master/qrcode.jpg)

或联系 23456325@qq.com
### 注
想要直接跳转，需私下联系对方小游戏开发者，并一起绑定同一个公众号

### License
This content is released under the (http://opensource.org/licenses/MIT) MIT License.
