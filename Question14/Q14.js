// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out 
// a new set of invitations. You’ll have to think of someone else to invite.
let names = ["Zohaib", "Majid", "Danish"];
let message = ["you are invited for dinner at my home."];
for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < message.length; j++) {
        console.log(`Hi ${names[i]}, ${message}`);
    }
}
console.log(`Unfortunately ${names[2]} is not joining us for some reason`);
export {};
