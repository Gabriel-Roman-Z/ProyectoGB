const tabla = new Tabulator("#tabla-rifas", {
    layout: "fitColumns",
    responsiveLayout: "collapse",
    placeholder: "No hay rifas registradas",
    columns: [{
        title: "Nombre",
        field: "nombre",
        headerFilter: true
    }, {
        title: "Rifa",
        field: "rifa",
        headerFilter: true
    }, {
        title: "Número",
        field: "numero"
    }, {
        title: "Estado",
        field: "estado"
    }],
    data: [{
        nombre: "Juan Pérez",
        rifa: "Moto 2025",
        numero: "054",
        estado: "Pagado"
    }, {
        nombre: "Ana Torres",
        rifa: "TV 60''",
        numero: "122",
        estado: "Pendiente"
    }]
});


const tablero = document.getElementById('tablero');
const total = 200;

// Genera array de casillas con estado aleatorio
const casillas = Array.from({
    length: total
}, (_, i) => ({
    id: i + 1,
    vendido: Math.random() < 0.4 // ~40% vendidos
}));

casillas.forEach(c => {
    const div = document.createElement('div');
    div.classList.add('casilla');
    if (c.vendido) div.classList.add('vendido');

    div.innerHTML = `
        <div class="contenido">
          <span class="numero">${c.id}</span>
          ${c.vendido ? '<i class="fa fa-check"></i>' : ''}
        </div>
      `;
    tablero.appendChild(div);
});

window.addEventListener('load', () => {
    const label = document.querySelector('.contact-label');
    setTimeout(() => {
      label.style.opacity = '0'; // Hace que la etiqueta sea invisible
      label.style.pointerEvents = 'none'; // Evita que interfiera con clics
    }, 5000); // 5000ms = 5 segundos
});