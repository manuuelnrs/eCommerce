// Productos Pre-Cargados
const productos = [
    // Pasteles
    {
        id: "pastel-01",
        titulo: "Pastel 01",
        imagen: "./imagenes/pasteles/01.jpg",
        categoria: {
            nombre: "Pasteles",
            id: "pasteles"
        },
        precio: 1000
    },
    {
        id: "pastel-02",
        titulo: "Pastel 02",
        imagen: "./imagenes/pasteles/02.jpg",
        categoria: {
            nombre: "Pasteles",
            id: "pasteles"
        },
        precio: 1000
    },
    {
        id: "pastel-03",
        titulo: "Pastel 03",
        imagen: "./imagenes/pasteles/03.jpg",
        categoria: {
            nombre: "Pasteles",
            id: "pasteles"
        },
        precio: 1000
    },
    {
        id: "pastel-04",
        titulo: "Pastel 04",
        imagen: "./imagenes/pasteles/04.jpg",
        categoria: {
            nombre: "Pasteles",
            id: "pasteles"
        },
        precio: 1000
    },
    {
        id: "pastel-05",
        titulo: "Pastel 05",
        imagen: "./imagenes/pasteles/05.jpg",
        categoria: {
            nombre: "Pasteles",
            id: "pasteles"
        },
        precio: 1000
    },

    // Crepas
    {
        id: "crepa-01",
        titulo: "Crepa 01",
        imagen: "./imagenes/crepas/01.jpg",
        categoria: {
            nombre: "Crepas",
            id: "crepas"
        },
        precio: 1000
    },
    {
        id: "crepa-02",
        titulo: "Crepa 02",
        imagen: "./imagenes/crepas/02.jpg",
        categoria: {
            nombre: "Crepas",
            id: "crepas"
        },
        precio: 1000
    },

    // Bebidas
    {
        id: "bebida-01",
        titulo: "Bebida 01",
        imagen: "./imagenes/bebidas/01.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 1000
    },
    {
        id: "bebida-02",
        titulo: "Bebida 02",
        imagen: "./imagenes/bebidas/02.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 1000
    }
];

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