const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  /*No código acima, você está carregando a imagem do plano de fundo
  faça o mesmo a torra*/
  ???

}

function setup() {
  //Utilize o código que falta para criar um canvas
  canvas = ???(1200,600);
  engine = Engine.create();
  world = engine.world;

  //Utilize ' new Tower' para criar um objeto da classe torre
  tower =??? (150, 350, 160, 310);
  

}

function draw() {
  background(189);
  /*Escreva o nome da variável que carrega a imagem de fundo*/
  image(???, 0, 0, width, height);

  

  Engine.update(engine);
  /* Na classe tower.js, você tem uma única função
  Ela tem o objetivo de mostrar a torre na tela. 
  Coloque o nome dela abaixo:*/
 tower.???();
  
 
}



