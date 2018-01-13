 // Global variables
 var img;
 var bgImg;
 // upload
 function upload() {
   var mainImgCanvas = document.getElementById('mainImgCanvas');
   var fileInput = document.getElementById('fileInput');
   img = new SimpleImage(fileInput);
   img.drawTo(mainImgCanvas);
   return img;
 };

 // bgUpload
 function bgUpload() {
   var bgImgCanvas = document.getElementById('bgImgCanvas');
   var bgImgInput = document.getElementById('bgImgInput');
   bgImg = new SimpleImage(bgImgInput);
   bgImg.drawTo(bgImgCanvas);
 }

 // makeGray
 function makeGray() {
   // canvas
   var toGrayCanvas = document.getElementById('toGrayCanvas');
   // new instance of img
   var toGrayImg = new SimpleImage(img);
   for (var px of toGrayImg.values()) {
     // setting average color value
     var avg = (px.getRed() + px.getGreen() + px.getBlue()) / 3;
     // settting all to avg
     px.setRed(avg);
     px.setGreen(avg);
     px.setBlue(avg);
   }
   toGrayImg.drawTo(toGrayCanvas);
 };
 // Add frame
 function addFrame(thickness) {
   var addFrameCanvas = document.getElementById('addFrameCanvas');
   var toFrameImg = new SimpleImage(img);
   var rangeInput = document.getElementById('rangeInput');

   thickness = rangeInput.value;

   for (var px of toFrameImg.values()) {
     // getting the width and the height of the toFrameImg..
     var width = toFrameImg.getWidth();
     var height = toFrameImg.getHeight();
     // getting the X and Y of pixels
     var x = px.getX();
     var y = px.getY();

     // borders logic:
     if (x < thickness || x > width - thickness || y < thickness || y > height - thickness) {
       px.setRed(0);
       px.setGreen(0);
       px.setBlue(0);
     }
   }
   toFrameImg.drawTo(addFrameCanvas);
 };

 // Change background
 function bgChanger() {
   // new instance of the img 
   var fgImg = new SimpleImage(img);
   // getting the canvas and the context
   var bgImgCanvas = document.getElementById('bgImgCanvas');
   var bgImgCanvasCtx = bgImgCanvas.getContext('2d');
   // check image is uploaded
   if (bgImg == null || !bgImg.complete()) {
     alert('background image couldn!t be louded');
     retutn;
   }
   for (var px of fgImg.values()) {
     var x = px.getX();
     var y = px.getY();
     // getting background image pixels
     var bgPixel = bgImg.getPixel(x, y);
     // setting a green vlaue
     var greenValue = px.getRed() + px.getBlue();
     // logic: if green is more than my green vlaue then swap every px from img with bgImg px
     if (px.getGreen() >= greenValue) {
       fgImg.setPixel(x, y, bgPixel)
     } else { // otherwise set it to ts original.
       fgImg.setPixel(x, y, px)
     }
   }
   // clearing bgImgCanvas
   bgImgCanvasCtx.clearRect(0, 0, bgImgCanvas.width, bgImgCanvas.height);
   // drawing the new img
   fgImg.drawTo(bgImgCanvas);
 }

 // red filter
 function redFilter() {
   // new instance of the img 
   var redImg = new SimpleImage(img);
   // canvas 
   var redFilterCanvas = document.getElementById('redFilterCanvas');
   // logic:
   for (var px of redImg.values()) {
     var avg = px.getRed() + px.getGreen() + px.getBlue() / 3;
     if (avg <= 128) {
       px.setRed(2 * avg);
       px.setGreen(0);
       px.setBlue(0);
     } else {
       px.setRed(255);
       px.setGreen(2 * avg - 255);
       px.setBlue(2 * avg - 255);
     }
   }
   redImg.drawTo(redFilterCanvas);
 };

 // blur filter
 function blurFilter() {
   // new instance of the img 
   var blurImg = new SimpleImage(img);
   // canvas 
   var blurFilterCanvas = document.getElementById('blurFilterCanvas');
   // logic:
   for (var px of blurImg.values()) {
     var imgWidth = blurImg.getWidth();
     var imgHeight = blurImg.getHeight();
     var x = px.getX();
     var y = px.getY();

     if (x > 20 && x < imgWidth - 20) {
       blurImg.setPixel(x + 4, y, px)
     }
     if (y > 20 && y < imgHeight - 20) {
       blurImg.setPixel(x, y + 2, px)
     }
   }
   blurImg.drawTo(blurFilterCanvas);
 };

 // Others
 function othersFilter() {

 };


// Rainbow::: ////////////// ::: 

// Rainbow filter
function rainbowFilter(){
  // new instance of the img 
	var rainbowImg = new SimpleImage(img);
  // canvas 
	var rainbowFilterCanvas = document.getElementById('rainbowFilterCanvas');
  // logic:
  for(var px of rainbowImg.values()){
    var avg = px.getRed() + px.getGreen() + px.getBlue() /3;
    var height = rainbowImg.getHeight();
    var y = px.getY();

    // make 7 srtipes
    var stripe1 = height / 7;
    var stripe2 = 2 * stripe1;
    var stripe3 = 3 * stripe1;
    var stripe4 = 4 * stripe1;
    var stripe5 = 5 * stripe1;
    var stripe6 = 6 * stripe1;
    var stripe7 = 7 * stripe1;
    // stripe no 1
    if (y < stripe1){ 
      // make red
       if (avg <= 128){
          px.setRed(2 * avg);
          px.setGreen(0);
          px.setBlue(0);
        } else {
          px.setRed(255);
          px.setGreen(2 * avg - 255);
          px.setBlue(2 * avg - 255);
        }
    }

    // stripe no 2
    if (y > stripe1 && y < stripe2){ 
      // make orange
       if (avg <= 128){
          px.setRed(2 * avg);
          px.setGreen(0.8 * avg);
          px.setBlue(0);
        } else {
          px.setRed(255);
          px.setGreen(1.2* avg - 51);
          px.setBlue(2 * avg - 255);
        }
    }

     // stripe no 3
    if (y > stripe2 && y < stripe3){ 
      // make  yellow
       if (avg <= 128){
          px.setRed(2 * avg);
          px.setGreen(2 * avg);
          px.setBlue(0);
        } else {
          px.setRed(255);
          px.setGreen(255);
          px.setBlue(2 * avg - 255);
        }
    }

     // stripe no 4
    if (y > stripe3 && y < stripe4){ 
      // make green
       if (avg <= 128){
          px.setRed(0);
          px.setGreen(2 * avg);
          px.setBlue(0);
        } else {
          px.setRed(2 * avg - 255);
          px.setGreen(255);
          px.setBlue(2 * avg - 255);
        }
    }

     // stripe no 5
    if (y > stripe4 && y < stripe5){ 
      // make blue
       if (avg <= 128){
          px.setRed(0);
          px.setGreen(0);
          px.setBlue(2 * avg);
        } else {
          px.setRed(2 * avg - 255);
          px.setGreen(2 * avg - 255);
          px.setBlue(255);
        }
    }

     // stripe no 6
    if (y > stripe5 && y < stripe6){ 
      // make  indigo
       if (avg <= 128){
          px.setRed(0.8 * avg);
          px.setGreen(0);
          px.setBlue(2 * avg);
        } else {
          px.setRed(1.2 * avg - 51);
          px.setGreen(2 * avg - 255);
          px.setBlue(255);
        }
    }

     // stripe no 7
    if (y > stripe6 && y < stripe7){ 
      // make  violet
       if (avg <= 128){
          px.setRed(1.6 * avg);
          px.setGreen(0);
          px.setBlue(1.6 * avg);
        } else {
          px.setRed(0.4 * avg + 153);
          px.setGreen(2 * avg - 255);
          px.setBlue(0.4 * avg + 153);
        }
    }
       
  } // end for loop
  rainbowImg.drawTo(rainbowFilterCanvas);
};

// no white filter
 function noWhiteFilter() {
   // new instance of the img 
   var noWhiteImg = new SimpleImage(img);
   // canvas 
   var noWhiteFilterCanvas = document.getElementById('noWhiteFilterCanvas');
   // logic:
   for (var px of noWhiteImg.values()) {
     var avg = px.getRed() + px.getGreen() + px.getBlue() / 3;
     if (avg <= 128) {
       px.setRed(2 * avg);
       px.setGreen(0);
       px.setBlue(0);
     } else {
       px.setRed(255);
       px.setGreen(2 * avg - 255);
       px.setBlue(2 * avg - 255);
     }
   }
   noWhiteImg.drawTo(noWhiteFilterCanvas);
 };

