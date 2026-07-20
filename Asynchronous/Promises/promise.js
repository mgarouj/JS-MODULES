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