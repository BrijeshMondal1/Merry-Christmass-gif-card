class gift {

  constructor(x, y) {

      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x, y, 70, 70, options);
      this.width = 70;
      this.height = 70;
      this.image = loadImage("gift.png");
      World.add(world, this.body);

  }

  display() {
      var pos = this.body.position;
      
      if(windowWidth > 800){
      
        image(this.image, pos.x, pos.y, this.width, this.height);

      }else{

        image(this.image, pos.x, pos.y, 30, 30);

      }
  }
}