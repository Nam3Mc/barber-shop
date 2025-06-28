// components/LDoubleGridFlipped.tsx
import React from "react";

export default function LDoubleGridFlipped() {
  return (
    <div className="flex flex-col gap-1 items-start">
      {/* 3 filas verticales de 2 celdas */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={`col-${i}`} className="flex gap-1">
          <div className="w-12 h-12 bg-red-500 rounded" />
          <div className="w-12 h-12 bg-red-500 rounded" />
        </div>
      ))}

      {/* Fila 1 */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`row1-${i}`} className="w-12 h-12 bg-red-500 rounded" />
        ))}
      </div>

      {/* Fila 2 */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`row2-${i}`} className="w-12 h-12 bg-red-500 rounded" />
        ))}
      </div>
    </div>
  );
}
