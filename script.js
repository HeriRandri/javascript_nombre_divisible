/*var test=prompt('ecris mandeha');
console.log('mandeha');
alert('mandeha wa');
document.write('test');


const pi = 3.14;
let color_titre="blue";
var orange_election="miova";
var isMale=true;

console.log(pi);
 var name = 'heriniaina';
 var first = 'Randri';
 console.log(name + '' + first);
 var nombr_one= 23;
 console.log(nombr_one + pi);

 var age = 19;
 var nombr= 34;
 console.log(age + nombr);
 var age = 10;
 var age = 39;
 var age = 1;*/

 
 /*var btn= document.getElementById('button');
 btn.onclick = function() {
    document.body.style.backgroundColor="#000";
    btn.innerText ='text button';
    btn.style.fontSize="40px";
    console.log('test');
    btn.style.backgroundColor='blue'
 }

 var btn_miverina= document.getElementById('button_hover')
    btn_miverina.onclick = function(){
    document.body.style.backgroundColor = 'green';
    btn_miverina.style.fontSize="40px";
    btn_miverina.innerText = 'Niverina';

 }


 const btn = document.getElementById('btn');
 btn.onclick = ()=>{
   const age = document.getElementById('age').value;
   if (age<18) {
      document.getElementById('txt').innerText='vous etes mineur';
   }
   
   
   else if (age>=18) {
      document.getElementById('txt').innerText='vous etes majeur';
   }
    
   else{
      document.getElementById('txt').innerText='vous etes mineur';

   }
   

let validation = document.getElementById('valider')
validation.onclick= ()=>{
  let nbr=document.getElementById('isa').value;
  let i=0;
  for (let i = 0; i<nbr; i++) {
      let boucle=document.getElementById('txt');
     boucle.innerText=boucle.innerText+ i+ ' \n'; 
  } 
}

const a=prompt("premier a")
const c=prompt("deuxieme c")
const resultat= a*c
let sig
if (resultat>0) {
   sig="positive"
}

else{
   sig='egative'
}
console.log(`${a} x ${c} = ${resultat} est ${sig}`);


function isHuman(age) {
   if((age<0 || age>120)){
      return false;
   }
   return true;
}

var age = prompt ("donner votre age ");
if(isHuman(age)){
   console.log(age);
}
*/
const btn = document.getElementById('button');
btn.onclick = ()=>{
   const nombre =parseInt(document.getElementById('nombre').value);
   const arriver = parseInt(document.getElementById('arriver').value);
   const depart = parseInt(document.getElementById('depart').value);
   if (nombre <=0) {
      alert("vous devez entrer nombre apartir de 2");
      return;
   }

   let resultat = "Les nombres divisibles par "+ nombre + "  sont : ";
   for(let i =depart ; i<=arriver; i++){
      if (i % nombre ===0 ) {
         resultat += i + ";\n";
      }
   }
   document.getElementById('txt').textContent = resultat;
}



