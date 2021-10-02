const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('HEY !!!');
        } else {
            reject('Whoooops!!');
        }
    });
}

somethingWillHappen()
    .then(Response => console.log(Response))
    .catch(error => console.error(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve,reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True - XD');
            }, 2000);
        } else {
            const error = new Error('Whoops2 !');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    // .then(() => console.log('Hola XD')) // Se pueden encadenar muchas acciones 
    .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })