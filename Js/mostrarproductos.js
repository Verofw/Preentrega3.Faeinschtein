    const containerRemeras = document.querySelector('.containerRemeras');
    const containerBuzos = document.querySelector ('.containerBuzos');
    const containerTazas = document.querySelector ('.containerTazas');
    const containerPosters = document.querySelector ('.containerPosters');
    const containerStickers = document.querySelector ('.containerStickers');
    
    
function mostrarProductos(productos, condicion, contenedor) {
    contenedor.innerHTML = '';
    
    productos.forEach((producto) => {
        if (condicion(producto)) {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('card');
            tarjeta.style.width = '18rem';

            tarjeta.innerHTML = `
                <img src="${producto.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title productos">${producto.nombre} // $${producto.precio}</h5>
                    <p class="card-text">${producto.detalle}</p>
                    <div class="botones d-flex"> 
                        <button class="btn btn-light carritoPush">Agregar al carrito</button>
                    </div>
                </div>
            `;
            contenedor.appendChild(tarjeta);
        }
    });
}

// Llamar a la función para mostrar productos con la condición especificada
mostrarProductos(productos, nombreRemera, containerRemeras);
mostrarProductos (productos, nombreBuzo, containerBuzos);
mostrarProductos (productos, nombreTaza, containerTazas);
mostrarProductos (productos, nombrePoster, containerPosters);
mostrarProductos (productos, nombreSticker, containerStickers);


function nombreRemera(producto) {
    return producto.nombre.toLowerCase().includes('remera');
}
function nombreBuzo (producto){
    return producto.nombre.toLowerCase().includes ('buzo');
}
function nombreTaza (producto){
    return producto.nombre.toLowerCase().includes ('taza');
}
function nombrePoster (producto){
    return producto.nombre.toLowerCase().includes ('poster');
}
function nombreSticker (producto){
    return producto.nombre.toLowerCase().includes ('sticker');
}


//mostrar con filtro busqueda

// const busquedaInput = document.getElementById("busquedaInput");
// const buscarBoton = document.getElementById ("buscarBoton");

// busquedaInput.addEventListener("input", () => {
//     const consulta = busquedaInput.value.toLowerCase();
//     const productosFiltrados = filtrarProductos(consulta);
//     mostrarProductosEnVista(productosFiltrados);
// });

// function filtrarProductos(consulta) {
//     return productos.filter((producto) => {
//         return producto.nombre.toLowerCase().includes(consulta);
//     });
// }

// function mostrarProductosEnVista(productos) {
//     const sinResultados = document.getElementById("resultadosContainer");
//     if (productos.length === 0) {
//         const h5 = document.createElement("h5");
//             h5.innerHTML = `<h5 class= "sinResultados text-light"> No se encontraron resultados. </h5>`
//             sinResultados.appendChild(h5);
//     } else {
//     mostrarProductos(productos, nombreRemera, containerRemeras);
//     mostrarProductos(productos, nombreBuzo, containerBuzos);
//     mostrarProductos(productos, nombreTaza, containerTazas);
//     mostrarProductos(productos, nombrePoster, containerPosters);
//     mostrarProductos(productos, nombreSticker, containerStickers);
// }
// }




