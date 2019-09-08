function groupAnimals(animals) {
	var group = [];
	var temp = []
	animals.sort();
	for (var i = 0; i < animals.length; i++) {
		var huruf = animals[i][0];
		temp.push(animals[i])
		if (animals[i + 1]) {
			if (animals[i + 1][0] !== huruf) {
				group.push(temp)
				temp = []
			}
		} else {
			group.push(temp)
		}
	}
	return group
}
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]