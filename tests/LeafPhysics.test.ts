import { getXYRelativeCenter, getXYVelocity, getVectorMagnitude, getTheta, getRotationalDrag, getTorque } from '../src/components/Common/LeafPhysics';

describe('Testing getXYRelativeCenter', () => {
    test('Center of 100x100 is 0, 0', () => {
        expect(getXYRelativeCenter(50, 50, 100)).toEqual({ xRel: 0, yRel: 0 });
    });
    test('Center of 50x50 is 0, 0', () => {
        expect(getXYRelativeCenter(25, 25, 50)).toEqual({ xRel: 0, yRel: 0 });
    });
    test('Center of 100x100 is 0, 0', () => {
        expect(getXYRelativeCenter(50, 50, 100)).toEqual({ xRel: 0, yRel: 0 });
    });
    test('Top left of 100x100 is -1, 1', () => {
        expect(getXYRelativeCenter(0, 0, 100)).toEqual({ xRel: -1, yRel: 1 });
    });
    test('Bottom right of 100x100 is 1, -1', () => {
        expect(getXYRelativeCenter(100, 100, 100)).toEqual({ xRel: 1, yRel: -1 });
    });
    test('Top right of 100x100 is 1, 1', () => {
        expect(getXYRelativeCenter(100, 0, 100)).toEqual({ xRel: 1, yRel: 1 });
    });
    test('Bottom left of 100x100 is -1, -1', () => {
        expect(getXYRelativeCenter(0, 100, 100)).toEqual({ xRel: -1, yRel: -1 });
    });
    test('Top left of 50x50 is -1, 1', () => {
        expect(getXYRelativeCenter(0, 0, 50)).toEqual({ xRel: -1, yRel: 1 });
    });
});

describe('Testing getXYVelocity', () => {
    test('Zero velocity results in zero x and y velocity', () => {
        expect(getXYVelocity(0, 0, [0, 0], [0, 0], 100)).toEqual({ xVel: 0, yVel: 0 });
    });
    test('Zero velocity results in zero x and y velocity with negative y', () => {
        expect(getXYVelocity(0, 0, [0, 0], [0, 0], 100)).toEqual({ xVel: 0, yVel: 0 });
    });
    test('Positive velocity results in positive x and y velocity', () => {
        expect(getXYVelocity(1, 1, [0, 0, 0], [0, 0, 0], 100))
        .toEqual({ xVel: 0.0025, yVel: 0.0025 });
    });
    test('Negative velocity results in negative x and y velocity', () => {
        expect(getXYVelocity(-1, -1, [0, 0, 0], [0, 0, 0], 100))
        .toEqual({ xVel: -0.0025, yVel: -0.0025 });
    });
});

describe('Testing getVectorMagnitude', () => {
    test('Zero vector results in zero magnitude', () => {
        expect(getVectorMagnitude(0, 0)).toBe(0);
    });
    test('Zero vector results in zero magnitude with negative y', () => {
        expect(getVectorMagnitude(0, 0)).toBe(0);
    });
    test('Positive vector results in positive magnitude', () => {
        expect(getVectorMagnitude(1, 1)).toBeCloseTo(1.41);
    });
    test('Negative vector results in positive magnitude', () => {
        expect(getVectorMagnitude(-1, -1)).toBeCloseTo(1.41);
    });
    test('Positive vector results in positive magnitude with negative y', () => {
        expect(getVectorMagnitude(1, -1)).toBeCloseTo(1.41);
    });
    test('Negative vector results in positive magnitude with negative y', () => {
        expect(getVectorMagnitude(-1, 1)).toBeCloseTo(1.41);
    });
});

describe('Testing getTheta', () => {
    // Zero Vector Tests
    test('Zero velocity results in zero theta', () => {
        expect(getTheta(1, 1, 0, 0)).toBe(0);
    });
    test('Zero distance results in zero theta', () => {
        expect(getTheta(0, 0, 1, 1)).toBe(0);
    });
    test('Zero everything results in zero theta', () => {
        expect(getTheta(0, 0, 0, 0)).toBe(0);
    });
    // Same Vector Tests
    test('Same Vector results in zero theta, test 1', () => {
        expect(getTheta(1, 1, 1, 1)).toBe(0);
    });
    test('Same Vector results in zero theta, test 2', () => {
        expect(getTheta(-1, -1, -1, -1)).toBe(0);
    });
    test('Same Vector results in zero theta, test 3', () => {
        expect(getTheta(-1, 1, -1, 1)).toBe(0);
    });
    test('Same Vector results in zero theta, test 4', () => {
        expect(getTheta(1, -1, 1, -1)).toBe(0);
    });
    // Opposite Vector Tests
    test('Opposite Vector results in 180 degrees, test 1', () => {
        expect(Math.abs(getTheta(1, 1, -1, -1))).toBeCloseTo(Math.PI);
    });
    test('Opposite Vector results in 180 degrees, test 2', () => {
        expect(Math.abs(getTheta(-1, -1, 1, 1))).toBeCloseTo(Math.PI);
    });
    test('Opposite Vector results in 180 degrees, test 3', () => {
        expect(Math.abs(getTheta(-1, 1, 1, -1))).toBeCloseTo(Math.PI);
    });
    test('Opposite Vector results in 180 degrees, test 4', () => {
        expect(Math.abs(getTheta(1, -1, -1, 1))).toBeCloseTo(Math.PI);
    });
    // Quadrant 1 Tests
    test('Q1 Right Angle Clockwise', () => {
        expect(getTheta(1, 1, 1, -1)).toBeCloseTo(Math.PI / 2);
    });
    test('Q1 Right Angle Counter-Clockwise', () => {
        expect(getTheta(1, 1, -1, 1)).toBeCloseTo(-Math.PI / 2);
    });
    test('Q1 45 degrees Clockwise', () => {
        expect(getTheta(1, 1, 1, 0)).toBeCloseTo(Math.PI / 4);
    });
    test('Q1 135 degrees Clockwise', () => {
        expect(getTheta(1, 1, 0, -1)).toBeCloseTo((3 * Math.PI) / 4);
    });
    test('Q1 45 degrees Counter-Clockwise', () => {
        expect(getTheta(1, 1, 0, 1)).toBeCloseTo(-Math.PI / 4);
    });
    test('Q1 135 degrees Counter-Clockwise', () => {
        expect(getTheta(1, 1, -1, 0)).toBeCloseTo((-3 * Math.PI) / 4);
    });
    // // Quadrant 2 Tests
    // test('Q2 Right Angle Clockwise', () => {
    //     expect(getTheta(-1, 1, 1, 1)).toBeCloseTo(Math.PI / 2);
    // });
    // test('Q2 Right Angle Counter-Clockwise', () => {
    //     expect(getTheta(-1, 1, -1, -1)).toBeCloseTo(-Math.PI / 2);
    // });
    // // Quadrant 3 Tests
    // test('Q3 Right Angle Clockwise', () => {
    //     expect(getTheta(-1, -1, -1, 1)).toBeCloseTo(Math.PI / 2);
    // });
    // test('Q3 Right Angle Counter-Clockwise', () => {
    //     expect(getTheta(-1, -1, 1, -1)).toBeCloseTo(-Math.PI / 2);
    // });
    // // Quadrant 4 Tests
    // test('Q4 Right Angle Clockwise', () => {
    //     expect(getTheta(1, -1, -1, -1)).toBeCloseTo(Math.PI / 2);
    // });
    // test('Q4 Right Angle Counter-Clockwise', () => {
    //     expect(getTheta(1, -1, 1, 1)).toBeCloseTo(-Math.PI / 2);
    // });
    // test('Q4 45 degrees Clockwise', () => {
    //     expect(getTheta(1, -1, 0, -1)).toBeCloseTo(Math.PI / 4);
    // });
    // test('Q4 135 degrees Clockwise', () => {
    //     expect(getTheta(1, -1, 1, 0)).toBeCloseTo((3 * Math.PI) / 4);
    // });
    // test('Q4 45 degrees Counter-Clockwise', () => {
    //     expect(getTheta(1, -1, -1, 0)).toBeCloseTo(-Math.PI / 4);
    // });
    // test('Q4 135 degrees Counter-Clockwise', () => {
    //     expect(getTheta(1, -1, 0, 1)).toBeCloseTo((-3 * Math.PI) / 4);
    // });
});

describe('Testing Rotational Drag', () => {
    test('Zero velocity results in negative zero drag', () => {
        expect(getRotationalDrag(0)).toBe(-0);
    });
    test('Positive velocity results in negative drag', () => {
        expect(getRotationalDrag(1)).toBeLessThan(0);
    });
    test('Negative velocity results in positive drag', () => {
        expect(getRotationalDrag(-1)).toBeLessThan(0);
    });
    test('Drag increases with velocity', () => {
        expect(Math.abs(getRotationalDrag(1))).toBeLessThan(Math.abs(getRotationalDrag(2)));
    });
});

describe('Testing Torque', () => {
    test('Zero velocity results in zero torque', () => {
        expect(getTorque(0, 0, 0, 0, false)).toBe(0);
    });
    test('Zero velocity results in zero torque when mouse is down', () => {
        expect(getTorque(0, 0, 0, 0, true)).toBe(0);
    });
    // Quadrant 1 tests
    test('Q1 Velocity towards center is 0', () => {
        expect(getTorque(0.5, 0.5, -1, -1, false)).toBeCloseTo(0.0);
    });
    test('Q1 Velocity away from center is 0', () => {
        expect(getTorque(0.5, 0.5, 1, 1, false)).toBeCloseTo(0.0);
    });
    test('Q1 Velocity towards bottom right is positive', () => {
        expect(getTorque(0.5, 0.5, 1, -1, false)).toBeGreaterThan(0);
    });
    test('Q1 Velocity towards top left is negative', () => {
        expect(getTorque(0.5, 0.5, -1, 1, false)).toBeLessThan(0);
    });
    // Quadrant 2 tests
    test('Q2 Velocity towards center is 0', () => {
        expect(getTorque(-0.5, 0.5, 1, -1, false)).toBeCloseTo(0.0);
    });
    test('Q2 Velocity away from center is 0', () => {
        expect(getTorque(-0.5, 0.5, -1, 1, false)).toBeCloseTo(0.0);
    });
    test('Q2 Velocity towards bottom left is negative', () => {
        expect(getTorque(-0.5, 0.5, -1, -1, false)).toBeLessThan(0);
    });
    test('Q2 Velocity towards top right is positive', () => {
        expect(getTorque(-0.5, 0.5, 1, 1, false)).toBeGreaterThan(0);
    });
    // Quadrant 3 tests
    test('Q3 Velocity towards center is 0', () => {
        expect(getTorque(-0.5, -0.5, 1, 1, false)).toBeCloseTo(0.0);
    });
    test('Q3 Velocity away from center is 0', () => {
        expect(getTorque(-0.5, -0.5, -1, -1, false)).toBeCloseTo(0.0);
    });
    test('Q3 Velocity towards top left is positive', () => {
        expect(getTorque(-0.5, -0.5, -1, 1, false)).toBeGreaterThan(0);
    });
    test('Q3 Velocity towards bottom right is negative', () => {
        expect(getTorque(-0.5, -0.5, 1, -1, false)).toBeLessThan(0);
    });
    // Quadrant 4 tests
    test('Q4 Velocity towards center is 0', () => {
        expect(getTorque(0.5, -0.5, -1, 1, false)).toBeCloseTo(0.0);
    });
    test('Q4 Velocity away from center is 0', () => {
        expect(getTorque(0.5, -0.5, 1, -1, false)).toBeCloseTo(0.0);
    });
    test('Q4 Velocity towards top right is negative', () => {
        expect(getTorque(0.5, -0.5, 1, 1, false)).toBeLessThan(0);
    });
    test('Q4 Velocity towards bottom left is positive', () => {
        expect(getTorque(0.5, -0.5, -1, -1, false)).toBeGreaterThan(0);
    });
    // Y axis tests
    test('Velocity towards center is 0', () => {
        expect(getTorque(0, 0.5, 0, -1, false)).toBeCloseTo(0.0);
    });
    test('Velocity away from center is 0', () => {
        expect(getTorque(0, 0.5, 0, 1, false)).toBeCloseTo(0.0);
    });
    test('Velocity towards right is positive', () => {
        expect(getTorque(0, 0.5, 1, 0, false)).toBeGreaterThan(0);
    });
    test('Velocity towards left is negative', () => {
        expect(getTorque(0, 0.5, -1, 0, false)).toBeLessThan(0);
    });
    // X axis tests
    test('Velocity towards center is 0', () => {
        expect(getTorque(0.5, 0, -1, 0, false)).toBeCloseTo(0.0);
    });
    test('Velocity away from center is 0', () => {
        expect(getTorque(0.5, 0, 1, 0, false)).toBeCloseTo(0.0);
    });
    test('Velocity towards top is negative', () => {
        expect(getTorque(0.5, 0, 0, 1, false)).toBeLessThan(0);
    });
    test('Velocity towards bottom is positive', () => {
        expect(getTorque(0.5, 0, 0, -1, false)).toBeGreaterThan(0);
    });
});
