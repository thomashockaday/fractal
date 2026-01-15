const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const SIZE = 600;
canvas.height = SIZE;
canvas.width = SIZE;

ctx.strokeStyle = "white";
ctx.lineWidth = "50px";

const sides = 5;

ctx.translate(SIZE / 2, SIZE / 2);

for (let i = 0; i < sides; i++) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 0);
  ctx.stroke();

  ctx.rotate((Math.PI * 2) / sides);
}
