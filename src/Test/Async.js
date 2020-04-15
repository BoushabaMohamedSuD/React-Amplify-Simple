const tick = Date.now();
const log = (v) => console.log(`${v} >>>>> Elapsed: ${Date.now() - tick}ms`);

const timeout = ms => new Promise(res => setTimeout(res, ms))

const codeBlocker = async () => {
    await timeout(1000)
    log('process');
    return 'by';
}

const execute = async () => {
    //let a = await codeBlocker();
    codeBlocker()
        .then(a => {
            log("ok");
            return Promise.all([a]);
        })

    /* log("ok");
     return Promise.all([a]);*/
}
execute().then((data) => log(data))

log('hi');