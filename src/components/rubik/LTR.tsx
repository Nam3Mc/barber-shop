// components/LDoubleGridInverted.tsx
import React from "react";

export default function LDoubleGridInverted() {
  return (
    <div className="flex flex-col gap-1 items-end">
      {/* Fila 1 alineada a la derecha */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`row1-${i}`} className="w-12 h-12 bg-green-500 rounded" />
        ))}
      </div>

      {/* Fila 2 alineada a la derecha */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={`row2-${i}`} className="w-12 h-12 bg-green-500 rounded" />
        ))}
      </div>

      {/* Columnas adicionales debajo de las columnas 4 y 5 */}
      {Array.from({ length: 3 }).map((_, rowIdx) => (
        <div key={`col-row-${rowIdx}`} className="flex gap-1 justify-end">
          {/* Espacio en blanco para dejar alineado */}
          <div className="w-12 h-12 invisible" />
          <div className="w-12 h-12 invisible" />
          <div className="w-12 h-12 invisible" />
          {/* Columna 4 */}
          <div className="w-12 h-12 bg-green-500 rounded" />
          {/* Columna 5 */}
          <div className="w-12 h-12 bg-green-500 rounded" />
        </div>
      ))}
    </div>
  );
}
