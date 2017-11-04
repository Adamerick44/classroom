function Student(n,x,y) {
  this.x = x;
  this.y = y;

  this.name = n;
}

Student.prototype,draw = function() {
  ctx.font = "30px Arial";
  ctx.fillText(this.n,this.x,this.y);
}

function Desk(x,y,w,h) {
  this.x = x;
  this.y = y;

  this.w = w;
  this.h = h;
}

Desk.prototype.draw = function() {
  ctx.fillStyle = 'brown';
  ctx.fillRect(this.x,this.y,this.w,this.h);
}

function Classroom(students,desks) {
  this.students = students;
  this,desks = desks;
}

Classroom.prototype.draw = function() {
  for(let i = 0;i < this.students.length;i++) {
    this.students[i].draw();
  }

  for(let i = 0;i < this.desks.length;i++) {
    this.desks[i].draw();;
  }

}
