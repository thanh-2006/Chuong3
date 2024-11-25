document.getElementById('calculate').addEventListener('click', () => {
    let total = 0;
    const rows = document.querySelectorAll('tbody tr');
    const vatCheckbox = document.getElementById('vat');

    rows.forEach(row => {
        const price = parseFloat(row.querySelector('.price').textContent);
        const quantity = parseInt(row.querySelector('.quantity').value);
        const maxQuantity = parseInt(row.querySelector('.quantity').max);
        const isChecked = row.querySelector('.select').checked;

        if (isChecked) {
            if (quantity > maxQuantity) {
                alert('Số lượng mua không được vượt quá số lượng có.');
                return;
            }
            total += price * quantity;
        }
    });

    if (vatCheckbox.checked) {
        total *= 1.1; // Áp dụng VAT
    }

    document.getElementById('total').textContent = total.toFixed(2);
});

document.getElementById('reset').addEventListener('click', () => {
    document.querySelectorAll('.quantity').forEach(input => (input.value = 0));
    document.querySelectorAll('.select').forEach(checkbox => (checkbox.checked = false));
    document.getElementById('vat').checked = false;
    document.getElementById('total').textContent = '0';
});
