// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to
// each person, inviting them to dinner.

let names=["Zohaib","Majid","Danish"]
let message=["you are invited for dinner at my home."]

for(let i=0; i<names.length; i++){

    for(let j=0; j<message.length; j++){

        console.log(`Hi ${names[i]}, ${message}`)
    }
}