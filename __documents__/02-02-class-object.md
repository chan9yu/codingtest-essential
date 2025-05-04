# 클래스와 객체

## 클래스란?

- 객체를 만들기 위한 **틀(template)**
- 속성과 동작(메서드)을 정의

```javascript
class Person {
  // 빈 클래스 예시
}
```

<br />

## 객체란?

- 클래스에 의해 생성된 **실제 데이터 단위**
- 세상에 존재하는 구체적인 대상

```javascript
const person1 = new Person();
const person2 = new Person();
```

<br />

## 생성자(Constructor)

- 클래스에서 객체가 생성될 때 자동으로 호출되는 초기화 함수
- constructor() 안에서 속성을 초기화


```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const user = new Person("chan9yu");
console.log(user.name); // "chan9yu"
```

<br />

## 메서드(Method)

- 클래스에 정의된 기능
- 각 객체가 호출할 수 있는 동작

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  talk() {
    console.log(`안녕하세요! 저는 ${this.name}입니다.`);
  }
}

const p1 = new Person("chan9yu");
p1.talk(); // "안녕하세요! 저는 chan9yu입니다."
```

<br />

## 예제: 스마트폰 클래스

```javascript
class SmartPhone {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.battery = 100;
    this.isOn = false;
  }
  
  powerOn() {
    this.isOn = true;
    console.log(`${this.brand} ${this.model}이 켜졌습니다.`);
  }
  
  powerOff() {
    this.isOn = false;
    console.log(`${this.brand} ${this.model}이 꺼졌습니다.`);
  }
  
  useBattery(amount) {
    if (this.battery >= amount) {
      this.battery -= amount;
      console.log(`배터리 ${amount}% 사용. 남은 배터리: ${this.battery}%`);
    } else {
      console.log("배터리가 부족합니다.");
    }
  }
}

const myPhone = new SmartPhone("Apple", "iPhone 15");
myPhone.powerOn(); // "Apple iPhone 15이 켜졌습니다."
myPhone.useBattery(30); // "배터리 30% 사용. 남은 배터리: 70%"

const friendPhone = new SmartPhone("Samsung", "Galaxy S23");
friendPhone.powerOn(); // "Samsung Galaxy S23이 켜졌습니다."
```

<br />

## 결론

클래스를 사용하면:

- 연관성 있는 데이터를 체계적으로 관리
- 동일한 형태의 객체를 쉽게 생성
- 재사용 가능한 코드 작성
- 코드의 구조와 의미가 명확해짐

<br />

<a href="https://github.com/chan9yu/codingtest-essential">
  <img src="https://img.shields.io/badge/📖-목차로&nbsp;돌아가기-blue" alt="목차로 돌아가기">
</a>