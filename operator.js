function ask(question,add,sub,mult,div,mod,err) {
      let ops = prompt(question);
      let num1,num2;
      if(ops === "+" || ops === "-" || ops === "*" || ops === "/" || ops === "%")
    {
        num1 = +prompt("enter the first number");
        num2 = +prompt ("enter the second number");
    }else { 
            err()}
    
     switch (ops) {
         case "+": add(num1,num2);
         break;
         case "-": sub(num1,num2);
         break;
         case "*": mult(num1,num2);
         break;
         case "/": div(num1,num2);
         break;
         case "%": mod(num1,num2);   
         break;
         default: console.log("try again later")
         break;
     }
     ask("Enter an operator", (a, b) => {
        alert( a + b );},  (a, b) => {
            alert( a - b );},(a,b)=>{
                alert(a * b);},(a,b) =>{
                alert(a/b);},(a,b) =>{
                alert(a%b);}, () => {
                 alert('try again later') });
}