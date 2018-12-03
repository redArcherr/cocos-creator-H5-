# cocos creator H5实现截图并长安保存
思路：在cc.director.once(cc.Director.EVENT_AFTER_DRAW，function(){})的回调内利用canvas截图，并把图片数据传给新建的img标签，利用样式将图片置顶即可。
