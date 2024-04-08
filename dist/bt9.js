"use strict";
let inputString = "aabbcd";
let uniqueChars = new Set(inputString);
let filteredString = Array.from(uniqueChars).join("");
console.log("Chuỗi sau khi lọc:", filteredString);
