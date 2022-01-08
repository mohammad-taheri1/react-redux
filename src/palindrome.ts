// function isPalindrome(word) {
//     const lowerCaseWorld = word.toLowerCase();
//     const reversedWord = lowerCaseWorld.split('').reverse().join('');

//     return lowerCaseWorld === reversedWord
// }

export function isPalindrome(word: string): boolean {
    const lowerCaseWorld = word.toLowerCase();
    const reversedWord = lowerCaseWorld.split('').reverse().join('');

    return lowerCaseWorld === reversedWord
}

