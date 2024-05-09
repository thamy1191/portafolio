const pa= document.getElementById("pa")
const pal= document.getElementById( "pal")
const ingre= document.getElementById("ingre")
const password= document.getElementById("password")
const button= document.getElementById("button")
let lista=[]


button.addEventListener("click", (e) =>{
  if(pa.value  !="" && pal.value  !=""  && ingre.value !="" && password.value  !=""){

     e.preventDefault()

     const data = {
     pa: pa.value,
     pal:pal.value,
     ingre:ingre.value,
     password:password.value,
     }
    lista = JSON.parse( localStorage.getItem("lista")) || []

    lista.push(data)

    localStorage.setItem("lista",JSON.stringify(lista))
    
    swal({
      title: "bienvenido!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
  

    }else{
      alert("Datos no resgistrados")
      return false;
    }

     
 })  

    

