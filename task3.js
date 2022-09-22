function createObjectWithoutPrototype() {
    return Object.create(null);
}
let obj = createObjectWithoutPrototype();
console.log(obj.__proto__);