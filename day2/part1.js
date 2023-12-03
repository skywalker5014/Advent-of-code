const fs = require("fs")

let mapping = {}
function inputExtractor(){
    const rawdata = fs.readFileSync('day2input')
    const line = rawdata.toString().split(/\r\n/)
    const gamedata = []
    const gamename = []
    function game() {
        for(let i of line){
            gamename.push(i.split(':')[0])
        }
    }
    function gameresult(){
        for(let i of line){
            gamedata.push(i.split(':')[1])
        }
    }
    game()
    gameresult()
    for(let i = 0; i < gamename.length; i++){
        mapping[gamename[i]] = gamedata[i];
    }
}
inputExtractor()

const eg = [' 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
' 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
' 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
' 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
' 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green']

// let collector = eg.map((item) => {
//     return item.split(';')
// })

let collector = Object.values(mapping).map((item) => {
    return item.split(';')
})
// console.log(collector);
let sum = 0

for(let i in collector){
        let red = 0
        let blue = 0
        let green = 0
        // console.log('\ngame no '+ (parseInt(i)+1) + ':');
        for(let j of collector[i]){
            // console.log(j);
        if(j.includes('blue')){
                    // console.log(`blue: ${j[j.indexOf('blue') - 3] + j[j.indexOf('blue') - 2]}`);
          blue < (j[j.indexOf('blue') - 3] + j[j.indexOf('blue') - 2]) ? 
          blue = j[j.indexOf('blue') - 3] + j[j.indexOf('blue') - 2] :
          null
        }
        if(j.includes('green')){
                    // console.log(`green: ${j[j.indexOf('green') - 3] + j[j.indexOf('green') - 2]}`);
                    green < (j[j.indexOf('green') - 3] + j[j.indexOf('green') - 2]) ? 
                    green = j[j.indexOf('green') - 3] + j[j.indexOf('green') - 2] :
                    null
                }
        if(j.includes('red')){
                    // console.log(`red: ${j[j.indexOf('red') - 3] + j[j.indexOf('red') - 2]}`);
                    red < (j[j.indexOf('red') - 3] + j[j.indexOf('red') - 2]) ? 
                    red = j[j.indexOf('red') - 3] + j[j.indexOf('red') - 2] :
                    null
                }
        }
        // console.log('\nred: ' + red);
        // console.log('green: ' + green);
        // console.log('blue: ' + blue);
        if(parseInt(red) > 12 || parseInt(blue) > 14 || parseInt(green) > 13){
            // console.log('impossible');
            null
        } else {
            sum = sum + parseInt(i)+1;
            // console.log('possible');
        }
}

console.log(sum);

