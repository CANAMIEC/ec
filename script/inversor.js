document.addEventListener('DOMContentLoaded', () => {
    const activeUsersEl = document.getElementById('active-users');
    const totalLiquidityEl = document.getElementById('total-liquidity');
    const totalPayoutsEl = document.getElementById('total-payouts');

    let activeUsers = 14284;
    let totalLiquidity = 4850230;

    setInterval(() => {
        // Fluctuaciones aleatorias emuladas locales
        activeUsers += Math.floor(Math.random() * 5) - 2;
        totalLiquidity += Math.floor(Math.random() * 200) + 50;
        let interestPaid = Math.floor(totalLiquidity * 0.04);

        if (activeUsersEl) activeUsersEl.innerText = activeUsers.toLocaleString('en-US');
        if (totalLiquidityEl) totalLiquidityEl.innerText = '$' + totalLiquidity.toLocaleString('en-US');
        if (totalPayoutsEl) totalPayoutsEl.innerText = '$' + interestPaid.toLocaleString('en-US');
    }, 2000);
});
