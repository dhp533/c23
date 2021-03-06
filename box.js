class Box
{

  constructor(xpos,ypos,width1,height1)
  {
    var options={
        density: 1.2,
        friction: .8,
        restitution:.5
    }

    this.body = Bodies.rectangle(xpos,ypos,width1,height1,options);
    this.width = width1;
    this.height = height1;
    World.add(world,this.body)
  }

  display()
  {
    var position = this.body.position;
    var angle = this.body.angle;
    push();
      rectMode(CENTER)
      translate(position.x,position.y);
      rotate(angle)
      rect(0,0,this.width,this.height)
      pop();
  }


}