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
inputExtractor();
// const eg = [' 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
// ' 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
// ' 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
// ' 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
// ' 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green']
// let games = eg.map((item) => {
//     return item.split(';')
// })
let games = Object.values(mapping).map((item) => {
    return item.split(';')
})
let sum = 0
for(let i in games){
    let red = 0
    let blue = 0
    let green = 0
    for(let game of games[i]){
        if(game.includes('blue')){
            blue < (game[game.indexOf('blue') - 3] + game[game.indexOf('blue') - 2]) ? 
            blue = game[game.indexOf('blue') - 3] + game[game.indexOf('blue') - 2] :
            null
        }
        if(game.includes('green')){
            green < (game[game.indexOf('green') - 3] + game[game.indexOf('green') - 2]) ? 
            green = game[game.indexOf('green') - 3] + game[game.indexOf('green') - 2] :
            null
        }
        if(game.includes('red')){
            red < (game[game.indexOf('red') - 3] + game[game.indexOf('red') - 2]) ? 
            red = game[game.indexOf('red') - 3] + game[game.indexOf('red') - 2] :
            null
        }
}
// if(parseInt(red) > 12 || parseInt(blue) > 14 || parseInt(green) > 13){
//     null
// } else {
//     sum = sum + parseInt(i)+1;
// }
sum = sum + parseInt(red)*parseInt(green)*parseInt(blue)
 


}
console.log(sum);




