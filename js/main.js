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

let products = (
    { id : 123,
      name : "Men's Retro Canvas..",
      img : "bag1.jpg",
      price : 39.99
    },
    { id : 124,
      name : "Dakine Suitcase",
      img : "dummy-pdt-b.jpg",
      price : 119.99
    },
    { id : 125,
      name : "iPong Max",
      desc : "All difficulty unreserved the solicitude.",
      img : "dummy-pdt-a.jpg",
      price : 675
    },
    {
      name : "iTab Pok",
      desc : "Had judgment out property the supplied. ",
      img : "dummy-pdt-a.jpg",
      price : 842
    }
);

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

    $('.card__img, .card__img--big, .card__img--bigger').click(function(){
        let count = 0;
        count++;
        let products = [];
        for (let i = 0; i < count; i++) {
            const cardName = $(this).next('.card--text').text();
            const cardPrice = $(this).next().next('.card--price').text();
            let product = {
                name: cardName,
                price: cardPrice
            };
            products.push(product);
            $('.cart__content').html(`<p class="cart__content--name">${cardName}</p><p class="cart__content--price">${cardPrice}</p>`);
        }
        console.log(products);
    })
});
    
