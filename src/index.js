class SmartCalculator {
  constructor(initialValue) {
      this.value = [initialValue];
     
  }

  add(number) {
      this.value.push('+', number);
      return this;
     
  }

  subtract(number) {
    this.value.push('-', number);
    return this;
    
  }

  multiply(number) {
    this.value.push('*', number);
    return this;
     
  }

  devide(number) {
    this.value.push('/', number);
    return this;
     

  pow(number) {
    this.value.push('^', number);
    return this;
     
  }

  parse() {
    var temp = this.value
    console.log(temp)

    for(let i=0; i < temp.length; i++){
      if(temp[i] == '^'){
        temp.splice(i-1, 3, Math.pow(temp[i-1], temp[i+1]));
        i--;
      }
    }

    for(let i=0; i < temp.length; i++){
      if(temp[i] == '*'){
        temp.splice(i-1, 3, temp[i-1] * temp[i+1]);
        i--;
      }
    }

    for(let i=0; i < temp.length; i++){
      if(temp[i] == '/'){
        temp.splice(i-1, 3, temp[i-1] / temp[i+1]);
        i--;
      }
    }

    for(let i=0; i < temp.length; i++){
      if(temp[i] == '+'){
        temp.splice(i-1, 3, temp[i-1] + temp[i+1]);
        i--;
      } else if(temp[i] == '-'){
        temp.splice(i-1, 3, temp[i-1] - temp[i+1]);
        i--;
      }
    }

    return Number(temp)
  }
  
  valueOf(){
    return this.parse
  }
}

module.exports = SmartCalculator;