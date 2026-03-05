export default {
  title: "Loteria do Bitcoin",
  "roll-btn": "Tentar a sorte",
  "puzzle-state-initial": "Te desejo boa sorte!",
  "puzzle-state-not-found": (start: string) =>
    `Eita! A chave não foi encontrada :/ começo = ${start}. Continue tentando!`,
  "puzzle-state-success-title": "ACHOU A CHAAVE!!!!",
  "puzzle-state-sucess-content": (keyHex: string, wif: string) =>
    `Voce encontrou a chave privada: ${keyHex}, aqui ta a WIF: ${wif}`,
  "puzzle-info":
    'Cada tentativa testa <strong>50.000 chaves</strong> aleatoriamente dentro do intervalo do puzzle selecionado. A dificuldade cresce com o número do puzzle — <strong>o #71 começa com ~2,3 quintilhões de chaves possíveis</strong> e chega a <strong>~18,4 quintilhões no #74</strong>. Pura sorte, mas alguém vai encontrar. <strong><br /><br /> Leitura obrigatória antes de resgatar: <a href="./education-pt.html"> Kangaroos! E o que fazer se eu achar?</a></strong>',
};
