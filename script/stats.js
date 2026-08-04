document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar los iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Traer los elementos del DOM de estadísticas
    const activeUsersEl = document.getElementById('active-users');
    const totalLiquidityEl = document.getElementById('total-liquidity');
    const totalPayoutsEl = document.getElementById('total-payouts');

    // Valores iniciales base de simulación
    let activeUsers = 14284;
    let totalLiquidity = 4850230;
    let interestPaid = 194008;

    // Función robótica de actualización en tiempo real
    function updateNetworkMetrics() {
        // Generar pequeñas fluctuaciones aleatorias simuladas
        const userFluctuation = Math.floor(Math.random() * 7) - 2; // de -2 a +4 usuarios
        const investmentFluctuation = Math.floor(Math.random() * 250) + 50; // Inyecciones de capital constantes

        // Aplicar los cambios a las variables de red
        activeUsers += userFluctuation;
        totalLiquidity += investmentFluctuation;
        
        // El interés pagado siempre sube proporcionalmente al capital total (4%)
        interestPaid = Math.floor(totalLiquidity * 0.04);

        // Renderizar los números formateados con comas de manera legible en pantalla
        activeUsersEl.innerText = activeUsers.toLocaleString('en-US');
        totalLiquidityEl.innerText = '$' + totalLiquidity.toLocaleString('en-US');
        totalPayoutsEl.innerText = '$' + interestPaid.toLocaleString('en-US');
    }

    // Ejecutar el ciclo de actualización de red de forma indefinida cada 2.5 segundos
    setInterval(updateNetworkMetrics, 2500);
});
