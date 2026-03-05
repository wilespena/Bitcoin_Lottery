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
    'Each roll tests <strong>50,000 keys</strong> randomly within the selected puzzle\'s range. The difficulty scales with the puzzle number — <strong>#71 starts at ~2.3 quintillion possible keys</strong> and goes up to <strong>~18.4 quintillion on #74</strong>. Pure luck, but someone has to find it. <strong><br /><br /> MUST READ before claiming: <a href="./education.html"> Kangaroos and What to do If I found it?</a></strong>',
};
