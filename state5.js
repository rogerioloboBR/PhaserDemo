demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ='#999966';
        console.log('state5');
        addChangeStateEventListener()
    },
    update: function(){}
}