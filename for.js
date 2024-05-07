const pa= document.getElementById("pa")
const pal= document.getElementById( "pal")
const ingre= document.getElementById("ingre")
const dic= document.getElementById("dic")
const enviar= document.getElementById("enviar")

enviar.addEventListener("click", (e) =>{
    e.preventDefault()
    const data ={
     pa:pa.value,
     pal:pal.value,
     ingre:ingre.value,
     dic:dic.value,
     }

    localStorage.setItem("pa",pa.value)
    localStorage.setItem("pal",pal.value)
    localStorage.setItem("ingre",ingre.value)
    localStorage.setItem("dic",dic.value)
    localStorage.setItem("enviar",enviar.value)
    

    console.log(data)
})
function mostraralerta(){
    swal({
        icon: "success",
      })
      .then((willDelete) => {
        if (willDelete) {
          swal(window.location.href= "http://127.0.0.1:5500/inde.html"), {
           
}}})}