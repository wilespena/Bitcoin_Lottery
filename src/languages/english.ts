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
    'Each attempt tests <strong>50,000 keys</strong> randomly within the selected puzzle range. The difficulty grows with the puzzle number — <strong>#71 starts with ~2.3 quintillion possible keys</strong> and reaches <strong>~18.4 quintillion on #74</strong>. Pure luck, but someone will find it. <strong><br /><br /> Must read before claiming: <a href="./education.html" target="_blank">What is the puzzle and precautions before claiming →</a><br /><a href="tx-builder.html" onClick="event.preventDefault(); window.open(window.location.href.split(\'?\')[0].replace(/\\/?(index\\.html)?$/, \'/tx-builder.html\'), \'_blank\');">⚡ Build Transaction for MARA Slipstream →</a></strong>',
};
