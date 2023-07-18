"use strict";
(() => {
    let userId;
    userId = 'asdjashdassahd';
    userId = 123;
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(myText.toLocaleUpperCase());
        }
        else {
            console.log(myText + 10);
        }
    }
    greeting('hola, soy david');
    greeting(90);
})();
