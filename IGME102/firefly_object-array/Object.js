"use strict";

class Drunkard {
    
    constructor(x,y,hu,dv,size){
        this.xLoc=x;
        this.yLoc=y;
        this.dev=dv;
        this.hue=hu;
        this.hueDev = 1;
        this.diam = size;


    }
    
     move(){

    this.xLoc+=random(-this.dev,this.dev);
    this.yLoc+=random(-this.dev,this.dev);

         if(this.xLoc>width)
           this.xLoc=width;
         else if (this.xLoc<0)
             this.xLoc = 0;
         if(this.yLoc>height)
             this.yLoc=height;
              else if (this.yLoc<0)
             this.yLoc = 0;
         
    }
    
    
    display(){
      noStroke();
        //this.hue = (this.hue + this.hueDev)%360;
        fill(this.hue, 100,100,random(0,1));
        ellipse(this.xLoc,this.yLoc, this.diam,this.diam);
    }
    
   
}