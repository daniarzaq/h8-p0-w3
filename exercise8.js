function pasanganTerbesar(num) {
	number = num.toString();
	var biggest = 0;
	for (var i = 0; i < number.length; i++) {
		var couple = number.slice(i, i + 2);
		if (couple > biggest) {
			biggest = couple;
		}
	}
	return biggest
}
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99