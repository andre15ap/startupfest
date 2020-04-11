export default function ordenateByKey(array, key) {
  return array.sort(function(a, b) {
    if (a[key] < b[key]) {
      return 1;
    }
    if (a[key] > b[key]) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}
