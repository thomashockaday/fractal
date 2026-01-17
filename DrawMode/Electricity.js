class Electricity {
  draw(ctx, hue, lightness, branchSize, lineWidth, level, maxLevel) {
    if (level < maxLevel - 2) {
      ctx.strokeStyle = `hsl(${hue}, 100%, ${lightness}%)`;

      ctx.save();

      ctx.lineWidth = 2;
      ctx.shadowColor = `hsl(${hue}, 100%, 90%)`;
      ctx.shadowBlur = 5;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(branchSize * 0.2, Math.random() * 20 - 10);
      ctx.lineTo(branchSize * 0.4, Math.random() * 50 - 25);
      ctx.lineTo(branchSize * 0.6, Math.random() * 200 - 100);
      ctx.lineTo(branchSize * 0.8, Math.random() * 100 - 50);
      ctx.lineTo(branchSize, Math.random() * 40 - 20);
      ctx.stroke();

      ctx.restore();
    }
  }
}
