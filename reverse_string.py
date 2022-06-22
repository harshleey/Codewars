# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

# def solution (string):
#   reverse = string[::-1]


#   print(reverse)

# solution("Hello World")

# OR 

# def solution (string):
#   reverse = "".join(reversed(string))


#   print(reverse)

# solution("Hello World")

# Input: 42145 Output: 54421

# Input: 145263 Output: 654321

# Input: 123456789 Output: 9876543

def descending(integers):
  result = ", ".join(integers)

  print (result)

descending(123456789)



def almostIncreasingSequence(sequence):
    sorted_sequence = sorted(sequence)
    counter = 0
    for i in len(sequence):
        if sorted_sequence[i] != sequence[i]:
            counter += 1
    if counter > 1:
        return True
    else:
        return False