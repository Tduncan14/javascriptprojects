
function quicksort(array) {


    if (array.length < 2) {
        return array
    }



    else {

        let pivot = array[0];
        let less = array.slice(1).filter(function (i) {
            return i <= pivot;
        })
        let greater = array.slice(1).filter(function (i) {
            return i > pivot;
        })

        return quicksort(less).concat([pivot], quicksort(greater))



    }

}


let array2 = [1, 12913, 12, 31, 12, 3, 1, 31, 434, 43]

console.log(quicksort(array2))