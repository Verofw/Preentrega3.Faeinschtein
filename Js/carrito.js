
// agregue esta funcion para saber si el localStorage tiene data y prevenir error SyntaxError: JSON.parse con el que me inicia en consola
function traerItemsStorage() {
    const carritoData = localStorage.getItem('carrito');
    if (carritoData) {
        try {
            carrito = JSON.parse(carritoData);
        } catch (error) {
            console.error('Error al analizar datos del carrito:', error);
        }
    } else {
        carrito = [];
    }
}

function calcularTotalCarrito() {
    return carrito.reduce((acumulador, item) => acumulador + item.producto.precio * item.cantidad, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    traerItemsStorage();
    dibujarTabla();
})


let carrito = [];
let totalCarrito = 0;

const btnAgregar = document.querySelectorAll('.carritoPush');
const selectProductos = document.querySelectorAll('.productos');

btnAgregar.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const productoSeleccionado = productos[index];
        const indiceCarrito = carrito.findIndex((item) => item.producto.nombre === productoSeleccionado.nombre);

        if (indiceCarrito !== -1) {
            carrito[indiceCarrito].cantidad++;
        } else {
            const productoAgregado = new Item(productoSeleccionado, 1);
            carrito.push(productoAgregado);
        }
        const mensaje = `${productoSeleccionado.nombre} se ha agregado al carrito.`;

        Toastify({
            text: mensaje,
            duration: 3000,
            gravity: 'bottom',
            position: 'center',
        }).showToast();

        localStorage.setItem('carrito', JSON.stringify(carrito));
        dibujarTabla();
    });
});
