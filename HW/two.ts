/* 題目 2: 使用 if 和 for 控制流
1.使用 if 判斷奇數或偶數。
2.使用 for 迴圈列印結果。 */

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}