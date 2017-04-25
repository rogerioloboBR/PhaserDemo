demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ='#006600';
        console.log('state8');
        addChangeStateEventListener()
    },
    update: function(){}
}