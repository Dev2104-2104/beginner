const productImg = document.getElementById('productImg');
const productName = document.getElementById('productName');
const blueColor = document.getElementById('blueColor');
const redColor = document.getElementById('redColor');
const greenColor = document.getElementById('greenColor');
const productPrice = document.getElementById('productPrice');

blueColor.addEventListener('click', () => {
    productImg.src = '/image/travel/nike-blue.png';
    productName.textContent = 'Blue Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$100.00</strong>';
})

greenColor.addEventListener('click', () => {
    productImg.src = '/image/travel/nike-green.png';
    productName.textContent = 'Green Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$120.00</strong>';
})

redColor.addEventListener('click', () => {
    productImg.src = '/image/travel/nike-red.png';
    productName.textContent = 'Red Nike Dunk High By You';
    productPrice.innerHTML = '<strong>$150.00</strong>';
})

