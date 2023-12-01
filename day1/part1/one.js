const fs = require('fs');
const readline = require('readline')
const events = require('events')

const data = []

async function linebyline(){
    try {
        const rl = readline.createInterface({
            input: fs.createReadStream('../../test'),
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
    let sum = 0 ;
    let test = [];
    for await (const value of values){
        // sum = sum + parseInt(extractor(value));
        test.push(extractor(value))
    }
    // console.log(sum);
    console.log(test)
    fs.writeFileSync('../../twodigit.txt',test.toString().replaceAll(',','+'))
}

linebyline()

// const test = ['12ab5d', '22gt2r', 'er41t']
// total(test);

// const tester = extractor('12agh3hhs')
// const tester2 = parseInt(extractor('7sa0'))
// console.log(parseInt(tester) + tester2);




