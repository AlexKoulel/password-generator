const generatebtn = document.getElementById("generate-button");
const copybtn = document.getElementById('copy');
const input = document.getElementById('password'); 
const passwordlength = document.getElementById('password-length');
const passwordlengthresult = document.getElementById('password-length-result');
const upperalphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const loweralphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '~!@#$%^&*()-+_=[]{}:;?<>,.';

let chosencharacters = upperalphabet; 

input.value = "";

document.addEventListener('DOMContentLoaded',function(){
   passwordlength.value = 12;
   passwordlengthresult.innerHTML = passwordlength.value;

   document.getElementById('lowercase').checked = true;
   document.getElementById('numbers').checked = false;
   document.getElementById('symbols').checked = false;
})

passwordlength.addEventListener('change',function(){
   passwordlengthresult.innerHTML = passwordlength.value;
})

generatebtn.addEventListener('click', function(){
   generate();
   const stringLength = chosencharacters.length;
   let result  = "";
   for(let i=0;i < parseInt(passwordlength.value);i++)
      {
         result += chosencharacters.charAt(Math.floor(Math.random() * stringLength));
      }
   input.value = result; 
   chosencharacters = upperalphabet;
})

copybtn.addEventListener('click' , function(){
   input.select();
   input.setSelectionRange(0,99999);
   navigator.clipboard.writeText(input.value);
})

function generate()
{
   if(document.getElementById('lowercase').checked)
   {
      chosencharacters += loweralphabet;
   }
   if(document.getElementById('numbers').checked)
   {
      chosencharacters += numbers;
   }
   if(document.getElementById('symbols').checked)
   {
      chosencharacters += symbols;
   }
}
