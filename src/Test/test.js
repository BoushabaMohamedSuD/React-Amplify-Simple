console.log("test");
const tick = Date.now();
const log = (v) => console.log(`${v} >>>>> Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
    return new Promise((resolve, reject) => {
        Promise.resolve()
            .then(() => {
                return new Promise((resolve, reject) => {
                    let i = 0;
                    while (i < 10000000) {
                        i++;
                    }
                    resolve("good")
                }).then((data) => resolve(data));
            })
    })



    /*return new Promise((resolve, reject) => {
        let i = 0;
        while (i < 10000000) {
            i++;
        }
        resolve("good")
    })*/



    /*return Promise.resolve().then(v => {
        let i = 0;
        while (i < 10000000) {
            i++;
        }
        return 'good';
    })*/

}
test = () => {
    return Promise.resolve();
}

codeBlocker().then((data) => {
    log(data)
}).catch(err => log(err));

log('hi');
