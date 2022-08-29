var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["38c2b1e9-0935-4882-97df-1ece8dec1e98"],"propsByKey":{"38c2b1e9-0935-4882-97df-1ece8dec1e98":{"name":"sam","sourceUrl":null,"frameSize":{"x":95,"y":39},"frameCount":2,"looping":true,"frameDelay":12,"version":"z_9ksLKPxTXm9WILhOTSzGYtspwd1d05","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":78},"rootRelativePath":"assets/38c2b1e9-0935-4882-97df-1ece8dec1e98.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var deaths = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

boundary1 = createSprite(190,120,420,3);
boundary2 = createSprite(190,260,420,3);

sam = createSprite(20,190,13,13);
sam.shapeColor = "green";
sam.setAnimation("sam");
sam.scale = 0.4;
car1 = createSprite(90,130,10,10);
car1.shapeColor = "red";
car2 = createSprite(215,130,10,10);
car2.shapeColor = "red";
car3 = createSprite(155,250,10,10);
car3.shapeColor = "red";
car4 = createSprite(270,250,10,10);
car4.shapeColor = "red";
car1.velocityY = 6; 
car2.velocityY = -6; 
car3.velocityY = 6; 
car4.velocityY = -6; 
  
 
//Agrega velocidad para hacer que el auto se mueva.

function draw() 
{
  background("white");
  text("Deaths: " + deaths,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  createEdgeSprites();
  // Crea la función bounceoff para hacer que el auto rebote en los límites.
  sam.bounceOff(edges);
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
  movement();
//Agregar la condición de reducir la vida de Sam si toca el carro.
  game_over();
  drawSprites();
}

function game_over()
{
  if(sam.isTouching(car1))
  {
    deaths = deaths + 1;
    sam.x = 20;
  }
  if(sam.isTouching(car2))
  {
    deaths = deaths + 1;
    sam.x = 20;
  }
  if(sam.isTouching(car3))
  {
    deaths = deaths + 1;
    sam.x = 20;
  }
  if(sam.isTouching(car4))
  {
    deaths = deaths + 1;
    sam.x = 20;
  }
}
function movement()
{
  if(keyDown("right"))
  {
    sam.x = sam.x + 4;
  }
  if(keyDown("left"))
  {
    sam.x = sam.x - 3;
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
