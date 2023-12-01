const fs = require('fs');
const readline = require('readline')
const events = require('events')

const data = []

async function linebyline(){
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('../data.txt'),
            crlfDelay: Infinity
        });

    rl.on('line', (line) => {
        data.push(line);
    })
    await events.once(rl, 'close');
    total(data)
    } catch (error) {
        console.error(error);
    }
}


function replacer(value){
    const letterformat = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    let number = [];
    let position = [];
    let accumulator = [];
    for(let i = 8; i >= 0; i--){
        if(value.includes(Object.keys(letterformat)[i])){
        number.push(Object.values(letterformat)[i])
        position.push(value.indexOf(Object.keys(letterformat)[i]))
    //   console.log(value)
    }
    }
    for(let i = 0; i < value.length; i++){
        if(position.includes(i)){
            accumulator.push(number[position.indexOf(i)])
        } else if(Number.isInteger(parseInt(value[i]))){
            accumulator.push(value[i])
        }
    }
    // console.log(accumulator);
    // console.log(number);
    // console.log(position);
    return accumulator.toString().replaceAll(',','')
    // console.log(accumulator.toString().replaceAll(',',''))
}

// const ttt = replacer('xtwone3four')
// let ttt = extractor(replacer('fiveseven5rtcnine'))
// console.log(ttt);

function extractor(value) {
    let storage = []
    for(const i of value.toString().split('')) {      
        if(Number.isInteger(parseInt(i))){
            storage.push(i)
        } 
    }
    
    switch (storage.length) {
        case 1:
            return storage[0] + storage[0];
        case 2:
            return storage[0] + storage[1];
        case null:
            break;
        default:
           return storage[0] + storage.splice(-1);
    }

}



async function total(values) {
    sum = 0 ;
    for await (const value of values){
        sum = sum + parseInt(extractor(replacer(value)));
    }
    console.log(sum);
}

linebyline()

// const test = ['two1nine', 'eightwothree', 'abcone2threexyz', 'xtwone3four', '4nineeightseven2','zoneight234','7pqrstsixteen']
// total(test);

// const tester = extractor('12agh3hhs')
// const tester2 = parseInt(extractor('7sa0'))
// console.log(parseInt(tester) + tester2);
// console.log(tester)
// console.log(tester2)





