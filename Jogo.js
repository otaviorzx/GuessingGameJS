function inicialization(){
  const Name = prompt('Type your name/nickname: ')

  console.log(`\nHello, ${Name}! Welcome to my guessing number game.`)
  console.log('\nRules:\nYou have to type a number between 1 and 100.\nThe machine is going to warn you if your number is bigger or smaller than the machine number. Good luck!')
  console.log('\nMade by: https://github.com/otaviorzx\n')
}

var userNumber = '0'

let principalnumber = Math.floor(Math.random() * 100)
console.log(principalnumber)

function typenumber(){
  userNumber = prompt('Type a number: ')
  verify()
}

function verify(){
  if (Number(userNumber) > principalnumber){
    console.log('Your number is bigger, keep trying!')
    typenumber()
}
  else if (Number(userNumber) < principalnumber) {
    console.log('Your number is smaller, keep trying!')
    typenumber()
}
  else if (Number(userNumber) == principalnumber) {
    console.log(`Congrats! You won the game. The secret number was ${principalnumber}`)
    wannaPlayAgain()
  }
}

function wannaPlayAgain() {
  let res = prompt('\nWould you like to play this game again? (y/N)')

  if (res == 'y' || res == 'yes' || res == 'Y'){
    guessgame()
  } 
  else if (res == 'n' || res == 'N'){
    thxforplayed()
  }
  else {
    console.log('[ERROR] Invalid answer!')
    wannaPlayAgain()
  }
}

function guessgame(){
  principalnumber = Math.floor(Math.random() * 100)
  typenumber()
}

function thxforplayed(){
  console.log(`Hey, thank you for playing my game, I really appreciate it!`)
}

inicialization()
typenumber()
