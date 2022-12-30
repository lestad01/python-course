"use strict";

function pow (x, n){
    let result = 1;

    for (let i = 0; i < n; i++){
        result *= x;
    }
    return result;
};



function powTwo (x, n){
   if (n === 1) {
    return x;
   } else {
    return x * powTwo(x, n - 1);
   }
}

// x = 3 ; 3 * 3 * (4 - 1 = 3) = 3 * 3 * 3 = 27 * 3 = 81

console.log(powTwo (3,4));



let students = {
    js: [{
        name: 'john',
        progress: 100
    },  {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },      {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],

        SEMI: {
            students: [{
                name: 'tEST',
                progress: 100
            }]
        }
    }
};


// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)){
//             students += course.length;
//             // console.log(Array.isArray(course));
//             // console.log(course);
//             for (let i = 0; i < course.length; i++){
//                 total += course[i].progress;

//             } 

//         } else {
//             for (let subCourse of Object.values(course)){
//                 students += subCourse.length;
//                 console.log(subCourse);
//                 for (let i = 0; i < subCourse.length; i++){
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }


//     return total / students;

// }

// console.log(getTotalProgressByIteration(students));



function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)){
        let total = 0;

        // console.log(Array.isArray(course));
        // console.log(course);
        for (let i = 0; i < data.length; i++){
            total += data[i].progress;

        } 
        return [total, data.length];
    } else {
        let total = [0,0];
        for (let subData of Object.values(data)){
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]);


