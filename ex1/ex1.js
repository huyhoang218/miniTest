function deleteArray(arr, num){
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (num !== arr[i]){
            newArray.push(arr[i])
        }
    }
    return newArray
}
let array = []
let number
do {
    number = +prompt('Nhap so phan tu mang')
}while (isNaN(number) || number <= 0)
for (let i = 0; i < number; i++) {
        array[i] = prompt('index ' + i)
}
console.log(array)
let numDelete = prompt('Nhap phan tu can xoa')
console.log(deleteArray(array, numDelete))