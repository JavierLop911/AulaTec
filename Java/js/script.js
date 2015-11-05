// var age;
// var year = prompt("Dame tu ano de nacimiento?");

// age = 2015 - year;

// console.log(age);

// var n;
// var total = 0;
// n = prompt("dame un numero");

// if(n > 0 && n <= 10) {
//   for(var i = 1; i <= 10; i++) {
//     total += n * i;
//     }
    
//     console.log(total);
// } else {
//     console.log("numero no valido");
// }

// var password1, password2;

// password1 = prompt("Ingrese su contrasena");
// password2 = prompt("confirma contrasena");

// if(password2 != password1 || password1.length < 6) {
//     console.log("contrasena invalida")
// } else {
//         console.log("contrasena valida")
// }

// switch (password1) {
//     case 'password1 != password2':
//         console.log("contrasena invalida")
//         break;
    
//     case 'password1 = password2':
//         console.log("contrasena valida")
//         break;
    
//     default:
//         console.log("contrasena valida")
//         break;
// }

// var word = prompt("dame una palabra")
// var word2 = "";

// for(var i = word.length - 1; i >= 0; i--) {
//     word2 += word[i];
// }

// if(word == word2) {
//     console.log("es palindromo")
// } else {
//     console.log("no es palindromo")
// }

// var word = prompt("dame una palabra")

// var i = 0;
// var j = word.length - 1;
// var IsPal = false;
// var length = word.length;

// while(0 < length) {
//     if(word[i] == word[j]) {
//         IsPal = true
//     } else {
//         IsPal = false;
//     }
    
//     i++;
//     j--;
//     length--;
//     console.log(IsPal)
//     if(!IsPal) break;
// }

// if(IsPal) {
//     console.log("es palindromo")
// } else {
//     console.log("no es palindromo")
// }

// var n = prompt ("dame un numero");
// var total = 0;

// for (var i = 1; i <= n; i++) {
//     total += n * i
// } 

// console.log(total);
// var n = prompt ("dame un numero");
// var total = 1;

// while (n > 1) {
//     total *= n--;
// } 

// console.log(total);

function llenarMatriz(){
          var data = new Array();
          var totalPrimos=0;
          var numberPrimos='';
          var arrayPrimos = new Array();
          for(var i=0; i<4; i++){
              data[i] = new Array();
              for(var j=0; j<4; j++){
                  var number = prompt ('Introduzca un numero: posicion ['+i+']['+j+']=');
                  if(!isNaN(number) && number!=''){
                       data[i][j]= parseInt(number);
                       if(checkPrimo(parseInt(data[i][j]))){
                           arrayPrimos[totalPrimos++]=    data[i][j]; 
                       }
                       //console.log('El numero'+number+ ' es primo? '+ checkPrimo(parseInt(number)));
                       //console.log(' posicion = ['+i+']['+j+']'+data[i][j]);        
                  }
                  else{
                      alert('Por favor introduzca un numero!!');
                      j--;
                  } 
              }
          }
          for(var i=0; i<arrayPrimos.length; i++){
              numberPrimos += arrayPrimos[i]+', ';
          }
          numberPrimos=numberPrimos.slice(0, -2);
          alert('Total de numero primos en la matriz:'+arrayPrimos.length+' Numeros: '+numberPrimos);
      }
      function checkPrimo(number){
          var divisor=1;
          var primo=0;
          for(var i=0; i<=number; i++){
              if(number%i==0 ){
                  primo++;
              }
              if(primo>2)
                  break;
          }  
          if(primo==2){
              return true;
          }    
          else{
              return false;
          }
      }
      
      