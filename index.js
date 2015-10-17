module.exports = function(errorFactory){
    if(!errorFactory){
        errorFactory = function(){
            return new Error('Not Found');
        };
    }

    return function(callback){
        return function(error, data){
            if(!error && !data){
                return callback(errorFactory());
            }

            callback.apply(this, arguments);
        };
    };
};