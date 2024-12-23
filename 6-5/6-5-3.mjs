let sum = 0
let i = 1
for (i; i <= 100; i++) {
    if(i%2==0){
        sum += i
        if (sum >= 50) {
            break
            }
    }    
}
console.log("ループ回数は" + i)
console.log("偶数の合計は" + sum)