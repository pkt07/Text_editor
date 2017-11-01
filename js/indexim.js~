// Code goes here

var greenValue;
var fgimg = null; 
var bgimg = null;


function fgUploade(){
  var fgimgCanvas = document.getElementById('fgimgCanvas');
  var fgimgInput = document.getElementById('fgimgInput');
   fgimg = new SimpleImage(fgimgInput);
  for (var px of fgimg.values()){
    
  }
  fgimg.drawTo(fgimgCanvas);
}

function bgUploade(){
  var bgimgCanvas = document.getElementById('bgimgCanvas');
  var bgimgInput = document.getElementById('bgimgInput');
   bgimg = new SimpleImage(bgimgInput);
  for (var px of bgimg.values()){
    
  }
  bgimg.drawTo(bgimgCanvas);
}

function merge(){
	if(fgimg == null || !fgimg.complete()){alert('foreground image couldn!t be louded'); return;}
	if(bgimg == null || !bgimg.complete()){alert('background image couldn!t be louded'); retutn;}
	var outputCanvas = document.getElementById('outputCanvas');
	
	var outputimg = new SimpleImage(fgimg.getWidth(), fgimg.getHeight());
	
	for (var px of fgimg.values()){
		var x = px.getX();
		var y = px.getY();
		var bgPixel = bgimg.getPixel(x, y);
		greenValue = px.getRed() + px.getBlue();
		if(px.getGreen() >= greenValue){
			outputimg.setPixel(x,y, bgPixel) 
		} else{
			outputimg.setPixel(x, y, px) 
		}
		
	}
  outputimg.drawTo(outputCanvas);
}
  
