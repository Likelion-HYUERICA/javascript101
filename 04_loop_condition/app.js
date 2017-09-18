// 짝수만 출력하기
for(var i=1; i<=100; i++) {
	if(i%2 == 0) {
		console.log(i);
	}
}
// 홀수만 출력하기
for(var i=1; i<=100; i++) {
	if(i%2 == 1) {
		console.log(i);
	}
}
// 1부터 100까지 다 더하기
var sum = 0;
for(var i=1; i<=100; i++) {
	sum += i;
}
console.log(sum);

sum = 0;
function addAll (a, b) {
	for(var i=a; i<=b; i++) {
		sum += i;
	}
	return sum;
}

console.log(addAll(1,10));