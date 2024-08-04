let span = document.getElementById("count")
setTimeout(() => {
    span.innerHTML = 10;
    setTimeout(() => {
        span.innerHTML = 9;
        setTimeout(() => {
            span.innerHTML = 8;
            setTimeout(() => {
                span.innerHTML = 7;
                setTimeout(() => {
                    span.innerHTML = 6;
                    setTimeout(() => {
                        span.innerHTML = 5;
                        setTimeout(() => {
                            span.innerHTML = 4;
                            setTimeout(() => {
                                span.innerHTML = 3;
                                setTimeout(() => {
                                    span.innerHTML = 2;
                                    setTimeout(() => {
                                        span.innerHTML = 1;
                                        setTimeout(() => {
                                            span.innerHTML = "Happy Independence day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);