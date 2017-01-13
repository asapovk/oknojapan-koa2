(function () {

  function createCartElement() {
    $('.courses-menu').append('<div class="courses-cart"><a href="/checkout">Cart <span class="badge courses-cart__badge">1</span></a></div>');
  }

  function updateCartElement(numberOfItems) {
    var cartBadge = document.getElementsByClassName('courses-cart__badge')[0];
    cartBadge.innerHTML = numberOfItems;
  }

  function deleteCartElement() {
    $(".courses-cart").remove();
    console.log('works');
  }


  $('.courses-list__item-buy-button').on('click', function () {

      var buyButton = $(this);
      var cartBadge = $('.courses-cart__badge');
      var removeButton = buyButton.siblings('.courses-list__item-buy-remove');
      var xhr = new XMLHttpRequest();
      var courseId = $(this).attr("id");
      xhr.open('POST', '/courses', true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(JSON.stringify({courseId: courseId}));
      console.log(JSON.stringify({courseId: courseId}));

      xhr.onload = function () {
        if(xhr.status === 200) {
          var itemsInCart = xhr.responseText;
          switch (itemsInCart) {
            case '1': createCartElement();
              break;
            default: updateCartElement(itemsInCart);

          }
          buyButton.hide();
          removeButton.show();
        }
        console.log(xhr.responseText);
      };
  });


  $('.courses-list__item-buy-remove').on('click', function () {

      var removeButton = $(this);
      var cartBadge = $('.courses-menu__item-cart-badge');
      var buyButton = removeButton.siblings('.courses-list__item-buy-button');
      var xhr = new XMLHttpRequest();
      var courseId = $(this).attr("id");
      xhr.open('POST', '/courses', true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(JSON.stringify({courseId: courseId}));
      console.log(JSON.stringify({courseId: courseId}));

      xhr.onload = function () {
        if(xhr.status === 200) {
          var itemsInCart = xhr.responseText;
          switch (itemsInCart) {
            case '0': deleteCartElement();
              break;
            default: updateCartElement(itemsInCart);

          }
          removeButton.hide();
          buyButton.show();
        }
        console.log(xhr.responseText);

      };
  });

//  $('.courses-empty-cart').on('click', function () {
//    var xhr = new XMLHttpRequest();
//    xhr.open('GET', '/courses-empty', true);
//    xhr.send();
//  });


}) ()
