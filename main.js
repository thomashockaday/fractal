const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const SIZE = 600;
canvas.height = SIZE;
canvas.width = SIZE;

ctx.strokeStyle = "white";
ctx.lineWidth = 20;

const sides = 5;

function drawFractal() {
  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);

  for (let i = 0; i < sides; i++) {
    drawBranch(0);

    ctx.rotate((Math.PI * 2) / sides);
  }
  ctx.restore();
}

function drawBranch(level) {
  if (level > 7) {
    return;
  }

  const branchSize = 160;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(branchSize, 0);
  ctx.stroke();

  ctx.save();

  ctx.translate(branchSize, 0);
  ctx.scale(0.6, 0.6);

  ctx.save();
  ctx.rotate(1.4);
  drawBranch(level + 1);
  ctx.restore();

  ctx.save();
  ctx.rotate(-1.4);
  drawBranch(level + 1);
  ctx.restore();

  ctx.restore();
}

drawFractal();
