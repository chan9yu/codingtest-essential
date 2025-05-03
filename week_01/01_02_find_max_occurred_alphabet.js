/**
 * 최빈값 찾기
 * Q. 다음과 같은 문자열을 입력받았을 때, 어떤 알파벳이 가장 많이 포함되어 있는지 반환하시오.
 * (단 최빈값을 가진 알파벳이 여러개일 경우 알파벳 순서가 가장 앞에 위치한 알파벳을 출력하시오)
 *
 * "hello my name is chan9yu"
 */

// function solution(string) {
//   const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
//   let maxOccurrence = 0;
//   let maxAlphabet = alphabetArray[0];

//   for (let alphabet of alphabetArray) {
//     let occurrence = 0;

//     for (let char of string) {
//       if (char === alphabet) {
//         occurrence += 1;
//       }
//     }

//     if (maxOccurrence < occurrence) {
//       maxOccurrence = occurrence;
//       maxAlphabet = alphabet;
//     }
//   }

//   return maxAlphabet;
// }

function solution(string) {
	const alphabetOccurrenceArray = new Array(26).fill(0);

	for (let i = 0; i < string.length; i++) {
		const char = string[i].toLowerCase();
		if (!/[a-z]/.test(char)) continue;

		const arrIndex = char.charCodeAt(0) - "a".charCodeAt(0);
		alphabetOccurrenceArray[arrIndex] += 1;
	}

	let maxOccurrence = 0;
	let maxAlphabetIndex = 0;

	for (let index = 0; index < alphabetOccurrenceArray.length; index++) {
		const occurrence = alphabetOccurrenceArray[index];
		if (maxOccurrence < occurrence) {
			maxOccurrence = occurrence;
			maxAlphabetIndex = index;
		}
	}

	return String.fromCharCode(maxAlphabetIndex + "a".charCodeAt(0));
}

console.log("정답 = a 현재 풀이 값 =", solution("hello my name is chan9yu"));
console.log("정답 = e 현재 풀이 값 =", solution("we love algorithm"));
