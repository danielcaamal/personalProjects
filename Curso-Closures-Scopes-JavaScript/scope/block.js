const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        var fruits2 = 'banana';
        var fruits3 = 'kiwi';
    }

    console.log(fruits1);
    console.log(fruits2);
    console.log(fruits3);
};

fruits();

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction();