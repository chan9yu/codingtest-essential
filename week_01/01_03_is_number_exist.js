/**
 * 배열에서 특정 요소 찾기
 * Q. 다음과 같은 숫자로 이루어진 배열이 있을 때, 이 배열 내에 특정 숫자가 존재한다면 True, 존재하지 않다면 False 를 반환하시오.
 *
 * [3, 5, 6, 1, 2, 4]
 */

function solution(number, array) {
	for (const item of array) {
		if (number === item) {
			return true;
		}
	}

	return false;
}

console.log("정답 = true 현재 풀이 값 =", solution(3, [3, 5, 6, 1, 2, 4]));
console.log("정답 = false 현재 풀이 값 =", solution(7, [6, 6, 6]));
console.log("정답 = true 현재 풀이 값 =", solution(2, [6, 9, 2, 7, 1888]));
