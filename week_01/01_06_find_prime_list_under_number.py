# 소수 나열하기
# Q. 정수를 입력 했을 때, 그 정수 이하의 소수를 모두 반환하시오. 
# 소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.
#
# 20이 입력된다면, 아래와 같이 반환해야 합니다!
# [2, 3, 5, 7, 11, 13, 17, 19]

# def solution(number):
#     prime_list = []

#     for n in range(2, number + 1):
#         for i in prime_list:
#             if i * i <= n and n % i == 0:
#                 break
#         else:
#             prime_list.append(n)

#     return prime_list

# 에라토스테네스의 체 풀이
def solution(number):
    sieve = [False, False] + [True] * (number - 1)
    
    for i in range(2, int(number**0.5) + 1):
        if sieve[i]:
            for j in range(i * i, number + 1, i):
                sieve[j] = False
                
    primes = []
    for i in range(2, number + 1):
        if sieve[i]:
            primes.append(i)
            
    return primes

print(solution(20))