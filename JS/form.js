
// Aplicacion del DOM -------------------------------------//
let formulario3D = document.getElementById("formularioMangos")
let inputNombre = document.getElementById("validationDefault01")
let inputApellido = document.getElementById("validationDefault02")
let seleccIdentidad = document.getElementById("customRadio1")
let seleccIdentidad2 = document.getElementById("customRadio2")
let seleccIdentidad3 = document.getElementById("customRadio3")
let inputCiudad = document.getElementById("validationDefault03")
let inputProvincia = document.getElementById("validationDefault04")
let inputCP = document.getElementById("validationDefault05")
let inputEmail = document.getElementById("exampleFormControlInput1")
let inputTelefono = document.getElementById("exampleFormControlTextarea1")
let inputDescription = document.getElementById("exampleFormControlTextarea2")
let check = document.getElementById("customCheck1")

// Creacion de un array de pedidos y constructor -------------------------------------//

let perfilUsuario = []

class DatosUsuario {
    constructor (nombre, apellido, ciudad, provincia, codigoPostal, email, telefono, descripcion){
        this.nombre = nombre.toUpperCase()
        this.apellido = apellido.toUpperCase()
        this.ciudad = ciudad.toUpperCase()
        this.provincia = provincia
        this.codigoPostal = codigoPostal
        this.email = email
        this.telefono = telefono
        this.descripcion = descripcion.toUpperCase()
    }
}
// aplicacion de funciones -------------------------------------//

function localStoragePedidos () {
    localStorage.setItem("listaPedidos", JSON.stringify(perfilUsuario))
}
function obtenerLocalStoragePedidos(){
    let listaDePedidosLS = localStorage.getItem("listaPedidos")

    listaDePedidosLS !== null ? perfilUsuario = JSON.parse (listaDePedidosLS) : swal({
        title: "Error",
        text: "Faltan valores",
        icon: "Error",
    });
}

// Eventos al enviar formulario -------------------------------------//

formulario3D.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData (this)
    perfilUsuario.push(form)
    const response = await fetch(this.action, {
        method: this.method ,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()
    } 
}