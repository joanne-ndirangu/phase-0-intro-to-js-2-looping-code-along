// Code your solutions in this file
// const cards = ["Guadalupe", "Ollie", "Aki"];

// function writeCards(cards) {
//     for (let i = 0; i <cards.length; i++) {
//         console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
//     }
//     return cards;
// }
// writeCards(cards);

const name = ["Guadalupe", "Ollie", "Aki"]
function writeCards(name, surprise){
  let invitations = [];
  for (let i=0; i < name.length; i++){
    invitations.push(`Thank you, ${name[i]}, for the wonderful ${surprise} gift!`);
  }
  return invitations;
}
console.log(writeCards());

function countDown(){
  let num = 10;
  while(num >= 0){
    console.log(num);
    num = num -1;
  }
}
countDown()
