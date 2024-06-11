function calculateFibonacci() {
    const n = parseInt(document.getElementById('nFibonacci').value);

    if (isNaN(n) || n <= 0) {
        alert('Masukkan angka yang valid!');
        return;
    }

    let series = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        series.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    document.getElementById('seriesFibonacci').value = series.join(', ');
}
