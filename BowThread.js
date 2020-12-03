class BowThread{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length:1
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world, this.body);
      }
      fly(){
        this.body.bodyA = null;
        Matter.Body.applyForce(arrow.body, arrow.body.position, {x:100, y:0})
      }

      attach(body){
        this.body.bodyA = body;
      }

      display(){
        if(this.body.bodyA){
          var pointA = this.body.bodyA.position;
          var pointB = this.pointB;
          line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
      }
}