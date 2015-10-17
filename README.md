# foe

Found Or Error, If a callback recieves no error, and no data, error.

# Why

This module may be usefull for other use-cases,
but the *specific* use-case I had was mongo returning no error, and no document
when it couldnt find a doc. In some casses, i want it to error when not found.

# Usage

``` javascript

// Require and init foe with an optional custom error factory
var foe = require('foe')(function(){
    return customError();
});

// Wrap callbacks in foe.
someCall(foe(callback));
```
