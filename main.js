const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const mutateBtn = document.getElementById("mutateBtn");

const SIZE = 700;
canvas.height = SIZE;
canvas.width = SIZE;

ctx.lineCap = "round";
ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
ctx.shadowBlur = 10;
ctx.shadowOffsetX = 3;
ctx.shadowOffsetY = 3;

function drawFractal() {
  const lineWidth = Math.floor(Math.random() * 11) + 5;
  const hue = Math.random() * 360;

  const sides = Math.floor(Math.random() * 7) + 2;
  const maxLevel = 5;
  const spread = Math.random() * 0.5 + 0.4;
  const scale = Math.random() * 0.1 + 0.7;
  const branches = 4;

  ctx.clearRect(0, 0, SIZE, SIZE);

  ctx.lineWidth = lineWidth;
  ctx.save();
  ctx.translate(SIZE / 2, SIZE / 2);

  for (let i = 0; i < sides; i++) {
    drawBranch(0, maxLevel, spread, scale, branches, hue);

    ctx.rotate((Math.PI * 2) / sides);
  }

  ctx.restore();
}

function drawBranch(level, maxLevel, spread, scale, branches, hue) {
  if (level > maxLevel) {
    return;
  }

  const branchSize = 150;
  const lightness = 10 + level * 6;

  ctx.strokeStyle = `hsl(${hue}, 100%, ${lightness}%)`;

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(branchSize, 0);
  ctx.stroke();

  for (let i = 0; i < branches; i++) {
    const position = branchSize - (branchSize / branches) * i;

    ctx.save();
    ctx.translate(position, 0);
    ctx.scale(scale, scale);
    ctx.rotate((spread * 2 * i) / branches - spread);
    drawBranch(level + 1, maxLevel, spread, scale, branches, hue);
    ctx.restore();
  }
}

drawFractal();

mutateBtn.addEventListener("click", drawFractal);
