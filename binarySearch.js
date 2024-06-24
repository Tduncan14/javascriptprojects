


function binarySearch(list, item) {


    let low = 0;
    let high = list.length - 1



    while (low <= high) {
        mid = (low + high) / 2
        guess = list[mid]

        if (guess == item) {
            return mid
        }

        if (guess >= item) {
            high = mid - 1

        }
        else {
            low = mid + 1

        }
    }

    return null


}


const My_list = [1, 4, 8, 9, 11, 13, 22]

console.log(binarySearch(My_list, 9))
console.log(binarySearch(My_list, 44))