//messages to be randomly chosen
const starter = "Today's fortune:"
const luck = ['your day will be absolutely terrible!', 'just give up!', 'stay in bed today!', 'mildy ok.', 'things are looking good!',
 "it's your best day ever!", 'today will be pretty great.']
const end = ['Enjoy!', 'Sorry about that one.', 'Congrats!', 'Oof.', 'Yikes.', 'Very nice.']

//randomly picks different strings and combines them into a message
const message = () => {
    let luckynum = Math.floor(Math.random()*luck.length)
    let endnum = Math.floor(Math.random()*end.length)
    console.log(`${starter} ${luck[luckynum]} ${end[endnum]}`)
}

message()
