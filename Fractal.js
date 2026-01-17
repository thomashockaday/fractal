class Fractal {
  constructor(drawMode) {
    this.lineWidth = Math.floor(Math.random() * 11) + 5;
    this.hue = Math.random() * 360;
    this.sides = Math.floor(Math.random() * 7) + 2;
    this.maxLevel = 5;
    this.spread = Math.random() * 0.5 + 0.4;
    this.scale = Math.random() * 0.1 + 0.7;
    this.branches = 3;
    this.branchSize = 120;
    this.drawMode = drawMode ?? new Branches();
  }

  draw(ctx) {
    ctx.lineWidth = this.lineWidth;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

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

    this.drawMode.draw(
      ctx,
      this.hue,
      lightness,
      this.branchSize,
      this.lineWidth,
      level,
      this.maxLevel
    );

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
