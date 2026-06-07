let count = 0;
for (let i = 1; i <= 100; i++){
    for (let j = i; j <= 100; j++){
        let checkNum = (i + j) % 17;
        if (checkNum === 0){
            console.log(`(${i}, ${j}) = `, i + j);
            count++;
        }
        continue;
    }

}
console.log(`Number of pair: ${count}`);
