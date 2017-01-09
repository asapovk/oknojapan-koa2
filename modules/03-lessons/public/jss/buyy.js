(function () {


  $('.courses-list__item-buy-button').on('click', function () {

      var buyButton = $(this);
      var cartBadge = $('.courses-menu__item-cart-badge');
      var removeButton = buyButton.siblings('.courses-list__item-buy-remove');
      var xhr = new XMLHttpRequest();
      var courseId = $(this).attr("id");
      xhr.open('POST', '/courses', true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.send(JSON.stringify({courseId: courseId}));
      console.log(JSON.stringify({courseId: courseId}));

      xhr.onload = function () {
        buyButton.hide();
        removeButton.show();

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
        removeButton.hide();
        buyButton.show();
        

      };
  });

//  $('.courses-empty-cart').on('click', function () {
//    var xhr = new XMLHttpRequest();
//    xhr.open('GET', '/courses-empty', true);
//    xhr.send();
//  });


}) ()
