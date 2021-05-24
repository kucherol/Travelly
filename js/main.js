let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(function (){
    $('.bags__first').slick({
        dots: true,
        dotsClass: 'bags__info--dots',
        prevArrow: '.bags__info--arrow-left',
        nextArrow: '.bags__info--arrow-right',
    });

    $('.bags__right-up--slider').slick({
        dots: true,
        dotsClass: 'bags__right-up--slider-dots',
        arrows: false,
    });

    $('.bags__right-down--slider').slick({
        dots: true,
        dotsClass: 'bags__right-down--slider-dots',
        arrows: false,
    });

    $('.card__img').slick({
        dots: true,
        dotsClass: 'card__dots',
        arrows: false,
    });

    $('.card__img--big').slick({
        dots: true,
        dotsClass: 'card__dots--big',
        arrows: false,
    });

    $('.card__img--big2').slick({
        dots: true,
        dotsClass: 'card__dots--big2',
        arrows: false,
    });

    $(".header__nav-menu--language").change(function(){
        let selectedLang = $(this).children("option:selected").val();
        if (selectedLang === "spa") {
            $(".lang-esp").css({"display": "block"});
            $(".lang-eng").css({"display": "none"});
        } else if (selectedLang === "eng") {
            $(".lang-esp").css({"display": "none"});
            $(".lang-eng").css({"display": "block"});
        }
      });
});
    

let carts = document.querySelectorAll(".sale");

let products = [
    {
        name: 'Dakine Suitcase',
        tag: 'DakineSuitcase',
        price: 119.99,
        inCart: 0
    },
    {
        name: 'Mens Retro Canvas',
        tag: 'MensRetroCanvas',
        price: 39.99,
        inCart: 0
    },
    {
        name: '2 Piece Luggage Set',
        tag: '2PieceLuggageSet',
        price: 79.99,
        inCart: 0
    },
    {
        name: 'Amsterdam Busine',
        tag: 'AmsterdamBusine',
        price: 19.99,
        inCart: 0
    },
    {
        name: 'Travel Tote Carrier Bag',
        tag: 'TravelToteCarrierBag',
        price: 59.99,
        inCart: 0
    },
]

for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.count').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.count').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.count').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseFloat(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="cart-product">
                <i class="fas fa-trash-alt"></i>
                <img src="./images/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="total">
                $${item.inCart * item.price}
            </div>`
        });

        productContainer.innerHTML += `
            <div class="cartTotalContainer">
                <h4 class="cartTotalTitle">
                Cart Total
                </h4>
                <h4 class="cartTotal">
                $${cartCost}
                </h4>
            </div>`
    }
}

onLoadCartNumbers();
displayCart();

function responsiveMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }