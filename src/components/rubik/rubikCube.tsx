"use client";

import { useState } from "react";
import { Cube, initialCube, rotateF, rotateFPrime } from "./cubeUtils";

const colors: Record<string, string> = {
  white: "bg-white",
  yellow: "bg-yellow-400",
  red: "bg-red-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  green: "bg-green-500",
};

const FaceGrid = ({ face }: { face: string[] }) => (
  <div className="grid grid-cols-3 gap-0.5">
    {face.map((color, idx) => (
      <div key={idx} className={`w-8 h-8 border border-black ${colors[color]}`}></div>
    ))}
  </div>
);

export default function RubikCube() {
  const [cube, setCube] = useState<Cube>(initialCube);

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-center space-x-4">
        <div className="w-24"></div>
        <FaceGrid face={cube.U} />
        <div className="w-24"></div>
      </div>

      <div className="flex justify-center space-x-4">
        <FaceGrid face={cube.L} />
        <FaceGrid face={cube.F} />
        <FaceGrid face={cube.R} />
        <FaceGrid face={cube.B} />
      </div>

      <div className="flex justify-center space-x-4">
        <div className="w-24"></div>
        <FaceGrid face={cube.D} />
        <div className="w-24"></div>
      </div>

      <div className="text-center space-x-2">
        <button
          onClick={() => setCube(rotateF(cube))}
          className="px-4 py-1 bg-green-600 text-white rounded"
        >
          F
        </button>
        <button
          onClick={() => setCube(rotateFPrime(cube))}
          className="px-4 py-1 bg-green-800 text-white rounded"
        >
          F'
        </button>
      </div>
    </div>
  );
}
