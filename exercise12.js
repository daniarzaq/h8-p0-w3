function tentukanDeretGeometri(arr) {
	var geometri;
	for (i = 0; i < (arr.length - 2); i++) {
		geometri = arr[i + 1] / arr[i] == arr[i + 2] / arr[i + 1]
	}
	if (geometri) {
		return true
	} else {
		return false
	}
}
  
// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false