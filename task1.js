function logOwnPropertyOf(obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(`for key: ${key} values: ${obj[`${key}`]}`);
        }
    }
}
let emailAdress = {
    email: 'email@exemple.com'
}
let user = Object.create(emailAdress);
user.username = 'sergey';
user.surname = 'voroty';
console.log(user.surname);
logOwnPropertyOf(user);