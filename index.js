const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (accumulator, num) => {
    return accumulator += num
}
const totalBatteries = batteryBatches.reduce(reducer)