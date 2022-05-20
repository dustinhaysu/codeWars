function disemvowel(str) {
    let x = str.toLowerCase().split('')
    console.log(x.length)
    
    let array = x
    for(i = 0; i < x.length; i++){
      if(x[i] !== 'a' || x[i] !== 'e' || x[i] !== 'i' || x[i] !== 'o' || x[i] !== 'u'){
           array.unshift(x[i])
         }
    }
    str = array.toString()
    return str;
  }
  disemvowel('Fuck a bunch of this')