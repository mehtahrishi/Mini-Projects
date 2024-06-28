const form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
   const input = document.querySelector("input");
   const convertedweight = document.querySelector("span");

   let kgtopound;
   if((isNaN(input.value)) || input.value<=0){
   convertedweight.classList.add("error");
   convertedweight.innerHTML ="<p> Please Enter A Valid Number </p>"
   setTimeout(()=>{
convertedweight.innerHTML ="";
convertedweight.classList.remove("error");
   },2500);
   input.value="";
}

else{
    kgtopound = Number(input.value)*2.20462; //equal to 1kg
    convertedweight.classList.add("sucessful");
   convertedweight.innerHTML = `${kgtopound.toFixed(3)}`;


   setTimeout(()=>{
    convertedweight.innerHTML ="";
    convertedweight.classList.remove("sucessful");
    input.value="";
       },10000);
      

}
}
);