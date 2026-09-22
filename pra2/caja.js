// ==========================================
// MÓDULO 01: CAJA REGISTRADORA (TU ROL)
// Requisitos: let, const, funciones, arrays, reduce(), destructuring
// Objetivo: Lista de pedidos, total acumulado, agregarPedido(),
//           calcular subtotal, IVA, total
// ==========================================

// Variables y constantes requeridas
let listaPedidos = [];       // Array dinámico de pedidos
const TASA_IVA = 0.16;       // 16% de IVA

// 1. FUNCIÓN AGREGAR PEDIDO (Manual en mostrador)
function agregarPedido(nombre, precio) {
    const precioNum = parseFloat(precio);

    if (!nombre || isNaN(precioNum) || precioNum <= 0) {
        console.log("Error: Debes ingresar un nombre y un precio válido.");
        return;
    }

    // Insertar en el array
    listaPedidos.push({
        producto: nombre,
        precio: precioNum
    });

    console.log(`Pedido agregado a caja: ${nombre} - $${precioNum.toFixed(2)}`);
}

// Recibir orden que manda el módulo Cliente
function recibirOrdenCliente(orden) {
    if (!orden || !orden.items) return;

    orden.items.forEach(item => {
        // Uso de DESTRUCTURING
        const { nombre, precio, cantidad } = item;
        listaPedidos.push({
            producto: `${cantidad}x ${nombre} (${orden.ticket})`,
            precio: precio * cantidad
        });
    });

    console.log(`Comanda ${orden.ticket} cargada con éxito a la caja.`);
}

// 2. CÁLCULO DE TOTALES USANDO reduce() Y destructuring
function calcularTotales() {
    // reduce() acumulando el precio, usando destructuring ({ precio }) en cada elemento
    const subtotal = listaPedidos.reduce((acumulador, { precio }) => acumulador + precio, 0);
    const iva = subtotal * TASA_IVA;
    const total = subtotal + iva;

    // Retorna objeto
    return { subtotal, iva, total };
}

// 3. MOSTRAR EL RESUMEN / TICKET
function mostrarResumenCaja() {
    console.log(`\n========================================`);
    console.log(`           🧾 TICKET DE CAJA            `);
    console.log(`========================================`);

    if (listaPedidos.length === 0) {
        console.log(`No hay productos registrados en caja.`);
        console.log(`========================================`);
        return;
    }

    // Uso de destructuring en map/forEach
    listaPedidos.forEach(({ producto, precio }) => {
        console.log(`• ${producto.padEnd(26, " ")} $${precio.toFixed(2)}`);
    });

    // Desestructuración del resultado de calcularTotales()
    const { subtotal, iva, total } = calcularTotales();

    console.log(`----------------------------------------`);
    console.log(`Subtotal:                 $${subtotal.toFixed(2)}`);
    console.log(`IVA (16%):                $${iva.toFixed(2)}`);
    console.log(`Total a Pagar:            $${total.toFixed(2)}`);
    console.log(`========================================`);
}

// 4. COBRAR Y VACIAR LA CAJA
function cobrarVenta() {
    if (listaPedidos.length === 0) {
        console.log("No hay nada que cobrar.");
        return;
    }

    const { total } = calcularTotales();
    console.log(`\n✅ Cobro exitoso por un total de $${total.toFixed(2)}`);
    
    // Vaciamos el array de pedidos
    listaPedidos = [];
    console.log("Caja lista para la siguiente transacción.");
}

module.exports = {
    agregarPedido,
    recibirOrdenCliente,
    calcularTotales,
    mostrarResumenCaja,
    cobrarVenta
};