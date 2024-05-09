const username= document.getElementById("username")
const password= document.getElementById( "password")
const button= document.getElementById("button")

button.addEventListener("click", (e) =>{
    e.preventDefault()
    
    usuarios= JSON.parse( localStorage.getItem("lista")) || []
    
    valores = usuarios.find(usu => usu.pal == username.value && usu.password == password.value)

 console.log(valores)

    if (valores) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })

          window.location.href = "pag.html"
    

       
    }})

 

