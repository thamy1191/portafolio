const username= document.getElementById("username")
const password= document.getElementById( "password")
const button= document.getElementById("button")

button.addEventListener("click", (e) =>{
    e.preventDefault()
    const data ={
     username: username.value,
     password: password.value
    }
    localStorage.setItem("username",username.value)
    localStorage.setItem("password",password.value)
    localStorage.setItem("button",button.value)

    
    console.log(data)
})
