const btn = document.getElementById("generate-button");
const paragraph = document.getElementById('password'); 
const passwordlength = document.getElementById('password-length');
const alphabet ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

btn?.addEventListener('click', function(){
   const stringLength = alphabet.length;
   let result  = "";
   for(let i=0;i < parseInt(passwordlength.value);i++)
   {
    result += alphabet.charAt(Math.floor(Math.random() * stringLength));
   }
   paragraph.innerHTML = result; 
})
