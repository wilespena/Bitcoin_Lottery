import React, { useEffect, useRef } from "react";

interface Props {
  publicKeyHex: string;
  title: string;
  formula: string;
  calculatingLabel: string;
  pointLabel: string;
  generatorLabel: string;
}

export const EllipticCurveCanvas: React.FC<Props> = ({
  publicKeyHex,
  title,
  formula,
  calculatingLabel,
  pointLabel,
  generatorLabel,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      time += 0.02;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Axes
      const cx = width / 2;
      const cy = height / 2;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke(); // X
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, height);
      ctx.stroke(); // Y

      // Draw Curve y^2 = x^3 + 7 (visual scale)
      const scale = 20;
      ctx.strokeStyle = "#f59f00";
      ctx.lineWidth = 2;
      ctx.beginPath();
      let started = false;
      for (let px = 0; px < width; px++) {
        const x = (px - cx) / scale;
        const y2 = x * x * x + 7;
        if (y2 >= 0) {
          const y = Math.sqrt(y2);
          const py = cy - y * scale;
          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        }
      }
      ctx.stroke();

      ctx.beginPath();
      started = false;
      for (let px = 0; px < width; px++) {
        const x = (px - cx) / scale;
        const y2 = x * x * x + 7;
        if (y2 >= 0) {
          const y = -Math.sqrt(y2);
          const py = cy - y * scale;
          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        }
      }
      ctx.stroke();

      // Calculate deterministic target point P based on Public Key
      const isEven = publicKeyHex.startsWith("02");
      const hexPart = publicKeyHex.substring(2, 6) || "0000";
      const parsed = parseInt(hexPart, 16);
      const val = Number.isNaN(parsed) ? 0.5 : parsed / 65535;
      const targetX = -1.8 + val * 4.0;
      const targetY2 = targetX * targetX * targetX + 7;
      const targetY = (isEven ? 1 : -1) * Math.sqrt(Math.max(0, targetY2));

      // Fixed Generator point G (visual representation)
      const gX = -1.0;
      const gY = Math.sqrt(gX * gX * gX + 7);

      const cycle = time % 6;
      let currentX = targetX;
      let currentY = targetY;
      let showBouncing = false;

      if (cycle < 2.4) {
        const progress = cycle / 2.4;
        currentX = gX + (targetX - gX) * Math.pow(progress, 0.5);
        const curY2 = currentX * currentX * currentX + 7;
        currentY =
          Math.sqrt(Math.max(0, curY2)) * (Math.cos(cycle * 15) > 0 ? 1 : -1);
        showBouncing = true;
      }

      // Draw Generator G
      const pxG = cx + gX * scale;
      const pyG = cy - gY * scale;
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.beginPath();
      ctx.arc(pxG, pyG, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "11px JetBrains Mono, monospace";
      ctx.fillText(generatorLabel, Math.max(8, pxG - 85), pyG - 10);

      // Draw vector from Origin to current point
      const pxC = cx + currentX * scale;
      const pyC = cy - currentY * scale;

      ctx.strokeStyle = showBouncing
        ? "rgba(255, 212, 59, 0.35)"
        : "rgba(245, 159, 0, 0.85)";
      ctx.lineWidth = showBouncing ? 1 : 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(pxC, pyC);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw current point
      ctx.fillStyle = showBouncing ? "rgba(255, 212, 59, 0.65)" : "#ffd43b";
      ctx.beginPath();
      ctx.arc(pxC, pyC, showBouncing ? 4 : 6, 0, Math.PI * 2);
      ctx.fill();

      const labelX = Math.min(width - 170, Math.max(10, pxC + 10));
      const labelY = Math.min(height - 12, Math.max(20, pyC - 10));

      if (!showBouncing) {
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#f59f00";
        ctx.fillStyle = "#fff";
        ctx.fillText(pointLabel, labelX, labelY);
        ctx.shadowBlur = 0;
      } else {
        ctx.fillStyle = "rgba(255,255,255,0.55)";
        ctx.fillText(calculatingLabel, labelX, labelY);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [publicKeyHex, calculatingLabel, pointLabel, generatorLabel]);

  return (
    <div className="anatomy-canvas-container">
      <div className="anatomy-canvas-overlay">
        <h3 className="anatomy-canvas-title">{title}</h3>
        <p className="anatomy-canvas-text">{formula}</p>
        <p className="anatomy-canvas-pk">
          PK: {publicKeyHex.slice(0, 18)}…
        </p>
      </div>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
};

