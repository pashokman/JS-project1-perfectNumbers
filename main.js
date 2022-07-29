const perfect = (number) => {
  if (!number) return;  
  
  let result = 0;
    
    for (let index = 1; index < number; index++) {
      if (number % index === 0) result += index;
    }
  
    if (result === number) return true;
    return false;
  }
  
const isPerfect = (number) => (perfect(number)) ? console.log('true') : console.log('false');

isPerfect();
isPerfect(1);
isPerfect(2);
isPerfect(3);
isPerfect(4);
isPerfect(5);
isPerfect(6);   //true
isPerfect(7);
isPerfect(8);
isPerfect(9);
isPerfect(10);
isPerfect(28);  //true
isPerfect(30);
isPerfect(35);
isPerfect(37);
isPerfect(496); //true