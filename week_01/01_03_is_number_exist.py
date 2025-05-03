# 배열에서 특정 요소 찾기
# Q. 다음과 같은 숫자로 이루어진 배열이 있을 때, 이 배열 내에 특정 숫자가 존재한다면 True, 존재하지 않다면 False 를 반환하시오.
#
# [3, 5, 6, 1, 2, 4]

def solution(number, array):
    for item in array:
      if number == item:
        return True

    return False

print("정답 = True 현재 풀이 값 =", solution(3, [3,5,6,1,2,4]))
print("정답 = Flase 현재 풀이 값 =", solution(7, [6,6,6]))
print("정답 = True 현재 풀이 값 =", solution(2, [6,9,2,7,1888]))