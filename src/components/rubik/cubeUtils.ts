export type Face = string[]; // 3x3 = 9 colores
export type Cube = {
  U: Face;
  D: Face;
  F: Face;
  B: Face;
  L: Face;
  R: Face;
};

export const initialCube: Cube = {
  U: Array(9).fill("white"),
  D: Array(9).fill("yellow"),
  F: Array(9).fill("green"),
  B: Array(9).fill("blue"),
  L: Array(9).fill("orange"),
  R: Array(9).fill("red"),
};

const rotateFaceCW = (face: Face): Face => [
  face[6], face[3], face[0],
  face[7], face[4], face[1],
  face[8], face[5], face[2],
];

const rotateFaceCCW = (face: Face): Face => [
  face[2], face[5], face[8],
  face[1], face[4], face[7],
  face[0], face[3], face[6],
];

// Implementaremos F y F' (como ejemplo)
export const rotateF = (cube: Cube): Cube => {
  const newCube = { ...cube, F: rotateFaceCW(cube.F.slice()) };

  const [u6, u7, u8] = cube.U.slice(6, 9);
  const [r0, r3, r6] = cube.R;
  const [d2, d1, d0] = cube.D.slice(0, 3);
  const [l8, l5, l2] = cube.L;

  newCube.U[6] = l8; newCube.U[7] = l5; newCube.U[8] = l2;
  newCube.R[0] = u6; newCube.R[3] = u7; newCube.R[6] = u8;
  newCube.D[0] = r6; newCube.D[1] = r3; newCube.D[2] = r0;
  newCube.L[2] = d0; newCube.L[5] = d1; newCube.L[8] = d2;

  return newCube;
};

export const rotateFPrime = (cube: Cube): Cube => {
  const newCube = { ...cube, F: rotateFaceCCW(cube.F.slice()) };

  const [u6, u7, u8] = cube.U.slice(6, 9);
  const [r0, r3, r6] = cube.R;
  const [d2, d1, d0] = cube.D.slice(0, 3);
  const [l8, l5, l2] = cube.L;

  newCube.U[6] = r0; newCube.U[7] = r3; newCube.U[8] = r6;
  newCube.R[0] = d2; newCube.R[3] = d1; newCube.R[6] = d0;
  newCube.D[0] = l2; newCube.D[1] = l5; newCube.D[2] = l8;
  newCube.L[2] = u8; newCube.L[5] = u7; newCube.L[8] = u6;

  return newCube;
};
