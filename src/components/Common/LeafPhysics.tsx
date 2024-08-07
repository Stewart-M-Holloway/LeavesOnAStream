/**
 *
 * To simulate the physics of a leaf rotating on the surface of the area, we use the following steps
 *
 * 1. Calculate the net rotational force acting on the leaf.
 *   - This is the sum of the Torque from mouse movement and the Rotational Drag acting on the leaf.
 * 2. Apply the net rotational force to the leaf to calculate the new acceleration.
 * 3. Apply the new acceleration to the leaf to calculate the new velocity.
 * 4. Apply the new velocity to the leaf to calculate the new rotation.
 * 5. Repeat steps 1-4 at a fixed interval to animate the leaf.
 *
 * Approximation of Rotational Drag can be given by the equation:
 * |F_drag| = -K_DRAG * |w|^2
 * Where:
 * - |w| is the angular velocity of the leaf.
 * - K_DRAG = 0.5 * p * A * C_d, all of which are constants in this scenario. We pick a value based
 *   on trial and error.
 *
 * The net Torque from mouse movement can be given by the equation:
 * |T_mouse| = d * |F_mouse| * sin(theta) = r * M_MOUSE * |V_mouse| * sin(theta)
 * Where:
 * - d is the distance from the center of the leaf to the mouse
 * - |F_mouse is the force of the mouse (higher when mouse is down)
 * - theta is the angle between the leaf and the mouse's velocity vector.
 */

export const MIN_ROTATION_VELOCITY = 0.01;
export const MAX_ROTATION_VELOCITY = 20;

const MOUSE_MASS = 0.5;
const MOUSE_DOWN_MULTIPLIER = 10;

const K_DRAG = 0.01;

export const getXYRelativeCenter = (x: number, y: number, size: number) => ({
  xRel: (x - size / 2) / (size / 2),
  yRel: (-y + size / 2) / (size / 2),
});

const getMeanDiff = (arr: number[]) =>
  arr.reduce((acc, val, idx) => acc + (idx > 0 ? val - arr[idx - 1] : 0), 0) / arr.length;

export const getXYVelocity = (
  x: number,
  y: number,
  xPrev: number[],
  yPrev: number[],
  size: number
) => ({
  xVel: getMeanDiff([...xPrev, x]) / size,
  yVel: getMeanDiff([...yPrev, y]) / size,
});

export const getVectorMagnitude = (x: number, y: number) => Math.sqrt(x ** 2 + y ** 2);

export const getTheta = (xRel: number, yRel: number, xVel: number, yVel: number) => (
  (xRel === 0 && yRel === 0) || (xVel === 0 && yVel === 0)
    ? 0
    : Math.atan2(yRel, xRel) - Math.atan2(yVel, xVel)
);

export const getRotationalDrag = (w: number) => -K_DRAG * w ** 2;

export const getTorque = (
  xRel: number,
  yRel: number,
  xVel: number,
  yVel: number,
  isMouseDown: boolean,
) => {
  const d = getVectorMagnitude(xRel, yRel);
  const v = getVectorMagnitude(xVel, yVel);
  const m = isMouseDown ? MOUSE_DOWN_MULTIPLIER * MOUSE_MASS : MOUSE_MASS;
  return d * m * v * Math.sin(getTheta(xRel, yRel, xVel, yVel));
};

export const getRotationAcceleration = (
  w: number,
  size: number,
  x: number,
  y: number,
  xPrev: number[],
  yPrev: number[],
  isMouseDown: boolean,
) => {
  const dragForce = getRotationalDrag(w);
  const { xRel, yRel } = getXYRelativeCenter(x, y, size);
  const { xVel, yVel } = getXYVelocity(x, y, xPrev, yPrev, size);
  let torque = 0;
  if (x >= 0 && x <= size && y >= 0 && y <= size) {
    torque = getTorque(xRel, yRel, xVel, yVel, isMouseDown);
  }
  const netForce = torque + dragForce;
  return netForce;
};
