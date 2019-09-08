function targetTerdekat(arr) {
	var targeto = []
	var targetx = []
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 'o') {
			targeto.push(i)
		} else if (arr[i] === 'x') {
			targetx.push(i)
		}
	}
	var target
	if (targetx.length === 0) {
		target = 0
		return target;
	} else if (targeto[targeto.length - 1] > targetx[targetx.length - 1]) {
		target = targeto[targeto.length - 1] - targetx[targetx.length - 1]
		return target;
	} else {
		target = targetx[0] - targeto[targeto.length - 1]
		return target;
	}
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2