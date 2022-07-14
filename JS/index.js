//FUNCIONES GLOBALES -----------------------------------------------------------------------
function saludar(){
    alert("Bienvenido a Mangos 3D")
}
function invalido(){
    alert("Valor no valido")
}
function productoIngresados (){
                
    let productoNuevo1 = new Producto("Soporte patente moto 150cc", 800, 5)
    productos.push(productoNuevo1)
    let productoNuevo2 = new Producto("Carcasa Iphone 12", 1500, 12)
    productos.push(productoNuevo2)
    let productoNuevo3 = new Producto("Porta-lampara ironman", 1300, 1)
    productos.push(productoNuevo3)
    let productoNuevo4 = new Producto("Tapas maquinas Barber&Style", 600, 4)
    productos.push(productoNuevo4)
    
    return productos
}
function mostrarProductos (productos){

    for(const producto of productos){
        console.log(producto)
        console.log(producto.nombre)
    }
}
function productosDisponibles(){
    let productosEnStock = productoIngresados ()
    mostrarProductos(productosEnStock)
}

// OBJETO GLOBAL---------------------------------------------------------------------------------
let productos = [] 

//CLASS OBJETO CONSTRUCTOR-----------------------------------------------------------------------
class Producto {
    constructor (nombre, precioVenta, cantidad){
        this.nombre = nombre.toUpperCase()
        this.precioVenta = precioVenta
        this.cantidad = cantidad
    }
}
//------------------------------------------------------------------------------------------------


// MAQUETADO DE CODIGO ---------------------------------------------------------------------------
saludar()
let question

while (question != "si" && question != "Si"){
    question = prompt("Es usuario de Mangos 3D? si/no")

// PREGUNTA SI ES USUARIO DE MANGOS 3D - "OPCION SI" ---------------------------------------------
    if ((question == "si") || (question == "Si")) {
        let usuario = prompt("Ingresar nombre de usuario")
// -------USUARIOS "dero" y "luis", VISTA DE ADMIN-------------------------------------------------
        if(usuario == "luis" || usuario == "dero"){
            
            alert(`Hola ${usuario}! que deseas hacer?`)
            opcionesAdmin = parseInt(prompt("1. Agregar productos \n2. Ver catalogo de productos"))
//---------------- OPCION 1 AGREGAR PRODUCTOS EN VENTA ----------------------------------------------
            if (opcionesAdmin == 1){
                function agregarProductos (){
                    let numeroProductos = parseInt(prompt("Ingresar cantidad de productos"))
                
                    for (let index = 0; index < numeroProductos; index++) {
                        let nombre = prompt("Ingrese nombre de Producto")
                        let precioVenta = parseFloat(prompt("Ingresar precio de venta"))
                        let cantidad = parseInt(prompt("Ingresar cantidad de stock"))
                
                        let productoARegistrar = new Producto(nombre, precioVenta, cantidad)
                        productos.push(productoARegistrar)
                        let productoNuevo1 = new Producto("Soporte patente moto 150cc", 800, 5)
                        productos.push(productoNuevo1)
                        let productoNuevo2 = new Producto("Carcasa Iphone 12", 1500, 12)
                        productos.push(productoNuevo2)
                        let productoNuevo3 = new Producto("Porta-lampara ironman", 1300, 1)
                        productos.push(productoNuevo3)
                        let productoNuevo4 = new Producto("Tapas maquinas Barber&Style", 600, 4)
                        productos.push(productoNuevo4)
                    }
                    return productos
                }
                function main(){
                    let productoRegistrado = agregarProductos ()
                    mostrarProductos(productoRegistrado)
                }
                main()
            }
//---------------- OPCION 2 VER CATALOGO DE PRODUCTOS ----------------------------------------------
            else if(opcionesAdmin == 2){
                productosDisponibles()
            } 
//---------------- COMANDO INVALIDO -------------------------------------------------------------      
            else{
                invalido()
            }
        }
// -------USUARIOS RESTANTES - VISTA DE USUARIO-------------------------------------------------
        else {
            alert(`Hola ${usuario}! que deseas hacer?`)

            let opcion
            
            while((opcion != 1)&&(opcion != 2)&&(opcion != 3)){
                opcion = parseInt(prompt("1. Ver catalogo de productos. \n2. Realizar una compra de producto. \n3. Salir del menu."))    
//------------------ OPCION 1 VER CATALOGO DE PRODUCTOS ----------------------------------------------   
                    if (opcion === 1) {
                        productosDisponibles()
                        alert("- Soporte patente moto 150cc - ($800) \n- Carcasas iphone/android - ($1500) \n- Porta-lampara ironman - ($1500) \n- Tapas maquinas Barber&Style = ($600) \n\nEncarga tus diseños unicos y personalizados! ")
                    }
//------------------ OPCION 2 REALIZAR COMPRA DE PRODUCTOS ----------------------------------------------    
                    else if (opcion === 2) {
                        seleccionusuario = parseInt(prompt("(1) - Soporte patente moto 150cc - ($800) \n(2) - Carcasas iphone/android - ($1500) \n(3) - Porta-lampara ironman - ($1500) \n(4) - Tapas maquinas Barber&Style - ($600) \n \nSeleccione su producto con su numero correspondiente"))
                        let carritoCompra = []

                        class ItemsCarrito {
                            constructor (nombre, precioVenta, cantidad){
                                this.nombre = nombre.toUpperCase()
                                this.precioVenta = precioVenta
                                this.cantidad = cantidad
                            }
                        }
                        function mostrarItems (carritoCompra){
                            for(const ItemsCarrito of carritoCompra){
                                console.log(ItemsCarrito)
                                console.log(ItemsCarrito.nombre)
                            }
                        }
                        switch(seleccionusuario){
//-------------------------- OPCION 2.1 - COMPRA ITEM 1 -----------------------------------------------------                       
                            case 1:
                                function agregarItem1 (){
                                    let items1 = new ItemsCarrito ("Soporte patente moto 150cc", 800, 5)
                                    carritoCompra.push(items1)
                                    return carritoCompra
                                }
                                function main1(){
                                    let productoAgregado1 = agregarItem1 ()
                                    mostrarItems(productoAgregado1)
                                }
                                main1()
                                let compra1 = prompt("Añadio Soporte patente moto 150cc - ($800) al carrito de compra \n\n(1) Realizar el pago \n(2) Anular compra")
//---------------------------------- OPCION 2.1.1 - REALIZAR PAGO ITEM 1 ------------------------------------------------------------             
                                    if(compra1 == 1){
                                        const newCarritoCompra1 = [{nombre: "Soporte patente moto 150cc", precioVenta: 800, cantidad: 5}]
                                        function precioConImpuestos(){
                                            const impuestosARG = newCarritoCompra1.map ((el) =>{
                                                return {
                                                    precioVenta: el.precioVenta,
                                                    precioVentaIva: el.precioVenta*0.21,
                                                    impuestoPais: el.precioVenta*0.08,
                                                    impuestoALasGanancias: el.precioVenta*0.35,
                                                    cantidad: el.cantidad - 4,
                                                    envio: el.precioVenta*0.15
                                                }
                                            })
                                            for (const impuestosArg of impuestosARG){
                                                console.log("UNIDADES " + "[" + impuestosArg.cantidad + "]")
                                                console.log("- IMPUESTOS ARG -")
                                                console.log("(21%) IVA: " + "$" + impuestosArg.precioVentaIva)
                                                console.log("(8%) IMPUESTO PAIS: " + "$" + impuestosArg.impuestoPais)
                                                console.log("(35%) IMPUESTO A LAS GANANCIAS: " + "$" + impuestosArg.impuestoALasGanancias)
                                                console.log("(15%) COSTO ENVIO: " + "$" + impuestosArg.envio)
                                            }
                                            function total(){
                                                const precioFinal = impuestosARG.reduce((acc,el) => acc + (el.precioVenta + el.precioVentaIva + el.impuestoPais + el.impuestoALasGanancias + el.envio)*el.cantidad, 0)
                                                console.log("PRECIO FINAL AL CONSUMIDOR: " + precioFinal)
                                            }
                                            total()
                                        }
                                        precioConImpuestos()
                                        alert("El total a pagar de su compra es de $1432 arg. \n\nENTER para pagar")
                                        alert("Muchas gracias por comprar con MANGOS 3D!")
                                    }
//---------------------------------- OPCION 2.1.2 - ANULAR PAGO ITEM 1 ------------------------------------------------------------
                                    else if(compra1 == 2){
                                        alert("Usted anulo su compra, vuelva pronto!")
                                    }
//---------------------------------- OPCION 2.1.3 - COMANDO INVALIDO ------------------------------------------------------------
                                    else{
                                        invalido()
                                    }
                                break
//-------------------------- OPCION 2.2 - COMPRA ITEM 2 -----------------------------------------------------                       
                            case 2:
                                function agregarItem2 (){
                                    let items2 = new ItemsCarrito ("Carcasa Iphone 12", 1500, 12)
                                    carritoCompra.push(items2)
                                    return carritoCompra
                                }
                                function main2(){
                                    let productoAgregado2 = agregarItem2 ()
                                    mostrarItems(productoAgregado2)
                                }
                                main2()
                                let compra2 = prompt("Añadio Carcasas iphone/android - ($1500) al carrito de compra \n\n(1) Realizar el pago \n(2) Anular compra")
//---------------------------------- OPCION 2.2.1 - REALIZAR PAGO ITEM 2 ------------------------------------------------------------             
                                    if(compra2 == 1){
                                        const newCarritoCompra2 = [{nombre: "Carcasas iphone/android", precioVenta: 1500, cantidad: 12}]
                                        function precioConImpuestos(){
                                            const impuestosARG = newCarritoCompra2.map ((el) =>{
                                                return {
                                                    precioVenta: el.precioVenta,
                                                    precioVentaIva: el.precioVenta*0.21,
                                                    impuestoPais: el.precioVenta*0.08,
                                                    impuestoALasGanancias: el.precioVenta*0.35,
                                                    cantidad: el.cantidad - 9,
                                                    envio: el.precioVenta*0.15
                                                }
                                            })
                                            for (const impuestosArg of impuestosARG){
                                                console.log("UNIDADES " + "[" + impuestosArg.cantidad + "]")
                                                console.log("- IMPUESTOS ARG -")
                                                console.log("(21%) IVA: " + "$" + impuestosArg.precioVentaIva)
                                                console.log("(8%) IMPUESTO PAIS: " + "$" + impuestosArg.impuestoPais)
                                                console.log("(35%) IMPUESTO A LAS GANANCIAS: " + "$" + impuestosArg.impuestoALasGanancias)
                                                console.log("(15%) COSTO ENVIO: " + "$" + impuestosArg.envio)
                                            }
                                            function total(){
                                                const precioFinal = impuestosARG.reduce((acc,el) => acc + (el.precioVenta + el.precioVentaIva + el.impuestoPais + el.impuestoALasGanancias + el.envio)*el.cantidad, 0)
                                                console.log("PRECIO FINAL AL CONSUMIDOR: " + precioFinal)
                                            }
                                            total()
                                        }
                                        precioConImpuestos()
                                        alert("El total a pagar de su compra es de $8055 arg. \n\nENTER para pagar")
                                        alert("Muchas gracias por comprar con MANGOS 3D!")
                                    }
//---------------------------------- OPCION 2.2.2 - ANULAR PAGO ITEM 2 ------------------------------------------------------------
                                    else if(compra2 == 2){
                                        alert("Usted anulo su compra, vuelva pronto!")
                                    }
//---------------------------------- OPCION 2.2.3 - COMANDO INVALIDO ------------------------------------------------------------
                                    else{
                                        invalido()
                                    }
                                break
//-------------------------- OPCION 2.3 - COMPRA ITEM 3 -----------------------------------------------------                       
                            case 3:
                                function agregarItem3 (){
                                    let items3 = new ItemsCarrito ("Porta-lampara ironman", 1500, 1)
                                    carritoCompra.push(items3)
                                    return carritoCompra
                                }
                                function main3(){
                                    let productoAgregado3 = agregarItem3 ()
                                    mostrarItems(productoAgregado3)
                                }
                                main3()
                                let compra3 = prompt("Añadio Carcasas iphone/android - ($1500) al carrito de compra \n\n(1) Realizar el pago \n(2) Anular compra")
//---------------------------------- OPCION 2.3.1 - REALIZAR PAGO ITEM 3 ------------------------------------------------------------             
                                    if(compra3 == 1){
                                        const newCarritoCompra3 = [{nombre: "Porta-lampara Ironman", precioVenta: 1300, cantidad: 1}]
                                        function precioConImpuestos(){
                                            const impuestosARG = newCarritoCompra3.map ((el) =>{
                                                return {
                                                    precioVenta: el.precioVenta,
                                                    precioVentaIva: el.precioVenta*0.21,
                                                    impuestoPais: el.precioVenta*0.08,
                                                    impuestoALasGanancias: el.precioVenta*0.35,
                                                    cantidad: el.cantidad,
                                                    envio: el.precioVenta*0.15
                                                }
                                            })
                                            for (const impuestosArg of impuestosARG){
                                                console.log("UNIDADES " + "[" + impuestosArg.cantidad + "]")
                                                console.log("- IMPUESTOS ARG -")
                                                console.log("(21%) IVA: " + "$" + impuestosArg.precioVentaIva)
                                                console.log("(8%) IMPUESTO PAIS: " + "$" + impuestosArg.impuestoPais)
                                                console.log("(35%) IMPUESTO A LAS GANANCIAS: " + "$" + impuestosArg.impuestoALasGanancias)
                                                console.log("(15%) COSTO ENVIO: " + "$" + impuestosArg.envio)
                                            }
                                            function total(){
                                                const precioFinal = impuestosARG.reduce((acc,el) => acc + (el.precioVenta + el.precioVentaIva + el.impuestoPais + el.impuestoALasGanancias + el.envio)*el.cantidad, 0)
                                                console.log("PRECIO FINAL AL CONSUMIDOR: " + precioFinal)
                                            }
                                            total()
                                        }
                                        precioConImpuestos()
                                        alert("El total a pagar de su compra es de $2327 arg. \n\nENTER para pagar")
                                        alert("Muchas gracias por comprar con MANGOS 3D!")
                                    }
//---------------------------------- OPCION 2.3.2 - ANULAR PAGO ITEM 3 ------------------------------------------------------------
                                    else if(compra3 == 2){
                                        alert("Usted anulo su compra, vuelva pronto!")
                                    }
//---------------------------------- OPCION 2.3.3 - COMANDO INVALIDO ------------------------------------------------------------
                                    else{
                                        invalido()
                                    }
                                break
//-------------------------- OPCION 2.4 - COMPRA ITEM 4 -----------------------------------------------------                       
                            case 4:
                                function agregarItem4 (){
                                    let items4 = new ItemsCarrito ("Tapas maquinas Barber&Style", 600, 4)
                                    carritoCompra.push(items4)
                                    return carritoCompra
                                }
                                function main4(){
                                    let productoAgregado4 = agregarItem4 ()
                                    mostrarItems(productoAgregado4)
                                }
                                main4()
                                let compra4 = prompt("Añadio Tapas maquinas Barber&Style - ($600) al carrito de compra \n\n(1) Realizar el pago \n(2) Anular compra")
//---------------------------------- OPCION 2.4.1 - REALIZAR PAGO ITEM 3 ------------------------------------------------------------             
                                    if(compra4 == 1){
                                        const newCarritoCompra4 = [{nombre: "Tapas maquinas Barber&Style", precioVenta: 600, cantidad: 4}]
                                        function precioConImpuestos(){
                                            const impuestosARG = newCarritoCompra4.map ((el) =>{
                                                return {
                                                    precioVenta: el.precioVenta,
                                                    precioVentaIva: el.precioVenta*0.21,
                                                    impuestoPais: el.precioVenta*0.08,
                                                    impuestoALasGanancias: el.precioVenta*0.35,
                                                    cantidad: el.cantidad - 3,
                                                    envio: el.precioVenta*0.15
                                                }
                                            })
                                            for (const impuestosArg of impuestosARG){
                                                console.log("UNIDADES " + "[" + impuestosArg.cantidad + "]")
                                                console.log("- IMPUESTOS ARG -")
                                                console.log("(21%) IVA: " + "$" + impuestosArg.precioVentaIva)
                                                console.log("(8%) IMPUESTO PAIS: " + "$" + impuestosArg.impuestoPais)
                                                console.log("(35%) IMPUESTO A LAS GANANCIAS: " + "$" + impuestosArg.impuestoALasGanancias)
                                                console.log("(15%) COSTO ENVIO: " + "$" + impuestosArg.envio)
                                            }
                                            function total(){
                                                const precioFinal = impuestosARG.reduce((acc,el) => acc + (el.precioVenta + el.precioVentaIva + el.impuestoPais + el.impuestoALasGanancias + el.envio)*el.cantidad, 0)
                                                console.log("PRECIO FINAL AL CONSUMIDOR: " + precioFinal)
                                            }
                                            total()
                                        }
                                        precioConImpuestos()
                                        alert("El total a pagar de su compra es de $1074 arg. \n\nENTER para pagar")
                                        alert("Muchas gracias por comprar con MANGOS 3D!")
                                    }
//---------------------------------- OPCION 2.4.2 - ANULAR PAGO ITEM 3 ------------------------------------------------------------
                                    else if(compra4 == 2){
                                        alert("Usted anulo su compra, vuelva pronto!")
                                    }
//---------------------------------- OPCION 2.4.3 - COMANDO INVALIDO ------------------------------------------------------------
                                    else{
                                        invalido()
                                    }
                                break
//-------------------------- OPCION COMANDO INVALIDO -----------------------------------------------------                       
                            default:
                                invalido()
                                break
                        }
                    }
//------------------ OPCION 3 SALIR  -----------------------------------------------------------------    
                    else if(opcion === 3){
                        alert("Gracias por contar con MANGOS 3D, vuelva pronto!")
                    }
//------------------ OPCION COMANDO INVALIDO  ---------------------------------------------------------    
                    else {
                        invalido()
                    }
            }
        }
    }
// PREGUNTA SI ES USUARIO DE MANGOS 3D - "OPCION NO" ----------------------------------------------
    else if ((question == "no") || (question == "No")) {
        alert("Es necesario crear un usuario.")
    }
// COMANDO INVALIDO--------------------------------------------------------------------------------
    else {
        invalido()
    }
}