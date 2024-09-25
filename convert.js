function footToMeter(foot) {
  let meter = 0.305 * foot;
  return meter;
}

function meterToFoot(meter) {
  let foot = 3.279 * meter;
  return foot;
}

let feet_arr = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0];
let meter_arr = new Array(10);
for (ind in feet_arr) {
  meter_arr[ind] = footToMeter(feet_arr[ind]);
}
console.log(meter_arr);

// Create meter_arr2
let num = 20.0;
let meter_arr2 = [];
while (num <= 65) {
  meter_arr2.push(num);
  num += 5.0;
}

let feet_arr2 = new Array(10);
for (ind in meter_arr) {
  feet_arr2[ind] = meterToFoot(meter_arr2[ind]);
}
console.log(feet_arr2);
