function isPalindrome(word) {
    const lowerCaseWorld = word.toLowerCase();
    const reversedWord = lowerCaseWorld.split('').reverse().join('');

    return lowerCaseWorld === reversedWord
}