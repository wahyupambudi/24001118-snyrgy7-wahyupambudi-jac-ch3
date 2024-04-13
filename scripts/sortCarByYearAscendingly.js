function sortCarByYearAscendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe

    console.log(cars);

    // Clone array untuk menghindari side-effect
    // Apa itu side effect?
    const result = [...cars];
    const n = cars.length;

    // Tulis code-mu disini

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (result[j].year > result[j + 1].year) {
                const temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    // Rubah code ini dengan array hasil sorting secara ascending
    return result;
}


// function sortCarByYearAscendingly() {
//     // Sangat dianjurkan untuk console.log semua hal hehe
//     let cars = [3, 12, 15, 9, 1, 2]
//         // console.log(cars);

//     // Clone array untuk menghindari side-effect
//     // Apa itu side effect?
//     const result = [...cars];

//     // Tulis code-mu disini

//     const n = cars.length;

//     // Tulis code-mu disini

//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             // console.log(`index ${j}`)
//             // console.log(`value ${result[j]}`)
//             // console.log(`j + 1 = index ke ${j+1} = ${result[j + 1]}`);
//             // console.log(result)
//             // console.log('\n')
//             if (result[j] > result[j + 1]) {
//                 const temp = result[j];
//                 // console.log(`temp ${temp}`)
//                 result[j] = result[j + 1];
//                 // console.log(`result ${result[j]}`)
//                 result[j + 1] = temp;
//                 // console.log(`final ${result}`)
//             }
//         }
//         // console.log(result)
//     }


//     // Rubah code ini dengan array hasil sorting secara ascending
//     return result;
// }

// sortCarByYearAscendingly()