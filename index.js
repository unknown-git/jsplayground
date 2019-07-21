let p = new Promise((resolve, reject) => {
    let a = 1;
    let b = 2;

    if (a + b === 3) {
        resolve("Success");
    } else {
        reject("Failed")
    }
});

p.then((msg) => console.log(msg));

console.log("Hello", this.p);