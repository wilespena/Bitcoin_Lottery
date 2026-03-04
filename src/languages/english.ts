export default {
  title: "Bitcoin Lottery",
  "roll-btn": "Roll a ticket",
  "puzzle-state-initial": "I wish you good luck!",
  "puzzle-state-not-found": (start: string) =>
    `Ssh :/ The key wasn't found, start = ${start}, Keep trying!`,
  "puzzle-state-success-title": "YOU FOUND THE KEEY!!!!",
  "puzzle-state-sucess-content": (keyHex: string, wif: string) =>
    `You found the key ${keyHex}, this is the WIF: ${wif}`,
  "puzzle-info":
    'This is a lottery to solve a puzzle of this address: <strong>1PWo3JeB9jrGwfHDNpdGK54CRas7fsVzXU</strong><br></br> It contains 7.1 BTC, each time you roll you try 50K keys, the possibilities is 2.361 quintillion keys. <strong><br /> MUST READ: <a href="./education.html"> Kangaroos and What to do If I found it?</a></strong>',
};
