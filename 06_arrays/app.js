var myArray = [2,1,4,7,5];
// var myArray = [];
// var myArray = new Array();
// var myArray = new Array(5);

console.log(myArray);
console.log(myArray[2]);

console.log(myArray);
myArray[2] = false;
console.log(myArray[2]);

myArray.sort();
console.log(myArray);
myArray.reverse();
console.log(myArray);


var tags = "#한양대#에리카#ERICA#멋쟁이사자처럼#멋사#5기#파이팅";

console.log(tags);

var tagsArray = tags.split('#');

console.log(tagsArray);

for(var i=1; i<tagsArray.length; i++) {
	console.log(tagsArray[i]);
}