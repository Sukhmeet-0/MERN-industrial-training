var PrintValues = () => {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    // console.log(typeof name)
    // console.log(typeof email)
    // console.log(typeof password)

    // document.getElementById("output").innerText = name
    // document.getElementById("output").innerHTML = name
    // document.getElementById("output").innerHTML = name + email + password
    document.getElementById("output").innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Password: " + password
}