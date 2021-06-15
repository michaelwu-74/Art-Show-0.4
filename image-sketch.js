/*Template for p5 Play library
Courtney Edwards - May 2021
This file shows an example for a sprite with an image*/

var penguinSprite;
var penguinImage;

function preload(){
  //this image is being preloaded using the preload() 
  //function. This will allow it to load fully before the 
  //program begins.
  //image source: https://gfycat.com/discover/wave-penguin-gifs
  penguinImage = loadImage('penguin0001.png');
  
}

function setup() {
  createCanvas(800,400);
  //this line is necessary to create a  sprite. Since I'm adding an image, I only need to specify the x-position and y-position
  //I also am assigning this sprite to a variable name, so that I can change its properties
  penguinSprite = createSprite(width/2, height/2);
  //now we will add an image to the penguinsprite. We loaded the image into penguinImage in the setup file, and now we're adding it to our sprite
  penguinSprite.addImage(penguinImage);

}

function draw() {
  background(255,255,255); 
  //drawSprites() is necessary in order to see the sprites on the screen 
  drawSprites();
}