/**
 * 반복되지 않는 문자
 * Q. 다음과 같이 영어로 되어 있는 문자열이 있을 때, 이 문자열에서 반복되지 않는 첫 번째 문자를 반환하시오.
 * 만약 그런 문자가 없다면 '_' 를 반환하시오.
 *
 * "abadabac"
 */

function solution(string) {
	const alphabetOccurrenceArray = new Array(26).fill(0);

	for (const char of string) {
		if (!/[a-z]/.test(char)) continue;

		const arrIndex = char.charCodeAt(0) - "a".charCodeAt(0);
		alphabetOccurrenceArray[arrIndex] += 1;
	}

	const notRepeatingCharacterArray = [];
	for (let index = 0; index < alphabetOccurrenceArray.length; index++) {
		const alphabetOccurrence = alphabetOccurrenceArray[index];

		if (alphabetOccurrence === 1) {
			notRepeatingCharacterArray.push(String.fromCharCode(index + "a".charCodeAt(0)));
		}
	}

	for (const char of string) {
		if (notRepeatingCharacterArray.includes(char)) {
			return char;
		}
	}

	return "_";
}

console.log("정답 = d 현재 풀이 값 =", solution("abadabac"));
console.log("정답 = c 현재 풀이 값 =", solution("aabbcddd"));
console.log("정답 = _ 현재 풀이 값 =", solution("aaaaaaaa"));
