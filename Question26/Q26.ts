// QUestion //
//  Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_color1= ['green', 'yellow' , 'red'];
if (alien_color1.includes('green'))
{
    console.log("Congratulations! You just earned 5 points for shooting the alien");
}
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let alien_color2 = ["green", "yellow" , "red"] ;
if (!alien_color2.indexOf("green"))
{
    console.log("Congratulations! You just earned 10 points for shooting the alien");
}

//• Write one version of this program that runs the if block and another that runs the else block.
let alien_color3= ['green', 'yellow' , 'red' ];
if (alien_color3.includes( 'green'))
{
    console.log("Congratulations! You just earned 5 points for shooting the alien");
}
else
{
    console.log("Congratulations! You just earned 10 points for shooting the alien");
}
let alien_color4= ['green', 'yellow' , 'red' ];
if (!alien_color4.includes( 'green'))
{
    console.log("Congratulations! You just earned 5 points for shooting the alien");
}
else
{
    console.log("Congratulations! You just earned 10 points for shooting the alien");
}