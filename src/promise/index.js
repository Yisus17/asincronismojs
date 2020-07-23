const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('YASSS');
        } else {
            reject('BUUU');
        }
    });
};

// somethingWillHappen()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));


somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 5000);
        } else {
            const error = new Error('Fail 2 buuuu');
            reject(error);
        }
    });
};

// somethingWillHappen2()
//     .then(response => console.log(response))
//     .catch(error => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Results', response);
    })
    .catch(error => {
        console.error(error);
    });