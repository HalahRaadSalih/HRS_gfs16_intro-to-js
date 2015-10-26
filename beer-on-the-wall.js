var bottle = "bottle";
var ofBeer = " of beer";
var onTheWall = "on the wall";
var beerOnTheWall = ofBeer + " " + onTheWall;
var takeOneDown = "Take one down and pass it around";
var semicolonAndSpace = ", "
var numberOfBottlesLeft = 0;

for(var i = 99; i > 0 ; i--){
    
    bottle = "bottle" + ((i>1 && i-1 > 1) ? "s" : "");
    numberOfBottlesLeft = (i - 1 > 0) ? i-1 : "No more"
    
    if(i>0){
        
        console.log( i + beerOnTheWall+ semicolonAndSpace + i + ofBeer);
        console.log( takeOneDown  +semicolonAndSpace + numberOfBottlesLeft+ " " +bottle +ofBeer); 
    }
    
    if(i-1 === 0){
        bottle = "bottles";
        console.log("No more"+ bottle + beerOnTheWall + semicolonAndSpace+"no more "+  bottle + ofBeer);
    }
    
}