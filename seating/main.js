let canv,ctx,width,height,loop;
let students,desk,classroom,

window.onload = function main() {
  canv = document.createElement('canvas');

  canv.width = width = 700;
  canv.height = height = 700;

  canv.style.background = 'black';

  ctx = canv.getContext('2d');

  document.body.appendChild(canv)

  loop = () => {
      logic();
      ctx.clearRect(0,0,width,height);
      render();
      ctx.fill();
      ctx.stroke();
      window.requestAnimationFrame(loop);
  }

  init();
  loop();
}

function init() {
  student[0] = new Student('joe',20,50);
  student[1] = new Student('Carl',80,50);
  student[2] = new Student('Bob',30,120);


}

function logic() {

}

function render() {
  classroom.draw();
}
