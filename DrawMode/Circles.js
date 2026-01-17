class Circles {
  draw(ctx, hue, lightness, branchSize, lineWidth, level, maxLevel) {
    ctx.fillStyle = `hsl(${hue + 10}, 100%, ${lightness - 10}%)`;
    ctx.beginPath();
    ctx.arc(branchSize, 50, lineWidth, 0, Math.PI * 2);
    ctx.fill();
  }
}
