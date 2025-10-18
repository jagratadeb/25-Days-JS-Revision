const str = "Jagrata Deb";
const name = str;

// ✅ Declaration
let str1 = "Hello"; // double quotes
let str2 = "World"; // single quotes
let str3 = `Hi ${name}`; // template literal with interpolation
console.log(str3); // Output: Hi Jagrata Deb

// ✅ Properties & Methods
console.log(str1.length); // returns length → 5
console.log(str.toUpperCase()); // converts to uppercase → JAGRATA DEB
console.log(str.toLowerCase()); // converts to lowercase → jagrata deb
console.log(str.charAt(2)); // character at index → g
console.log(str.indexOf("e")); // index of character → 9
console.log(str.includes("lo")); // checks substring presence → false

// ✅ Substring & Slice
console.log(str.substring(0, 3)); // from index 0 to 2 → Jag
console.log(str.slice(-3)); // last 3 characters → Deb

// ✅ Trim & Replace
const paddedStr = "   Jagrata Deb   ";
console.log(paddedStr.trim()); // removes leading/trailing spaces → Jagrata Deb
console.log(str.replace("Deb", "Sen")); // replaces substring → Jagrata Sen

// ✅ Split
console.log(str.split(" ")); // splits into array by space → ["Jagrata", "Deb"]

// ✅ Object Form
let objStr = new String("Game"); // string as object
console.log(objStr.length); // still works → 4

// ✅ Best Practice
const userName = "Jagrata";
const repoCount = 42;
let msg = `Hello, ${userName}. You have ${repoCount} repos.`;
console.log(msg); // Output: Hello, Jagrata. You have 42 repos.
