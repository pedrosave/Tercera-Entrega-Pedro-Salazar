class Producto {
    constructor(id, imagen, nombre, precio) {
        this.id = id,
            this.imagen = imagen,
            this.nombre = nombre,
            this.precio = precio
    }
}
const producto1 = new Producto(1,"./assets/xbox-serie-x-card.png", "XBOX Serie X", 3200)
const producto2 = new Producto(2,"./assets/xbox-serie-s-card.png", "XBOX Serie S", 2800)
const producto3 = new Producto(3,"./assets/ps5.png", "PlayStation 5", 3800)
const producto4 = new Producto(4,"./assets/mando ps5.png", "Controles PS5", 450)
const producto5 = new Producto(5,"./assets/switch.png", "Nintendo Switch", 1800)
const producto6 = new Producto(6,"./assets/psvr.png", "PlayStation VR", 1500)

const productosArray = [
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
]

const divProducts = document.querySelector('#products')
productosArray.forEach(producto => {
    divProducts.innerHTML = divProducts.innerHTML + `
    <div id="${producto.id}" class="card cardProduct"> 
    <div class="cardbody">
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">S/${producto.precio}</p>
    <button id="${producto.id}" class="btn btn-danger">Agregar al Carrito</button>
    </div>
    </div>
    `
})

const carrito = []

const botonCarrito = document.querySelectorAll('.btn-danger')

botonCarrito.forEach(boton => {
    boton.onclick = () => {
        const producto = productosArray.find(prod => prod.id === parseInt(boton.id))
        const productoCarrito = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        }

        const indexCarrito = carrito.findIndex(prod => prod.id === producto.id)
        if (indexCarrito === -1) {
            carrito.push(productoCarrito)
        } else {
            carrito[indexCarrito].cantidad += 1
        }
        console.log((carrito))
    }
})

const botonFinalizar = document.querySelector('#finalizar')

botonFinalizar.onclick = () => {
    const totalCompra = carrito.map(prod => prod.precio * prod.cantidad).reduce((elem1, elem2) => elem1 + elem2)
    console.log(totalCompra)
}