// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
//  that stores several examples. Use your list to print a series of statements about these items, 
//  such as “I would like to own a Honda motorcycle.”
let transport = ["civic", "Reborn", "Land cruiser", "BMW"];
let statements = ["I would like to own a "];
for (let j = 0; j < statements.length; j++) {
    for (let i = 0; i < transport.length; i++) {
        console.log(statements[j] + transport[i]);
    }
}
export {};
