// ==========================================
// MÓDULO 03: CLIENTE - Toma de Pedidos
// Requisitos: console.log, funciones, template strings
// Objetivo: Consultar productos, crear pedido, listar pedidos
// ==========================================

const { obtenerCatalogo } = require("./cocina");

let pedidoCliente = [];
let contadorTickets = 1;

// 1. CONSULTAR PRODUCTOS (Muestra menú bonito con template strings)
function consultarProductos() {
    const catalogo = obtenerCatalogo();

    console.log(`\n========================================`);
    console.log(`         ☕ MENÚ DE LA CAFETERÍA        `);
    console.log(`========================================`);

    catalogo.forEach(producto => {
        console.log(`ID: [${producto.id}] | Producto: ${producto.nombre} | Precio: $${producto.precio.toFixed(2)}`);
    });

    console.log(`========================================`);
}

// 2. CREAR PEDIDO DE PRODUCTOS
function crearPedidoProducto(idProducto, cantidad = 1) {
    const catalogo = obtenerCatalogo();
    const itemEncontrado = catalogo.find(p => p.id === idProducto);

    if (!itemEncontrado) {
        console.log(`El producto con ID ${idProducto} no existe.`);
        return;
    }

    const itemEnCarrito = pedidoCliente.find(item => item.id === idProducto);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad += cantidad;
    } else {
        pedidoCliente.push({
            id: itemEncontrado.id,
            nombre: itemEncontrado.nombre,
            precio: itemEncontrado.precio,
            cantidad: cantidad
        });
    }

    console.log(`Añadido: ${cantidad}x ${itemEncontrado.nombre} al pedido.`);
}

// 3. LISTAR PEDIDOS
function listarPedidos() {
    console.log(`\n--- PEDIDO ACTUAL DEL CLIENTE ---`);
    if (pedidoCliente.length === 0) {
        console.log(`El carrito está vacío.`);
        return;
    }

    let subtotal = 0;
    pedidoCliente.forEach(item => {
        const totalItem = item.precio * item.cantidad;
        subtotal += totalItem;
        console.log(`- ${item.cantidad}x ${item.nombre} = $${totalItem.toFixed(2)}`);
    });

    console.log(`Subtotal preliminar: $${subtotal.toFixed(2)}`);
}

// Enviar orden a la caja
function enviarOrdenACaja() {
    if (pedidoCliente.length === 0) {
        console.log(`No se puede enviar un pedido vacío.`);
        return null;
    }

    const folio = `#${String(contadorTickets).padStart(3, "0")}`;
    const ordenCompleta = {
        ticket: folio,
        items: [...pedidoCliente]
    };

    console.log(`\n¡Orden confirmada! Folio asignado: ${folio}`);
    contadorTickets++;
    pedidoCliente = []; // vaciamos el carrito del cliente
    return ordenCompleta;
}

module.exports = {
    consultarProductos,
    crearPedidoProducto,
    listarPedidos,
    enviarOrdenACaja
};