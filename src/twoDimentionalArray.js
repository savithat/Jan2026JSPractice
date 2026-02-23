//3*3 matrix: 2D array: [row][column]
let num =[
    [1,2,3],
    [10, 20, 30],
    [100, 200, 300]
]

console.log(num[0][0])
console.log(num[2][2])

//2-D array
console.log()
for(let i=0; i<num.length; i++){
    for(let j=0; j<num[i].length; j++){
        console.log(num[i][j])
    }
}


console.log()
for(let i=0; i<num.length; i++){
    for(let j=0; j<num[i].length; j++){
        process.stdout.write(`${num[i][j]} `)
    }
    process.stdout.write('\n')
}


//jagged array
let marks = [
    [1,2,3],
    [11],
    [21,22,23,24,25],
    [31,32]
]

console.log()
for(let i=0; i<marks.length; i++){
    for(let j=0; j<marks[i].length; j++){
         process.stdout.write(`${marks[i][j]} `)
    }
    console.log()
}
