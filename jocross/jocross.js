
export default class jocross {
  constructor(op) {
    if(!op.appid){
      throw(new Error('jocross组件需要请指定appid参数'))
      return
    }
    if (!op.host) {
      throw (new Error('jocross组件需要请指定host参数'))
      return
    }
    this.appid =op.appid
    this.host=op.host

    this.url ='https://'+this.host+'/Cross?appid='+this.appid

    this.op = op
    this.audio = wx.createInnerAudioContext()
    this.audio.src = op.soundSrc || 'jocross/btn_click.mp3'
    this.type=op.type||1
    var self = this
    wx.showLoading({
      title: '',
    })
    wx.request({
      url: this.url,
      success(e){
        if(e.data){
          wx.hideLoading()
          self.op.data=e.data.data
          self.key=e.data.key
          self.show()
        }else{
          console.log('网络错误')
        }
      },
      fail(e){
        wx.hideLoading()
        console.log(e)
      }
    })
    
    
    var fun = function () {
      if (self.isShow) {
        self.close()
        self.show()
      }
    }
    wx.offShow(fun)
    wx.onShow(fun)

  }

  init() {
    if (!wx.createUserInfoButton){
      wx.showModal({
        title: '提示',
        content: '该功能被限制，升级微信可解决',
      })
      return
    }
    var op = this.op
    this.width = this.type == 1 ? 442:320
    this.height = this.type == 1 ?320:380


    this.bg = wx.createUserInfoButton({
      type: 'image',
      image: this.type == 1 ? 'jocross/bg.png' : 'jocross/bg2.png',
      style: {
        left: window.innerWidth / 2 - this.width / 2,
        top: window.innerHeight / 2 - this.height / 2,
        width: this.width,
        height: this.height,
        lineHeight: 40,
        backgroundColor: '#f6f5f5',
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 0
      }
    })
    this.list = []
    var self = this
    var go = function (d,e) {
      
      return function () {

        self.audio.play()
        setTimeout(function () {

          if (wx.navigateToMiniProgram) {
            wx.navigateToMiniProgram({
              appId: d.appid,
              success(){
                //上报
                wx.request({
                  url: self.url + '&toAppid=' + d.appid + '&key=' + self.key,
                  success(e) {
                    
                  }
                })
              },
              fail(e2) {
                if (!/cancel/.test(e2.errMsg))
                  wx.previewImage({
                    urls: [d.adsrc],
                  })
              }
            })
          }
          else {
            wx.previewImage({
              urls: [d.adsrc],
            })
          }
        }, 500)
        
      }
    }
    //初始化list
    if (op.data) {
      for (var i in op.data) {
        var d = op.data[i]
        var item = {}
        item.face = wx.createUserInfoButton({
          type: 'image',
          image: d.logo,
          style: {
            left: this.bg.style.left + (this.type == 1 ? 75 : 35) + (this.type == 1 ?111:101) * parseInt(i),
            top: this.bg.style.top + (this.type == 1 ?26:83),
            width: 52,
            height: 52,
            lineHeight: 40,
            backgroundColor: '#f6f5f5',
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 16,
            borderRadius: 26
          }
        })


        var cvs = wx.createCanvas();
        var s = d.name;
        var ctx = cvs.getContext("2d");

        for (var n = 0; n < s.length; n++) {

          ctx.fillStyle = '#000000';
          ctx.font = 'bold 14px Arial';
          ctx.textAlign = 'left'; /* 在基线的水平位置上实现属性值  left right start center end */
          ctx.textBaseline = 'top'; /* 在基线的垂直位置上实现属性值  top bottom middle hanging...*/
          ctx.fillText(s[n], 0, 16 * n);
        }
        var src = cvs.toTempFilePathSync({
          x: 0,
          y: 0,
          width: 30,
          height: 200,
          destWidth: 30,
          destHeight: 200
        })


        item.name = wx.createUserInfoButton({
          type: 'image',
          image: src,
          style: {
            left: this.bg.style.left + (this.type == 1 ? 75 : 35) + (this.type == 1 ? 111 : 101) * parseInt(i) + 30,
            top: this.bg.style.top + (this.type == 1 ? 84 : 145),
            width: 30,
            height: 200,
            lineHeight: 40,
            backgroundColor: '#f6f5f5',
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 16,
            borderRadius: 0
          }
        })

        var cvs = wx.createCanvas();
        var s = d.note;
        var ctx = cvs.getContext("2d");

        for (var n = 0; n < s.length; n++) {
          ctx.fillStyle = '#abaaaa';
          ctx.font = '12px Arial';
          ctx.textAlign = 'left'; /* 在基线的水平位置上实现属性值  left right start center end */
          ctx.textBaseline = 'top'; /* 在基线的垂直位置上实现属性值  top bottom middle hanging...*/
          ctx.fillText(s[n], 0, 14 * n);
        }
        var src = cvs.toTempFilePathSync({
          x: 0,
          y: 0,
          width: 12,
          height: 200,
          destWidth: 12,
          destHeight: 200
        })
        item.note = wx.createUserInfoButton({
          type: 'image',
          image: src,
          style: {
            left: this.bg.style.left + (this.type == 1 ? 75 : 35) + (this.type == 1 ? 111 : 101) * parseInt(i) + 10,
            top: this.bg.style.top + (this.type == 1 ? 86 : 147),
            width: 12,
            height: 200,
            lineHeight: 40,
            backgroundColor: '#f6f5f5',
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 16,
            borderRadius: 0
          }
        })
        item.cover = wx.createUserInfoButton({
          type: 'image',
          image: 'jocross/s.png',
          style: {
            left: this.bg.style.left +(this.type == 1 ? 50 : 10) + (this.type == 1 ? 111 : 101) * parseInt(i) + 10,
            top: this.bg.style.top + (this.type == 1 ? 20 : 78),
            width: 80,
            height: 277,
            lineHeight: 40,
            backgroundColor:'#000000',
            color: '#ffffff',
            textAlign: 'center',
            fontSize: 16,
            borderRadius: 0
          }
        })




        item.cover.onTap(go(d, item.cover))



        this.list.push(item)
      }
    }
    var self = this
    this.shut = wx.createUserInfoButton({
      type: 'text',
      text: 'X',
      style: {
        left: this.bg.style.left + (this.type==1?404:285),
        top: this.bg.style.top + (this.type == 1 ?15:22),
        width: 28,
        textAlign: 'center',
        lineHeight: 28,
        height: 28,
        fontSize: 18,
        backgroundColor: '#ffffff'
      }
    })
    this.shut.onTap(function () {
      self.audio.play()
      setTimeout(function () {
      self.close()
      },500)
    })

    this.isShow = true

  }
  show() {
    if(!this.op.data)
    return
    var self = this
    //是否强制进入自定义模式，该模式下在未授权情况下会弹出授权框
    if (self.op.forceDiy) {
      self.init()
    } else {
      //有授权的情况直接用自定义模式，没授权情况下用系统showActionSheet方式
      wx.getSetting({
        success(e) {
          if (e.authSetting['scope.userInfo']) {
            self.init()

          } else {
            var e = self.op
            if (e.data) {
              var itemList = []
              for (var i in e.data) {
                itemList.push(e.data[i].name)
              }
              if (itemList.length > 0)
                wx.showActionSheet({
                  itemList: itemList,
                  success(e1) {
                    var index = e1.tapIndex
                    
                    wx.navigateToMiniProgram({
                      appId: e.data[index].appid,
                      fail(e2) {
                        if (!/cancel/.test(e2.errMsg))
                          wx.previewImage({
                            urls: [e.data[index].adsrc],
                          })
                      },
                      success(){
                        //上报
                        wx.request({
                          url: self.url + '&toAppid=' + e.data[index].appid + '&key=' + self.key,
                          success(e) {

                          }
                        })
                      }
                    })
                  }
                })
            }
          }
        }
      })
    }



  }
  close() {
    this.shut.destroy()
    this.bg.destroy()
    for (var i in this.list) {
      var item = this.list[i]
      for (var m in item) {
        item[m].destroy()
      }
    }
    this.isShow = false
  }

}