// components/LDoubleGrid.tsx
import React from "react";

export default function LDoubleGrid() {
  return (
    <div className="flex flex-col gap-1">
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

      {/* Columnas adicionales debajo de la columna 1 y 2 */}
      {Array.from({ length: 3 }).map((_, rowIdx) => (
        <div key={`col-row-${rowIdx}`} className="flex gap-1">
          {/* Columna 1 */}
          <div className="w-12 h-12 bg-blue-500 rounded" />
          {/* Columna 2 */}
          <div className="w-12 h-12 bg-blue-500 rounded" />
        </div>
      ))}
    </div>
  );
}
