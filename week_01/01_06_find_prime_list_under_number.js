/**
 * 소수 나열하기
 * Q. 정수를 입력 했을 때, 그 정수 이하의 소수를 모두 반환하시오.
 * 소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.
 *
 * 20이 입력된다면, 아래와 같이 반환해야 합니다!
 * [2, 3, 5, 7, 11, 13, 17, 19]
 */

// function solution(number) {
// 	const primeList = [];

// 	for (let n = 2; n <= number; n++) {
// 		let isPrime = true;

// 		for (const prime of primeList) {
// 			if (prime * prime <= n && n % prime === 0) {
// 				isPrime = false;
// 				break;
// 			}
// 		}

// 		if (isPrime) {
// 			primeList.push(n);
// 		}
// 	}

// 	return primeList;
// }

// 에라토스테네스의 체 풀이
function solution(number) {
	const answer = [];
	const sieve = [false, false, ...Array(number - 1).fill(true)];

	for (let i = 2; i <= Number(Math.sqrt(number)); i++) {
		if (sieve[i]) {
			for (let j = i * i; j <= number; j += i) {
				sieve[j] = false;
			}
		}
	}

	for (let i = 2; i <= number; i++) {
		if (sieve[i]) {
			answer.push(i);
		}
	}

	return answer;
}

console.log(solution(20));



