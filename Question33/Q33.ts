// Question //
// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence

let pizza: string[] = ["Fajita", "Smoked BBQ", "Peparoni", "Mexican"]
for (let i = 0; i <pizza.length; i++)
{
    console.log(pizza[i])
    if (pizza[i].length)
    {
        console.log(`My favourite flavor is ${pizza[i]} pizza\n`)
    }
}
console.log("When I was working in field, I had pizza almost twice in a month. Usually we throw parties and Pizza was mendatory")