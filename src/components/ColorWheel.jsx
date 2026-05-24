import { useRef, useEffect, useCallback } from "react";

const SIZE = 160;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = SIZE / 2 - 6;

export default function ColorWheel({ hue, onChange }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, SIZE, SIZE);

    for (let deg = 0; deg < 360; deg++) {
      const a1 = ((deg - 1) * Math.PI) / 180;
      const a2 = ((deg + 1) * Math.PI) / 180;
      ctx.beginPath();
      ctx.moveTo(CX, CY);
      ctx.arc(CX, CY, R, a1, a2);
      ctx.closePath();
      ctx.fillStyle = `hsl(${deg}, 80%, 58%)`;
      ctx.fill();
    }

    ctx.beginPath();
    ctx.arc(CX, CY, R * 0.52, 0, Math.PI * 2);
    ctx.fillStyle = "#06060a";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(CX, CY, R * 0.38, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${hue}, 75%, 62%)`;
    ctx.fill();
  }, [hue]);

  const angle = (hue * Math.PI) / 180;
  const dotR = R * 0.76;
  const dotX = CX + dotR * Math.cos(angle);
  const dotY = CY + dotR * Math.sin(angle);

  const pick = useCallback((e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left - CX;
    const y = (e.clientY || e.touches?.[0]?.clientY) - rect.top - CY;
    const deg = Math.round(((Math.atan2(y, x) * 180) / Math.PI + 360) % 360);
    onChange(deg);
  }, [onChange]);

  const onMouseDown = (e) => {
    pick(e);
    const move = (ev) => pick(ev);
    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  return (
    <div
      style={{ position: "relative", width: SIZE, height: SIZE, cursor: "crosshair", userSelect: "none" }}
      onMouseDown={onMouseDown}
      onTouchStart={pick}
      onTouchMove={pick}
    >
      <canvas
        ref={canvasRef}
        width={SIZE}
        height={SIZE}
        style={{ display: "block", borderRadius: "50%" }}
      />
      <div
        style={{
          position: "absolute",
          left: dotX - 8,
          top: dotY - 8,
          width: 16,
          height: 16,
          borderRadius: "50%",
          border: "2.5px solid #fff",
          background: `hsl(${hue}, 75%, 62%)`,
          boxShadow: "0 0 6px rgba(0,0,0,0.7)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}