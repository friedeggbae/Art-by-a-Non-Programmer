"use strict";
/* 
Description:
ICE 1-2: Adding another parameter to the object. I added size.

Author: 
Christine Van

Class:
IGME 102, Prof Al Biles
 */

/* setup() runs once before starting the animation loop
 */
let d1;
let drunks = [];
let drunks2 = [];
let num = 1000;
let num2 = 100;

function setup() {
	createCanvas(600, 600);

	colorMode(HSB); // Use Hue/Saturation/Brightness color model
    //create objects in setup
   //d1 = new Drunkard(width/2, height/2,random(360), 10);
    for(let i=0;i<num;i++){
        drunks.push(new Drunkard(random(width),random(height),40,random(5),random(0.5,5)));
    }
    for(let i=0;i<10;i++){
        drunks2.push(new Drunkard(random(width),random(height),40,random(5),random(5,20)));
    }
}

/* draw() draws the next random step
 */
function draw() {
    	background(0); // Black canvas background
//d1.display();
    //d1.move();
   for(let i=0;i<num;i++){
       drunks[i].move();
        drunks[i].display();
   }
    for(let i=0;i<10;i++){
     drunks2[i].move();
        drunks2[i].display();}
}
