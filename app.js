


function calculation(products, price_value, isAddition) {
    const productQuantity = document.getElementById(products + '-quantity');
    const productQuantityValue = productQuantity.value;
    let phones = parseInt(productQuantityValue);
    if (isAddition) {
        phones += 1;
    }
    else if (productQuantityValue > 0) {
        phones -= 1; 
    }
    productQuantity.value = phones;

    const productPrice = document.getElementById(products + '-price');
    const price = (phones * price_value)
    productPrice.innerText = price;

    calculateTotal()
}

function getValue(products, price) {
    const product = document.getElementById(products + '-quantity');
    const totalPrice = product.value * price;
    return totalPrice;
}

function calculateTotal() {
    const phonePrice = getValue('phones', 1219);
    const casePrice = getValue('cases', 59);

    //SubTotal calculation
    const subTotal = phonePrice + casePrice;
    document.getElementById('subtotal').innerText = subTotal;
    //Tax calculation
    const tax = subTotal / 10;
    document.getElementById('tax').innerText = tax;
    //Total calculation
    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}

//Phone plus value----------
document.getElementById('phone-plus').addEventListener('click', function () {
    calculation('phones', 1219, true);
})

//Phone minus value----------
document.getElementById('phone-minus').addEventListener('click', function () {
    calculation('phones', 1219, false)
})

// Case Plus------------------
document.getElementById('case-plus').addEventListener('click', function () {
    calculation('cases', 59, true)
})

// Case Minus------------------
document.getElementById('case-minus').addEventListener('click', function () {
    calculation('cases', 59, false)
})