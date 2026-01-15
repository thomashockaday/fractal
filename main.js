const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const mutateBtn = document.getElementById("mutateBtn");

const SIZE = 600;
canvas.height = SIZE;
canvas.width = SIZE;

ctx.strokeStyle = "white";

function drawFractal() {
  const lineWidth = Math.floor(Math.random() * 11) + 5;
  const sides = 5;
  const maxLevel = 7;
  const spread = Math.random() * 2 - 0.5;
  const scale = Math.random() * 0.15 + 0.65;
  const branches = 2;

  ctx.clearRect(0, 0, SIZE, SIZE);

  ctx.lineWidth = lineWidth;
  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);

  for (let i = 0; i < sides; i++) {
    drawBranch(0, maxLevel, spread, scale, branches);

    ctx.rotate((Math.PI * 2) / sides);
  }

  ctx.restore();
}

function drawBranch(level, maxLevel, spread, scale, branches) {
  if (level > maxLevel) {
    return;
  }

  const branchSize = 100;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(branchSize, 0);
  ctx.stroke();

  for (let i = 0; i < branches; i++) {
    const position = branchSize - (branchSize / branches) * i;

    ctx.save();
    ctx.translate(position, 0);
    ctx.scale(scale, scale);
    ctx.rotate(spread);
    drawBranch(level + 1, maxLevel, spread, scale, branches);
    ctx.restore();
  }
}

drawFractal();

mutateBtn.addEventListener("click", drawFractal);
