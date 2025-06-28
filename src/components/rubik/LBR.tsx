// components/LDoubleGridRotated180.tsx
import React from "react";

export default function LDoubleGridRotated180() {
  return (
    <div className="flex flex-col items-end gap-1">
      {/* 3 filas verticales de 2 celdas alineadas a la derecha */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={`col-${i}`} className="flex gap-1">
          <div className="w-12 h-12 bg-blue-500 rounded" />
          <div className="w-12 h-12 bg-blue-500 rounded" />
        </div>
      ))}

      {/* Fila 1 */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`row1-${i}`} className="w-12 h-12 bg-blue-500 rounded" />
        ))}
      </div>

      {/* Fila 2 */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`row2-${i}`} className="w-12 h-12 bg-blue-500 rounded" />
        ))}
      </div>
    </div>
  );
}
