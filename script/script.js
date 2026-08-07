// Espera a que todo el HTML y el DOM estén completamente cargados y estables
document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializa los iconos visuales de la librería externa
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Elementos de la interfaz recuperados de forma segura mediante el DOM
    const amountInput = document.getElementById('amount');
    const profitOutput = document.getElementById('profit');
    const totalOutput = document.getElementById('total');

    // Tasa fija solicitada: 3%
    const INTEREST_RATE = 0.03; 

    // Función principal que realiza el cálculo automático futurista
    function calculateInvestment() {
        let amount = parseFloat(amountInput.value);
        
        // Control de seguridad si el campo queda vacío o es erróneo
        if (isNaN(amount) || amount < 0) {
            amount = 0;
        }

        // Proceso algorítmico del interés
        const profit = amount * INTEREST_RATE;
        const total = amount + profit;

        // Renderizado en la interfaz con formato limpio
        profitOutput.innerText = '$' + profit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        totalOutput.innerText = '$' + total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Escucha en tiempo real cada pulsación o cambio numérico del usuario
    if (amountInput) {
        amountInput.addEventListener('input', calculateInvestment);
    }
});
