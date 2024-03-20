let word = "JavaScript";
word[0] = "Y";
console.log(word);

let numOne = 3;
let numTwo = 3;
//Primitive có thể so sánh theo giá trị
console.log(numOne == numTwo); //true

let js = "javascript";
let pt = "python";
console.log(js == pt); //false

let nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);
let numbers = [1, 2, 3];
//Non-primitive không thể so sánh theo giá trị mặc dù bằng nhau
console.log(nums == numbers); //false
//Non-primitive so sánh bằng tham chiếu, chúng chỉ bằng nhau khi thám chiếu đến đối tượng nhất định
let arrays = nums; //Tham chiếu đến biến nums
console.log(arrays == nums); //true

//Number
//Dùng let để khai báo biến dễ thay đổi
let age = 22;
//Dùng const để khai báo biến hằng số (không đổi)
const gravity = 9.81;
const bodyTemp = 37;
console.log(age, gravity, bodyTemp);
//Math object
const PI = Math.PI;
console.log(PI);
//Làm tròn số rounding
console.log(Math.round(PI));
console.log(Math.round(gravity));
//Tìm min max
console.log(Math.min(-5, 3, 20, 4, 5, 10));
console.log(Math.max(-5, 3, 20, 4, 5, 10));
//Random
const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);
const num = Math.round(Math.random() * 10); // creates random number between 0 to 10
console.log(num);
//Trị tuyệt đối absolute value
console.log(Math.abs(-10.5));
//Căn bậc 2
console.log(Math.sqrt(100));
console.log(Math.sqrt(2));
//Số mũ
console.log(Math.pow(3, 2)); //3^2
console.log(Math.pow(2, 3)); //2^3
console.log(Math.E);
//Logarithm
console.log(Math.log(2)); //Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.LN2); //Returns the natural logarithm of 2
//Lượng giác
console.log(Math.sin(0));
console.log(Math.cos(0));

//Strings
//Strings are texts, which are under single , double, back-tick quote.
let space = " "; // an empty space string
let firstName = "Phat";
let lastName = "Huynh";
let country = "VietNam";
let city = "SaiGon";
let language = "JavaScript";
let job = "student";
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

let fullName = firstName + space + lastName;
console.log(fullName);
let personInfoOne =
    fullName + ". I am " + age + " years old" + ". I live in " + country;
console.log(personInfoOne);

//If the string length is too big it does not fit in one line
//We can use the backslash character (\) at the end of each line
const paragraph =
    "My name is Asabeneh Yetayeh. 'I live in Finland', Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
I hope you are enjoying too.";
console.log(paragraph);
/*
    \n: new line
    \t: Tab, means 8 spaces
    \\: Back slash
    \': Single quote (')
    \": Double quote (") 
*/
//Để chèn biểu thức vào chuỗi ta dùng 2 dấu back-ticks ``
console.log(`The sum of 2 and 3 is 5`);
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${3} is ${a + b}`);
console.log(`${b} is greater than ${a}: ${b > a}`);
console.log(`${a} is greater than ${b}: ${a > b}`);
let personInfoTwo = `I am ${fullName}. I am ${age} years old. I live in ${country}.`;
console.log(personInfoTwo);
//String Methods
// 1. length => Trả về độ dài của chuỗi bao gồm cả khoảng trống
let string = "JavaScript";
console.log(fullName.length); //Phat Huynh
console.log(string.length);
// 2. Các ký tự trong một chuỗi (bắt đầu bằng 0)
let firstLetter = string[0];
let lastLetter = string[9];
console.log(lastLetter);
let lastIndex = string.length - 1;
console.log(string[lastIndex]);
// 3. toUpperCase(): chuyển chuỗi thành chữ in hoa
console.log(string.toUpperCase());
// 4. toLowerCase(): chuyển chuỗi thành chữ thường
console.log(string.toLowerCase());
// 5. substr(): 2 đối số, số vị trí bắt đầu và số lượng ký tự cần cắt (không còn dùng nữa - Deprecated)
//let string = "JavaScript";
//let country = "VietNam";
console.log(string.substr(4, 6));
console.log(country.substr(0, 4));
// 6. substring(): 2 đối số, số vị trí bắt đầu và số vị trí dừng lại.
// Nếu cắt đến hết chuỗi thì ta không cần để số thứ 2
console.log(string.substring(4));
console.log(country.substring(0, 4));
// 7. split(): phân chia, tách chuỗi tại vị trí xác định
console.log(string.split()); // Changes to an array -> ["JavaScript"]
console.log(string.split("")); // Split to an array at each letter -> ['J', 'a', 'v', 'a', ...]
console.log(fullName.split());
console.log(fullName.split(" ")); // Split to an array at space -> ['Phat', 'Huynh']
let countries = "Finland, Sweden, Norway, Denmark, and Iceland";
console.log(countries.split(", ")); // Split to an array at ',' and space
// 8. trim(): loại bỏ khoảng trắng ở đầu và cuối chuỗi
let sentence = "    30 Days Of JavaScript   ";
console.log(sentence.trim());
// 9. includes(): Kiểm tra xem đối số nhận vào có tồn tại trong chuỗi hay không và trả về boolean.
console.log(sentence.includes("Days"));
console.log(sentence.includes("days"));
// 10. replace(): thay thế chuỗi con cũ thành chuỗi con mới
console.log(sentence.replace("JavaScript", "Html,Css")); // Thay JavaScript thành Html,Css
