var myString = "helloworld";

console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf('o'));

var str = "Hanyang University Likelion";

if (str.indexOf('ERICA') === -1) {
	console.log('ERICA라는 단어가 존재하지 않습니다.');
}

var lower = 'abc';
var upper = 'ABC';

console.log(lower == upper);


var sliceWord = "Hanyang University ERICA Likelion";

console.log(sliceWord.slice(2));
console.log(sliceWord.slice(2,10));

var tags = "안녕, 반가워, 하하";

console.log(tags);

var list = tags.split(',');

console.log(list);
