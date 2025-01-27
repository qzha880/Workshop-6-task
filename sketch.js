let helpbutton = [];
let textoptions = [];
let h1, h2, h3;

let userInput;
let button;
let userLine;

let poem  = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  userInput = createInput();
  userInput.position(40, 90);
  button  = createButton('write poem');
  button.position(userInput.x, userInput.y + 21);
  button.mousePressed(newLine);
  
  let h1 = RiTa.phones("Help");
  let h2 = RiTa.phones("I don\'t know what to do");
  let h3 = RiTa.phones("Brain not working");
  textoptions.push("Help");
  textoptions.push("I don\'t know what to do");
  textoptions.push("Brain not working");
  textoptions.push(h1);
  textoptions.push(h2);
  textoptions.push(h3);

  let button2 = createButton('Help');
  button2.position(270 , 90);
  button2.mousePressed(() => {
    let r = random(textoptions);
    helpbutton.push(r);
  });

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function draw() {
  background(80);
  writePoem();

  for (i=0;i<helpbutton.length;i++){
    fill(255, 0, 0);
    text(helpbutton[i],240,180 + i * 20);
  }

  fill(255);
  text("type in your poem and click 'write poem'", 50, 500);
  text("your words will be changed", 50, 520);
  text("(the verb will changed into present tense)", 50, 540);
  text("(random words may be changed into adverbs)", 50, 560);
  text("click 'Help' to hear Garuinja scream", 50, 580);
}

function writePoem(){
  for(x = 0; x < poem.length; x++){
    fill(255)
    text(poem[x], 40, 180 + x * 20);
  }
}

function newLine () {
  userLine = userInput.value();
  userInput.value('');
  poem.push(userLine);

  let words = RiTa.tokenize(userLine);

  for (a = 0; a < words.length-1; a++) {
    if (RiTa.isAdverb(words[a])) {
      let adverb = RiTa.randomWord({pos: "rb"});
      words[a] = adverb;

      let secondLine = RiTa.untokenize(words);
      poem.push(secondLine);
    }
  }

  let words1 = RiTa.tokenize(userLine);
    for (i = 0; i < words1.length-1; i++) {
    if (RiTa.isVerb(words1[i])) {
      let present = RiTa.presentPart(words1[i]);
      words1[i] = present;

      let thirdLine = RiTa.untokenize(words1);
      poem.push(thirdLine);
    }
  }
}
