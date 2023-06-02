// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name 
// of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you 
// are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let names=["Zohaib","Majid","Danish"]
let message=["you are invited for dinner at my home."]

for(let i=0; i<names.length; i++){

    for(let j=0; j<message.length; j++){

        console.log(`Hi ${names[i]}, ${message}`)
    }
}
console.log(`Unfortunately ${names[2]} is not joining us for some reason`)

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you 
// are inviting

let updatedNames=["Zohaib","Majid","Danish"]
updatedNames.pop();
updatedNames.splice(2,0,"Ahmad")

for(let i=0; i<updatedNames.length; i++){

    console.log(`Hi ${updatedNames[i]} you are invited for dinner at my home`);
}

