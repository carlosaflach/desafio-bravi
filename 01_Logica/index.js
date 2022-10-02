const isValidBrackets = (str) => {
  // brackets de abertura com index pares.
  // brackets de fechamento com index ímpares.
  const brackets = "()[]{}"
  const arr = [];

  for(let bracket of str) {
    // encontro a posição baseado no array de  brackets;
    let bracketsIndex = brackets.indexOf(bracket);

    // verifico se é um bracket de abertura.
    if(bracketsIndex % 2 === 0) {
      // adiciono o correspondente de fechamento, baseado o index dos brackets.
      arr.push(bracketsIndex + 1);
      
    } else {
      // verifica se o elemento removido do array é igual ao index do bracket.
      // Se não for não está balanceado.
      if(arr.pop() !== bracketsIndex) {
        return false
      }
    }
  }
  

  return console.log(arr.length === 0);
};

isValidBrackets('{}[]{}')