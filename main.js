const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const mutateBtn = document.getElementById("mutateBtn");

function drawFractal() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const fractal = new Fractal();

  fractal.drawMode = new Branches();
  fractal.draw(ctx);

  fractal.drawMode = new Circles();
  fractal.draw(ctx);

  fractal.drawMode = new Sparks();
  fractal.draw(ctx);

  // fractal.drawMode = new Electricity();
  // fractal.draw(ctx);
}

mutateBtn.addEventListener("click", drawFractal);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctx.lineCap = "round";
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;

  drawFractal();
}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
