# 최빈값 찾기
# Q. 다음과 같은 문자열을 입력받았을 때, 어떤 알파벳이 가장 많이 포함되어 있는지 반환하시오.
# (단 최빈값을 가진 알파벳이 여러개일 경우 알파벳 순서가 가장 앞에 위치한 알파벳을 출력하시오)
#
# "hello my name is chan9yu"

# def solution(string):
#     alphabet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
#     max_occurrence = 0
#     max_alphabet = alphabet_array[0]

#     for alphabet in alphabet_array:
#         occurrence = 0

#         for char in string:
#             if char == alphabet:
#                 occurrence += 1

#         if max_occurrence < occurrence:
#             max_occurrence = occurrence
#             max_alphabet = alphabet

#     return max_alphabet

def solution(string):
	alphabet_occurrence_array = [0] * 26

	for char in string:
		if not char.isalpha():
			continue
		arr_index = ord(char) - ord('a')
		alphabet_occurrence_array[arr_index] += 1

	max_occurrence = 0
	max_alphabet_index = 0

	for index in range(len(alphabet_occurrence_array)):
		occurrence = alphabet_occurrence_array[index]
		if max_occurrence < occurrence:
			max_occurrence = occurrence
			max_alphabet_index = index

	return chr(max_alphabet_index + ord('a'))

print("정답 = a 현재 풀이 값 =", solution("hello my name is chan9yu"))
print("정답 = e 현재 풀이 값 =", solution("we love algorithm"))