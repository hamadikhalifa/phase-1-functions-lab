function distanceFromHqInFeet(someValue) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(someValue - 42);
    return distanceInBlocks * feetPerBlock;
}

console.log(distanceFromHqInFeet(50)); // Expected: 2112
console.log(distanceFromHqInFeet(34)); // Expected: 2112
console.log(distanceFromHqInFeet(42)); // Expected: 0

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * feetPerBlock;
}

console.log(distanceTravelledInFeet(34, 38)); // Expected: 1056
console.log(distanceTravelledInFeet(50, 42)); // Expected: 2112
console.log(distanceTravelledInFeet(42, 50)); // Expected: 2112

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}

console.log(calculatesFarePrice(43, 44)); // Expected: 0
console.log(calculatesFarePrice(34, 32)); // Expected: 2.56
console.log(calculatesFarePrice(50, 58)); // Expected: 25
console.log(calculatesFarePrice(34, 24)); // Expected: "cannot travel that far"

function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; 
    return Math.abs(someValue - hqLocation);  // Ensure positive distance
}

console.log(distanceFromHqInBlocks(50)); // Expected: 8
console.log(distanceFromHqInBlocks(34)); // Expected: 8
console.log(distanceFromHqInBlocks(42)); // Expected: 0
console.log(distanceFromHqInBlocks(30)); // Expected: 12