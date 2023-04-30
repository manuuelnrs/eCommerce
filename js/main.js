// PRODUCTOS
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

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-info">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">agregar</button>
            </div>`
        
        contenedorProductos.append(div);
    })
}

cargarProductos();