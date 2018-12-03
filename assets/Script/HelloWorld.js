cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, () => {
            let canvas = document.getElementById('GameCanvas');
            let str = canvas.toDataURL();
            let div=document.createElement("div");
            let img = new Image();
            img.onload = () => {
                let texture = new cc.Texture2D();
                texture.initWithElement(img);
                texture.handleLoadedTexture();
                let spriteFrame = new cc.SpriteFrame(texture);
                let spriteNode = new cc.Node();
                let sprite = spriteNode.addComponent(cc.Sprite);
                sprite.spriteFrame = spriteFrame;
                this.node.addChild(spriteNode);
                spriteNode.scale = 0.4;
            };
            //img.setAttribute('position','absolute');
            // img.setAttribute('height','400px');
            // img.setAttribute('width','600px');
            div.style.position='absolute';
            div.setAttribute('z-index','99');
            img.src = str;
            div.appendChild(img);
            window.document.body.appendChild(div);
        });
    },

    // called every frame
    update: function (dt) {

    },
});
