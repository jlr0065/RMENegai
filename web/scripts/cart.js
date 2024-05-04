
const product = [
    {
        id: 0,
        image: '../images/1Gallon.jpg',
        title: '1 Gallon of RME Negai',
        price: 120
    },
    {
        id: 1,
        image: '../images/3 Gallons.png',
        title: '3 Gallons of RME Negai',
        price: 60
    },
    {
        id: 2,
        image: '../images/Insulin Coffee.png',
        title: '1 pack (50 sachets) of Insulin Coffee',
        price: 230
    },
    {
        id: 3,
        image: '../images/Masters Coffee.png',
        title: '1 pack (30 sachets) of Master\'s Coffee',
        price: 100
    }
];
document.getElementById('root').innerHTML = product.map((item, index) => {
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${item.image}' alt='${item.title}'></img>
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>$ ${item.price}.00</h2>
                <button onclick='addtocart(${index})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

let cart = [];

function addtocart(index) {
    cart.push(product[index]);
    displaycart();
};

function delElement(index) {
    cart.splice(index, 1);
    displaycart();
};

function displaycart() {
    let total = 0;
    const cartItem = document.getElementById('cartItem');
    const totalElement = document.getElementById('total');

    document.getElementById("count").innerHTML = cart.length;

    if (cart.length === 0) {
        cartItem.innerHTML = "Your cart is empty";
        totalElement.innerHTML = "$ 0.00";
    } else {
        cartItem.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${item.image}' alt='${item.title}'>
                    </div>
                    <p style='font-size:12px;'>${item.title}</p>
                    <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                </div>
            `;
        }).join('');
        totalElement.innerHTML = `$ ${total}.00`;
    };
};

function handle_buyOrder() {
    if (cart.length <= 0) {
        alert("There is No Order to Place Yet! \nPlease Make an Order first.");
        return;
    };
    
    // Redirect to the order form page
    window.location.href = "order_form.html";
};

// Add event listener to the Buy button
const buy_btn = document.querySelector(".btn-buy");
buy_btn.addEventListener("click", handle_buyOrder);

// FOR FORM
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Display a confirmation message to the user
    alert("Your Order has been Placed Successfully :)");
    return;
});

