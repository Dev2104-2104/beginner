let product = [{
    id: 1,
    img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'French Toast',
    price: 2750,
    description: 'French Toast Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima numquam, explicabo laboriosam molestiae aliquam?',
    type: 'dessert'
}, {
    id: 2,
    img: 'https://images.unsplash.com/photo-1648471233533-a13856a7f3ab?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Cheesecake',
    price: 4200,
    description: 'Cheesecake Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima numquam, explicabo laboriosam molestiae aliquam?',
    type: 'dessert'
}, {
    id: 3,
    img: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Spaghetti Bolognese',
    price: 3000,
    description: 'Spaghetti Bolognese Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui minima numquam, explicabo laboriosam molestiae aliquam?',
    type: 'main course'
}];

document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productlist");
    let html = '';

    for (let i = 0; i < product.length; i++) {
        html += `<div class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.3vw;">${product[i].name}</p>
                    <p style="font-size: 1vw;">${ numberWithCommas(product[i].price) }</p>
                </div>`;
    }
    productlist.innerHTML = html;
});

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}