console.log('============Exercise #1 =============')
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const flattenedObj = (obj) => {
    let result = {};
    for (const item in obj){
        if ((typeof obj[item]) === 'object' && !Array.isArray(obj[item])) {
            const temp = flattenedObj(obj[item]);
            for(const subItem in temp){
                result[item + '.' + subItem] = temp[subItem]
            }
        }
        else if(Array.isArray(obj[item])){
            for(const elem in obj[item]){
                if ((typeof obj[item][elem]) === 'object'){
                    const temp = flattenedObj(obj[item][elem])
                    for(const subItem in temp){
                        result[item + '.' + subItem] = temp[subItem];
                    }
                }
                else result[item] = obj[item]
            }
        }
        else result[item] = obj[item];
    }
    return result;
};


console.log(Object.entries(person3)) // entries method seems to return a shallow version of this.

console.log(flattenedObj(person3))