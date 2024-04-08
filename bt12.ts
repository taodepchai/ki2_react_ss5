let sentence: string = "aabc abcd accccc acnaj accaa";

// Tạo một mảng chứa các từ trong câu
let words: string[] = sentence.split(" ");

let longestWord: string = "";

let maxLength: number = 0;

// Duyệt qua từng từ trong mảng và kiểm tra từng ký tự của từ đó
for (let word of words) {
    let uniqueCharacters: Set<string> = new Set(word);
    if (uniqueCharacters.size === word.length && word.length > maxLength) {
        longestWord = word;
        maxLength = word.length;
    }
}

console.log( longestWord);
