module.exports = function  (oldCart) {
  this.items = oldCart.items  || {};
  this.totalQty =oldCart.totalQty || 0;
  this.totalPrice =oldCart.totalPrice || 0;

  this.add = function (item, id) {
      var storedItem = this.items[id];

      if(!storedItem) {
        //Deleting item not yet in cart
        storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        storedItem.qty++;
        storedItem.price = storedItem.item.price*storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
        return true;
      }
      //Deleting item already in cart
      return false;

  };

  this.remove = function (item, id) {
    var removedItem = this.items[id];
    if(removedItem) {
      //Deleting item is in cart
      delete this.items[id];
      this.totalQty -= 1;
      this.totalPrice -= item.price;
      return true;
    }
    //Deleting item not in cart
    return false;
  };

  this.generateArray = function() {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id].item);
    }
    return arr;
  };
};
