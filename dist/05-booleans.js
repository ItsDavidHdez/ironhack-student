"use strict";
(() => {
    let isEnable = true;
    isEnable = false;
    let isNew = true;
    console.log(isNew);
    isNew = false;
    console.log(isNew);
    const random = Math.random();
    console.log(random);
    if (random > 0.5) {
        console.log('is more that 0.5');
    }
    else {
        console.log('is less that 0.5');
    }
})();
