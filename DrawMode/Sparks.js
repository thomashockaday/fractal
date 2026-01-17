class Sparks {
  draw(ctx, hue, lightness, branchSize, lineWidth, level, maxLevel) {
    if (level > maxLevel - 4 && Math.random() < 0.1) {
      ctx.fillStyle = `hsl(${hue + 10}, 100%, ${lightness + 20}%)`;
      ctx.globalAlpha = 0.6;

      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.translate(150, 150);
        ctx.rotate(((Math.PI * 2) / 5) * i);
        ctx.beginPath();
        ctx.ellipse(0, 8, 4, 50, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.globalAlpha = 1;
    }
  }
}
