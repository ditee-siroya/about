var tranx=150;
var trany=150;


function setup() {
  createCanvas(400, 500);
   background(230, 212, 179)
   translate( tranx,trany) 
    stroke(132, 153, 96)
   strokeWeight(10)
   line(0,0,0,1000)
 
   noStroke()
  
   fill(255, 200, 0,70)
   ellipse(0,0,105,105)
   ellipse(0,0,110,110)
   ellipse(0,0,93,93)
   ellipse(0,0,120,120)
  fill(255, 255, 0)
   ellipse(0,0,100,100)
}
 

// When the user clicks the mouse
function mousePressed() 
  {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, tranx, trany)
  if (d < 50)
  {  fill(225,90);
    stroke(225)
   strokeWeight(2);
     for (let i = 0; i < 40 ; i ++) {
    line(0, 0, 20, 80);
    ellipse(20,80,10,10);
    rotate(PI/20);
     }
     fill(0);
  noStroke();
  textSize(10);
  text("Make a wish and press enter", 10, -100)
  }
  
    }

    

  /*function draw()
{ 
  translate(tranx, trany);
  stroke(132, 153, 96)
  strokeWeight(10)
  line(0,0,0,1000)

  noStroke()
 
  fill(255, 200, 0,70)
  ellipse(0,0,105,105)
  ellipse(0,0,110,110)
  ellipse(0,0,93,93)
  ellipse(0,0,120,120)
 fill(255, 255, 0)
  ellipse(0,0,100,100)
  
    if (mouseIsPressed === true) 
    {
        let d = dist(mouseX, mouseY, tranx, trany)
        if (d < 50)
        { fill(200,90);
          stroke(200);
          strokeWeight(2);
          for (let i = 0; i < 40 ; i ++) 
            {
            line(0, 0, 20, 80);
            ellipse(20,80,10,10);
            rotate(PI/20);
            }
        }
    }
 tranx=tranx+ 50;
  trany=trany+ 50;
}*/
