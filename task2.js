function objectHasProperty(obj, property) {
    let result = false
    for (let key in obj){
        if (key == property){
            result = true;
            return result;
        }
    }
    return result;
}
let emailAdress = {
    email: 'email@exemple.com'
}
let user = Object.create(emailAdress);
user.username = 'sergey';
user.surname = 'voroty';
console.log(user.surname);
console.log(objectHasProperty(user, 'email'));
console.log(objectHasProperty(user, 'username'));
console.log(objectHasProperty(user, 'cat'));