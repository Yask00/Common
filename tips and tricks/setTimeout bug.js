for (var i = 0; i < 5; i+=1) {
    setTimeout(() => {
        console.log(i * 1000);
    }, 1000)
};

for (var i = 0; i < 5; i+=1) {
    doSetTimeout(i);
};

for (var i = 0; i < 5; i+=1) {
    (function(index) {
        setTimeout(() => { console.log(index * 1000);}, 1000);
    })(i);
}

for (let i = 0; i < 5; i+=1) {
    setTimeout(() => {
        console.log(i * 1000);
    }, 1000)
};

function doSetTimeout (i) {
    setTimeout(() => console.log(i * 1000), (i * 1000));
}