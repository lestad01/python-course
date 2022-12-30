

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors : {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};
//Деструктуризация объекта
const {border,bg} = options.colors;
console.log(border);


//console.log(Object.keys(options).length);
// options.makeTest();
// console.log(options);

// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             //counter++;
//         } 
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan){
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;
        for (let key in languages) {
            str += `${languages[key].toUpperCase()} `;
        }
        return str;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showProgrammingLangs(plan) {
    let newStr = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs){
        newStr += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return newStr;
}
console.log(showProgrammingLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;
    return {exp};
}

console.log(showExperience(personalPlanPeter));

function showAgeAndLangs(plan) {
    const {age} = plan;
    const {languages} = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach((lang) => {
        str += `${lang.toUpperCase()} `;
    });

    return str;

}

personalPlanPeter





