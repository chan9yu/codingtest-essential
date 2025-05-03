/**
 * 최댓값 찾기
 * Q. 다음과 같이 숫자로 이루어진 배열이 있을 때, 이 배열 내에서 가장 큰 수를 반환하시오.
 *
 * [3, 5, 6, 1, 2, 4]
 */

// function solution(array) {
//   for (const number of array) {
//     let isMaxNum = true;

//     for (const compareNumber of array) {
//       if (number < compareNumber) {
//         isMaxNum = false;
//       }
//     }

//     if (isMaxNum) {
//       return number;
//     }
//   }
// }

function solution(array) {
	let maxNum = Number.MIN_SAFE_INTEGER;

	for (const number of array) {
		if (maxNum < number) {
			maxNum = number;
		}
	}

	return maxNum;
}

console.log("정답 = 6 / 현재 풀이 값 = ", solution([3, 5, 6, 1, 2, 4]));
console.log("정답 = 6 / 현재 풀이 값 = ", solution([6, 6, 6]));
console.log("정답 = 1888 / 현재 풀이 값 = ", solution([6, 9, 2, 7, 1888]));
