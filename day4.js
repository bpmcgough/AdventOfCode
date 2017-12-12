let validator = (input)=>{
  let uniqueCount = 0;
  
  input.forEach((passphrase)=>{
    let passphraseArray = passphrase.split(" ");
    let passphraseSet = new Set();
    console.log(passphraseArray)
    passphraseArray.forEach((word)=>{
      passphraseSet.add(word);
    })
    if(passphraseArray.length === passphraseSet.size){
      uniqueCount++;
    }
  })
  return uniqueCount;
}
