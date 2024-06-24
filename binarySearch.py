def binarySearch(list,item):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = list[mid]
        if guess == item:
          return mid
        if guess > item:
            high = mid -1

        else:
            low = mid + 1
  
            
    return None 

My_list = [1,4,8,9,11,13,22]

print(binarySearch(My_list,9))
print(binarySearch(My_list,44))
