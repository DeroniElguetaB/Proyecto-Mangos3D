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

formulario3D.onsubmit = (event) => validarFormulario(event)

function localStoragePedidos () {
    const pedidoJSON = JSON.stringify(perfilUsuario)
    localStorage.setItem("listaPedidos", pedidoJSON)
}
function obtenerLocalStoragePedidos(){
    let listaDePedidosLS = localStorage.getItem("listaPedidos")
    if (listaDePedidosLS !== null){
        perfilUsuario = JSON.parse (listaDePedidosLS)
    }
}

function validarFormulario (event) {
    event.preventDefault()
    let nombre = inputNombre.value
    let apellido = inputApellido.value
    let ciudad = inputCiudad.value
    let provincia = inputProvincia.value
    let codigoPostal = inputCP.value
    let email = inputEmail.value
    let telefono = inputTelefono.value
    let descripcion = inputDescription.value

    let datosUser = new DatosUsuario (nombre, apellido, ciudad, provincia, codigoPostal, email, telefono, descripcion)
    perfilUsuario.push(datosUser)

    localStoragePedidos()
    swal(`Hola `,`Datos enviados!`, "success")
    formulario3D.reset()
    obtenerLocalStoragePedidos()
    console.log(perfilUsuario)
}
