//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let name = "Junaid Ahmad";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
function titlecase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titlecase("junaid ahmad"));
export {};
