function palindrome(kata) {
	var panjang = kata.length - 1
	for (var i = 1; i <= panjang / 2; i++) {
		if (kata[i] === kata[panjang - i]) {
			return true
		} else {
			return false
		}
	}
}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

  

