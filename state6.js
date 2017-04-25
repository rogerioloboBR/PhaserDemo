demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ='#ffff00';
        console.log('state6');
        addChangeStateEventListener()
    },
    update: function(){}
}