function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    const frequency = parseInt(document.getElementById('frequency').value);

    // Fórmula de interés compuesto: A = P (1 + r/n)^(nt)
    const amount = principal * Math.pow((1 + rate / frequency), frequency * years);
    const accumulatedInterest = amount - principal;

    const formatter = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });

    document.getElementById('accumulated-interest').textContent = formatter.format(accumulatedInterest);
    document.getElementById('final-amount').textContent = formatter.format(amount);
}
