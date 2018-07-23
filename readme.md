![jocross.js logo](https://github.com/minijoe/jocross/blob/master/logo.png)
======
### 欢迎使用 jocross.js
jocross.js 是微信小游戏上的一个交叉营销组件.

### Feature

* 跨引擎,项目中引用,简单代码实现
* 利用wx.createUserInfoButton实现所有元素展示
* 提供现成远端接口和收录平台



### 如何开始
#### 第一步，把jocross文件夹放在微信小游戏项目的根目录，在相关的js文件中页头引入jocross.js
```javascript
import jocross from "jocross/jocross.js"
```

```html
<script>
        var ps=new SPP.ParticleSystem();
        var particle=ps.createParticle(SPP.Particle);
        particle.life=3;
        particle.position.x=50;
        particle.position.y=60;
        particle.addForce("someForceName",someForce);
        particle.onUpdate=someUpdateHander;
        //particle.addEventListener("dead",deadHandler);
        particle.on("dead",deadHandler);
        animate();
        ps.start();
        
        function someUpdateHander()
        {
                ...
        };
        function deadHandler(event)
        {
                ...
        };
        
        function animate()
        {
               requestAnimationFrame(animate);
               ps.render();
               ...
        } 
<script>
```
### Examples
* [gettingStarted](http://flashhawk.github.com/spp.js/examples/gettingStarted/)
* [spriteImage](http://flashhawk.github.com/spp.js/examples/spriteImage/)
* [spp for easelJS](http://flashhawk.github.com/spp.js/examples/easelJS/)
* [spp for pixi.js](http://flashhawk.github.com/spp.js/examples/pixi/)
* [attraction](http://flashhawk.github.com/spp.js/examples/attraction/)
* [repulsion](http://flashhawk.github.com/spp.js/examples/repulsion/)

### Game
* [fruitNinja](http://flashhawk.github.com/spp.js/examples/fruitNinja/)
* [斩立觉](https://itunes.apple.com/cn/app/zhan-li-jue/id636378939?ls=1&mt=8)

### Case
* [蒙牛纯甄-立冬篇](http://flashhawk.github.io/spp.js/case/chunzhen_winter.png)

### Docs
* [Comming soon!](#)

### Tutorials
* [Comming soon!](#)

### How to build ###

Spp.js is build with ant and [closure-compiler](https://code.google.com/p/closure-compiler/wiki/BuildingWithAnt)

```
$>cd spp's root directory
```
Then build:

```
$> ant
```

### Support or Contact
Weibo: http://weibo.com/flashawk? or contact flashhawkmx@gmail.com and we’ll help you sort it out.

### License
This content is released under the (http://opensource.org/licenses/MIT) MIT License.
