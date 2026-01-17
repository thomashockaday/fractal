class Branches {
  draw(ctx, hue, lightness, branchSize, lineWidth, level, maxLevel) {
    ctx.strokeStyle = `hsl(${hue}, 100%, ${lightness}%)`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(branchSize, 0);
    ctx.stroke();
  }
}
