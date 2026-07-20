function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, name: "John" });
            } else {
                reject("Invalid id");
            }
        }, 1000);
    });
}

getUser(1)
    .then(user => console.log(user.name))
    .catch(err => console.log(err));