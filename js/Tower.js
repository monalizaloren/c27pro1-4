class Tower {
  constructor(x, y, width, height) {
    var options = {
      //Defina que a torre será estática, como verdadeiro
      isStatic: ???
    };
    /*Carregue a imagem da torre*/
    this.image = ???
    this.width = width;
    this.height = height;
    //O corpo da torre é um retângulo
    //Utilize ' Bodies.rectangle' para criar um corpo retângular
    this.body = ???(x, y, this.width, this.height, options);
    //Utilize 'World.add' para adicionar o corpo ao mundo
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
