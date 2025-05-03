# 시간복잡도 이해하기

## 시간복잡도란?

시간복잡도는 **알고리즘이 문제를 해결하는 데 필요한 연산 횟수와 입력값 크기와의 관계**를 나타낸다
<br />
쉽게 말해, 입력값이 커질수록 알고리즘이 얼마나 효율적으로 작동하는지 측정하는 방법이다

> 🧐 중요 개념
>
> - 입력값의 크기가 증가할 때 알고리즘 실행 시간이 어떻게 변하는지 보여준다
> - 주로 최악의 경우를 기준으로 표현한다
> - 상세한 실행 시간보다는 증가 추세를 분석한다

<br />

## 시간복잡도 분석 방법

알고리즘의 시간복잡도를 분석할 때는 다음과 같은 과정을 거친다

1. 각 연산(대입, 비교 등)이 수행되는 횟수를 계산
1. 입력값의 크기(N)에 따라 전체 연산 횟수를 수식으로 표현
1. 수식에서 가장 영향력이 큰 항(최고차항)만 남기고 상수는 제거

<br />

## 최댓값 찾기 알고리즘 비교

### 첫 번째 방법 (중첩 반복문)

```javascript
function solution(array) {
  for (const number of array) {
    let isMaxNum = true;

    for (const compareNumber of array) {
      if (number < compareNumber) {
        isMaxNum = false;
      }
    }

    if (isMaxNum) {
      return number;
    }
  }
}
```

시간복잡도 분석:

```javascript
for (const number of array) {
  // array 의 길이만큼 아래 연산이 실행
  let isMaxNum = true; // 대입 연산 1번 실행

  for (const compareNumber of array) {
    // array 의 길이만큼 아래 연산이 실행
    if (number < compareNumber) {
      // 비교 연산 1번 실행
      isMaxNum = false; // 대입 연산 1번 실행
    }
  }

  if (isMaxNum) {
    // 비교 연산 1번 실행
    return number;
  }
}
```

위에서 연산된 것들을 더해보면?

1. array의 길이 × 대입 연산 1번 (isMaxNum 초기화) = $N$
1. array의 길이 × array의 길이 × (비교 연산 1번 + 최대 대입 연산 1번) = $N × N × 2$
1. array의 길이 × 비교 연산 1번 (if (isMaxNum)) = $N$

전체 연산 횟수: $N + 2N^2 + N$ = $2N^2 + 2N$
<br />
**최종 시간복잡도: $O(N²)$**
<br />
입력값이 클수록 연산량이 급격히 증가 ❌

<br />

### 두 번째 방법 (단일 반복문)

```javascript
function solution(array) {
  let maxNum = Number.MIN_SAFE_INTEGER;

  for (const number of array) {
    if (maxNum < number) {
      maxNum = number;
    }
  }

  return maxNum;
}
```

시간복잡도 분석:

```javascript
let maxNum = Number.MIN_SAFE_INTEGER; // 연산 1번 실행

for (const number of array) {
  // array의 길이만큼 아래 연산이 실행
  if (maxNum < number) {
    // 비교 연산 1번 실행
    maxNum = number; // 대입 연산 1번 실행
  }
}
```

위에서 연산된 것들을 더해보면?

1. maxNum 대입 연산 1번
1. array의 길이 × (비교 연산 1번 + 대입 연산 1번) = $N × 2$

전체 연산 횟수: $1 + N × 2$ = $2N + 1$
<br />
**최종 시간복잡도: $O(N)$**
<br />
입력값이 커져도 연산량 증가가 완만함 ✅

<br />

## 비교하기

두 알고리즘의 실제 연산 횟수를 표로 비교해보면?

| N의 크기 | $2N^2 + N$ | $2N + 1$ |
| :------- | :--------- | :------- |
| 1        | 3          | 3        |
| 10       | 210        | 21       |
| 100      | 20100      | 201      |
| 1000     | 2001000    | 2001     |
| 10000    | 200010000  | 20001    |

이 비교를 통해 알 수 있는 점

- $N$이 커질수록 두 알고리즘의 성능 차이는 기하급수적으로 커진다
- $N^2$과 $N$의 차이는 입력값이 클 때 매우 중요하다
- 시간복잡도를 비교할 때는 최고차항(가장 큰 영향을 미치는 항)만 고려한다

<br />

## 결론

- O(N²) 알고리즘은 큰 입력값에서 비효율적이므로, 가능하면 낮은 차수의 시간복잡도 $O(1)$, $O(log N)$, $O(N)$ 으로 최적화해야 한다
- 시간 복잡도는 입력 크기가 증가할 때 연산량이 어떻게 변화하는지를 분석하는 것이 핵심이다
- 좋은 알고리즘을 설계하려면 연산량이 급격히 증가하지 않도록 고려해야 한다

<br />

<a href="https://github.com/chan9yu/codingtest-essential">
  <img src="https://img.shields.io/badge/📖-목차로&nbsp;돌아가기-blue" alt="목차로 돌아가기">
</a>