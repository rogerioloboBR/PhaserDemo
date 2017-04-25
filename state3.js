demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor ='#800000';
        console.log('state3');
        addChangeStateEventListener()
    },
    update: function(){}
}