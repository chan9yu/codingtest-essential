# 공간복잡도

## 공간복잡도란?

공간복잡도는 **알고리즘이 문제를 해결하는 데 필요한 메모리 공간과 입력값 크기와의 관계**를 나타낸다
<br />
쉽게 말해, 입력값이 커질수록 알고리즘이 얼마나 많은 메모리를 사용하는지 측정하는 방법이다

> 🧐 중요 개념
>
> - 입력값의 크기가 증가할 때 알고리즘 메모리 사용량이 어떻게 변하는지 보여준다
> - 알고리즘이 사용하는 변수와 자료구조가 차지하는 공간을 분석한다
> - 효율적인 알고리즘은 입력값이 늘어나도 공간 사용량이 크게 증가하지 않는다

<br />

## 공간복잡도 분석 방법

알고리즘의 공간복잡도를 분석할 때는 다음과 같은 과정을 거친다

1. 알고리즘에서 사용되는 변수와 자료구조가 차지하는 공간을 계산
1. 입력값의 크기(N)에 따라 전체 공간 사용량을 수식으로 표현
1. 수식에서 가장 영향력이 큰 항(최고차항)만 남기고 상수는 제거

<br />

## 최빈값 찾기 알고리즘 비교

### 첫 번째 방법

```javascript
function solution(string) {
  const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
  let maxOccurrence = 0;
  let maxAlphabet = alphabetArray[0];

  for (let alphabet of alphabetArray) {
    let occurrence = 0;

    for (let char of string) {
      if (char === alphabet) {
        occurrence += 1;
      }
    }

    if (maxOccurrence < occurrence) {
      maxOccurrence = occurrence;
      maxAlphabet = alphabet;
    }
  }

  return maxAlphabet;
}
```

공간복잡도 분석:

```javascript
  const alphabetArray = [...] // 26 개의 공간을 사용
  let maxOccurrence = 0; // 1개의 공간을 사용
  let maxAlphabet = alphabetArray[0]; // 1개의 공간을 사용

  for (let alphabet of alphabetArray) {
    let occurrence = 0; // 1개의 공간을 사용

    // ...
  }
```

위에서 사용된 공간들을 더해보면?

1. alphabetArray의 길이 = 26
1. maxOccurrence, maxAlphabet, occurrence 변수 = 3

전체 공간 사용량: 29
<br />
**최종 공간복잡도: $O(1)$**
<br />
(입력 크기와 무관하게 상수 공간을 사용)

<br />

### 두 번째 방법

```javascript
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
```

공간복잡도 분석:

```javascript
  const alphabetOccurrenceArray = new Array(26).fill(0); // 26 개의 공간을 사용

  for (let i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase(); // 1개의 공간을 사용
    if (!/[a-z]/.test(char)) continue;

    const arrIndex = char.charCodeAt(0) - "a".charCodeAt(0); // 1개의 공간을 사용
    alphabetOccurrenceArray[arrIndex] += 1;
  }

  let maxOccurrence = 0; // 1개의 공간을 사용
  let maxAlphabetIndex = 0; // 1개의 공간을 사용

  for (let index = 0; index < alphabetOccurrenceArray.length; index++) {
    const occurrence = alphabetOccurrenceArray[index]; // 1개의 공간을 사용
    if (maxOccurrence < occurrence) {
      maxOccurrence = occurrence;
      maxAlphabetIndex = index;
    }
  }
```

위에서 사용된 공간들을 더해보면?

1. alphabetOccurrenceArray의 길이 = 26
1. char, arrIndex, maxOccurrence, maxAlphabetIndex, occurrence 변수 = 5

전체 공간 사용량: 31
<br />
**최종 공간복잡도: $O(1)$**
<br />
(입력 크기와 무관하게 상수 공간을 사용)

<br />

## 시간복잡도 비교

두 알고리즘의 공간복잡도는 모두 상수 $O(1)$로 실질적으로 차이가 없으므로, 시간복잡도로 비교

<br />

### 첫 번째 방법의 시간복잡도: O(N)

전체 연산 횟수: $52N + 104$

<br />

### 두 번째 방법의 시간복잡도: O(N)

전체 연산 횟수: $3N + 106$

<br />

| N의 크기 | 첫 번째 방법 ($52N + 104$) | 두 번째 방법 ($3N + 106$) | $N^2$     |
| :------- | :------------------------- | :------------------------ | :-------- |
| 1        | 156                        | 109                       | 1         |
| 10       | 624                        | 136                       | 100       |
| 100      | 5304                       | 406                       | 10000     |
| 1000     | 52104                      | 3106                      | 1000000   |
| 10000    | 520104                     | 30106                     | 100000000 |

<br />

## 결론

- **두 알고리즘 모두 $O(N)$ 시간복잡도를 가지지만**, 실제 연산 횟수에서는 두 번째 방법이 훨씬 효율적이다
- 공간복잡도는 동일하게 $O(1)$로, 입력 크기와 관계없이 상수 공간만 사용한다
- 상수 공간을 사용하는 알고리즘들은 공간복잡도보다 **시간복잡도를 우선적으로 고려**해야 한다
- $N^2$과 같은 고차항 공간복잡도를 가진 알고리즘은 입력이 클 때 메모리 문제를 일으킬 수 있다

<br />

> 📝 정리하자면
> <br />
> 공간복잡도는 알고리즘의 메모리 사용량을 평가하는 중요한 지표이다
> <br />
> 그러나 대부분의 알고리즘 문제에서는 **시간복잡도**가 더 중요한 제약 조건이 된다
> <br />
> 공간복잡도가 상수라면 **시간복잡도를 최적화하는 데 집중**해야 한다

<br />

<a href="https://github.com/chan9yu/codingtest-essential">
  <img src="https://img.shields.io/badge/📖-목차로&nbsp;돌아가기-blue" alt="목차로 돌아가기">
</a>