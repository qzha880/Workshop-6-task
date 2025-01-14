let userinputtext;
let helpbutton = [];
let textoptions = [];
let redslider;
let greenslider;
let blueslider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  userinputtext = createInput();
  userinputtext.position(53,90);

  textWrap(CHAR);

  textoptions.push('Help');
  textoptions.push('I don\'t know what to do');
  textoptions.push('Brain not working');

  let button = createButton('Help');
  button.position(263, 90);
  button.mousePressed(() => {
    let r = random(textoptions);
    helpbutton.push(r);
  });

  redslider = createSlider(0,255);
  redslider.position(50, 3);
  redslider.size(255);

  greenslider = createSlider(0,255);
  greenslider.position(50, 37);
  greenslider.size(255);

  blueslider = createSlider(0,255);
  blueslider.position(50, 70);
  blueslider.size(255);

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

// function mousePressed(){
//   text('Help', 240, 150);
// }

function draw() {
  let red = redslider.value();
  let blue = blueslider.value();
  let green = greenslider.value();
  background(red,green,blue);
  let usertext = userinputtext.value();
  text(usertext, 53, 150, 185);
  
  for (i=0;i<helpbutton.length;i++){
    text(helpbutton[i],240,150 + i * 20);
  }
}
