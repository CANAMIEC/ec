document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const profitOutput = document.getElementById('profit');
    const totalOutput = document.getElementById('total');
    const INTEREST_RATE = 0.04; // 4%

    function calculateInvestment() {
        let amount = parseFloat(amountInput.value);
        if (isNaN(amount) || amount < 0) amount = 0;
        
        const profit = amount * INTEREST_RATE;
        const total = amount + profit;

        profitOutput.innerText = '$' + profit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        totalOutput.innerText = '$' + total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    if (amountInput) amountInput.addEventListener('input', calculateInvestment);
});
