const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Simulated Shipment Tracking Function
function trackShipment() {
    const input = document.getElementById('tracking-input');
    const resultDiv = document.getElementById('tracking-result');
    
    if (!input || !resultDiv) return;

    const trackingNumber = input.value.trim();

    if (trackingNumber === '') {
        resultDiv.classList.remove('hidden');
        resultDiv.className = "mt-3 text-xs text-red-400 font-medium";
        resultDiv.textContent = "Por favor, ingresa un número de guía válido.";
        return;
    }

    resultDiv.classList.remove('hidden');
    resultDiv.className = "mt-3 text-xs text-blue-400 font-medium animate-pulse";
    resultDiv.textContent = "Buscando información del envío en el servidor global...";

    setTimeout(() => {
        resultDiv.className = "mt-3 text-xs text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-500/20 p-3 rounded-xl";
        resultDiv.innerHTML = `
            <div class="flex items-center justify-between mb-1">
                <span class="font-bold">Guía: ${trackingNumber}</span>
                <span class="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px] uppercase font-bold">En Tránsito</span>
            </div>
            <p class="text-slate-300">Estado actual: Despachado desde Centro de Distribución Principal - Destino Final en Ruta.</p>
        `;
    }, 1200);
}
