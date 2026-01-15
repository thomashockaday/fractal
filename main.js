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

class Fractal {
  constructor() {
    this.lineWidth = Math.floor(Math.random() * 11) + 5;
    this.hue = Math.random() * 360;
    this.sides = Math.floor(Math.random() * 7) + 2;
    this.maxLevel = 5;
    this.spread = Math.random() * 0.5 + 0.4;
    this.scale = Math.random() * 0.1 + 0.7;
    this.branches = 4;
    this.branchSize = 150;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, SIZE, SIZE);

    ctx.lineWidth = this.lineWidth;
    ctx.save();
    ctx.translate(SIZE / 2, SIZE / 2);

    for (let i = 0; i < this.sides; i++) {
      this.drawBranch(ctx, 0);
      ctx.rotate((Math.PI * 2) / this.sides);
    }

    ctx.restore();
  }

  drawBranch(ctx, level) {
    if (level > this.maxLevel) {
      return;
    }

    const lightness = 10 + level * 6;

    ctx.strokeStyle = `hsl(${this.hue}, 100%, ${lightness}%)`;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.branchSize, 0);
    ctx.stroke();

    for (let i = 0; i < this.branches; i++) {
      const position = this.branchSize - (this.branchSize / this.branches) * i;

      ctx.save();
      ctx.translate(position, 0);
      ctx.scale(this.scale, this.scale);
      ctx.rotate((this.spread * 2 * i) / this.branches - this.spread);
      this.drawBranch(ctx, level + 1);
      ctx.restore();
    }
  }
}

function drawFractal() {
  const fractal = new Fractal();
  fractal.draw(ctx);
}

drawFractal();
mutateBtn.addEventListener("click", drawFractal);
