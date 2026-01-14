// script.js

// 1. SISTEMA DE FILTROS
function filtrarProductos(categoria) {
    const tarjetas = document.querySelectorAll('.tarjeta');
    const botones = document.querySelectorAll('.btn-filtro');

    // Activar botón visualmente
    botones.forEach(btn => {
        btn.classList.remove('activo');
        if(btn.textContent.toLowerCase().includes(categoria) || (categoria === 'todos' && btn.textContent === 'Todos')) {
            btn.classList.add('activo');
        }
    });
    
    // Mostrar/Ocultar tarjetas
    tarjetas.forEach(tarjeta => {
        const categoriaTarjeta = tarjeta.getAttribute('category');
        if (categoria === 'todos' || categoriaTarjeta === categoria) {
            tarjeta.classList.remove('oculto');
            tarjeta.classList.add('mostrar');
        } else {
            tarjeta.classList.add('oculto');
            tarjeta.classList.remove('mostrar');
        }
    });
}

// 2. MODO OSCURO
const btnTema = document.getElementById('theme-toggle');
const body = document.body;
const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'dark') {
    body.setAttribute('data-theme', 'dark');
    btnTema.textContent = '☀️';
}

btnTema.addEventListener('click', () => {
    const esOscuro = body.getAttribute('data-theme') === 'dark';
    if (esOscuro) {
        body.removeAttribute('data-theme');
        btnTema.textContent = '🌙';
        localStorage.setItem('tema', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        btnTema.textContent = '☀️';
        localStorage.setItem('tema', 'dark');
    }
});

// 3. WHATSAPP
function pedirPorWhatsapp(nombreProducto) {
    const numero = "50661542210"; 
    const mensaje = `¡Hola Cinnapins! ✨ Me gustaría pedir el producto: ${nombreProducto}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

console.log("¡Cinnapins v2.0 Lista! 🐰✨");