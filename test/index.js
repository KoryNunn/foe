var test = require('tape'),
    initFoe = require('../');


function callbackError(callback){
    callback(new Error('EREDLABEL'));
}

function callbackNothing(callback){
    callback();
}

function callbackSomething(callback){
    callback(null, 'lagavulin');
}

function customError(){
    return new Error('ENOSCOTCH');
}

test('default not found', function(t){
    t.plan(2);

    var foe = initFoe();

    callbackNothing(foe(function(error, data){
        t.ok(error);
        t.notOk(data);
    }));
});

test('default error', function(t){
    t.plan(2);

    var foe = initFoe();

    callbackError(foe(function(error, data){
        t.ok(error);
        t.notOk(data);
    }));
});

test('default pass', function(t){
    t.plan(2);

    var foe = initFoe();

    callbackSomething(foe(function(error, data){
        t.ok(data);
        t.notOk(error);
    }));
});

test('custom not found', function(t){
    t.plan(1);

    var foe = initFoe(customError);

    callbackNothing(foe(function(error, data){
        t.equal(error.message, 'ENOSCOTCH');
    }));
});