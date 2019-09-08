function angkaPalindrome(num) {
	if (num < 9) return num + 1;
	else if (num === cekBalik(num)) return num;
	else {
		do {
			num++;
			var b = cekBalik(num);
		} while (num !== b);
		return num;
	}
}

function cekBalik(num) {
	return parseInt(num.toString().split("").reverse().join(""));
}
   
  
  
  

  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  console.log(angkaPalindrome(22)); // 22