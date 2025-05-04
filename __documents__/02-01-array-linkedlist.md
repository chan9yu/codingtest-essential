# Array와 LinkedList

## Array (배열)

- 고정된 크기의 데이터 저장 구조
- **메모리상에 연속적으로 저장**되어 빠른 인덱스 접근 가능

```javascript
const library = ["수학", "과학", "역사", "영어", "음악"];
console.log(library[2]); // "역사" — 인덱스로 즉시 접근 가능
```

<br />

## LinkedList (연결 리스트)

- **동적으로 크기** 변경 가능한 구조
- 각 노드가 **포인터를 통해 다음 노드와 연결**

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 노드 연결
const train = new Node("기관실");
train.next = new Node("시멘트");
train.next.next = new Node("자갈");
// 계속 연결 가능
```

<br />

## 동작 방식 비교

### Array의 중간 삽입 (O(N))

```javascript
const library = ["수학", "과학", "역사", "영어", "음악"];
const newLibrary = new Array(library.length + 1);

newLibrary[0] = library[0];
newLibrary[1] = library[1];
newLibrary[2] = "지리";
newLibrary[3] = library[2];
newLibrary[4] = library[3];
newLibrary[5] = library[4];

// 결과: ["수학", "과학", "지리", "역사", "영어", "음악"]
```
<br />

### LinkedList의 중간 삽입 (O(1))

```javascript
const graphiteNode = new Node("흑연");

// "자갈"과 "밀가루" 사이에 삽입
graphiteNode.next = gravelNode.next; // 밀가루
gravelNode.next = graphiteNode; // 자갈 → 흑연
```

<br />

## 성능 비교

| 연산             | Array                          | LinkedList                            |
| ---------------- | ------------------------------ | ------------------------------------- |
| 특정 원소 조회   | $O(1)$ (인덱스로 바로 접근)    | $O(N)$ (처음부터 순차 탐색)           |
| 중간 삽입/삭제   | $O(N)$ (복사 및 이동 필요)     | $O(1)$ (포인터만 수정)                |
| 데이터 추가      | 공간 부족 시 전체 복사 필요    | 언제든지 노드 연결로 추가 가능        |
| 메모리 사용 효율 | 연속된 공간 필요 (단편화 적음) | 포인터 공간 추가 필요 (단편화 가능성) |

<br />

## 언제 사용할까?

- **Array**: 데이터 접근이 빈번한 경우
- **LinkedList**: 삽입/삭제가 자주 일어나는 경우

<br />

<a href="https://github.com/chan9yu/codingtest-essential">
  <img src="https://img.shields.io/badge/📖-목차로&nbsp;돌아가기-blue" alt="목차로 돌아가기">
</a>