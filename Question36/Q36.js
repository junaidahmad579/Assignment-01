// Question //
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. 
let make_shirt = (size = "Large", message = "I Love Typescript") => {
    if (size === "Large" || size === "Medium") {
        console.log(`Shirt is ${size} sized by default`);
        console.log(`Message: I love TypeScript\n`);
    }
    else {
        console.log(`Shirt is ${size} sized`);
        console.log(`Message: ${message}`);
    }
    ;
};
make_shirt();
make_shirt(80, "Behind you skipper");
export {};
