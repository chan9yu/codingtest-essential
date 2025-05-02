# 최댓값 찾기
# Q. 다음과 같이 숫자로 이루어진 배열이 있을 때, 이 배열 내에서 가장 큰 수를 반환하시오.
#
# [3, 5, 6, 1, 2, 4]

# def solution(array):
#     for number in array:
#         is_max_num = True

#         for compare_number in array:
#             if number < compare_number:
#                 is_max_num = False

#         if is_max_num:
#             return number

def solution(array):
    max_num = array[0]
    
    for number in array:
        if max_num < number:
            max_num = number
    
    return max_num

print("정답 = 6 / 현재 풀이 값 = ", solution([3, 5, 6, 1, 2, 4]))
print("정답 = 6 / 현재 풀이 값 = ", solution([6, 6, 6]))
print("정답 = 1888 / 현재 풀이 값 = ", solution([6, 9, 2, 7, 1888]))