// Productos Pre-Cargados
let productos = [];

fetch("./json/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

/***        DOM      ***/
const contenedorProductos = document.querySelector("#contenedor-productos");

const botonesCategorias = document.querySelectorAll(".boton-categoria");

const tituloPrincipal = document.querySelector("#titulo-principal");

let botonesAgregar = document.querySelectorAll(".producto-agregar");

const cantidad = document.querySelector("#cantidad");


// cargar los productos agregando del array precargado
function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-info">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">agregar</button>
            </div>`;
        
        contenedorProductos.append(div);
    });

    buscarAgregar();
};

cargarProductos(productos);

// funciones al hacer clic en el menú
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        botonesCategorias.forEach(boton => boton.classList.remove("active")) // Quitar selección a todos los botones
        
        // causa
        e.currentTarget.classList.add("active"); // Agregar selección al botón pulsado

        // efecto
        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los Postres";
            cargarProductos(productos);
        }
        
    });
});

function buscarAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

let productosEnCarrito; // Carrito
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarCantidad();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoBuscado = productos.find( producto => producto.id === idBoton);
    // Agregar al carrito
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoBuscado.cantidad = 1;
        productosEnCarrito.push(productoBuscado);
    }

    actualizarCantidad();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarCantidad() {
    let numero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    cantidad.innerText = numero;
}