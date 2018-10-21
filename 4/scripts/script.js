// Задача 1
function createObject(num) {
  num = +prompt("Введите число");
  if (num <= 999) {
    let  objNumber = {
      "сотен": null,
      "десятков": null,
      "единиц": null
    } 
    objNumber["сотен"] = Math.floor(num / 100);
    objNumber["десятков"] = ( Math.floor(num  / 10 ) ) % 10;
    objNumber["единиц"] = num % 10;
    console.log(objNumber);
  }  else {
    console.log('Не знаем таких чисел');
  } }
   
createObject()

//2
/*
cart = [ {purchase 1}, {purchase 2}, и тд]
purchase = {
  itemId = id, // id товара
  itemTittle = item-title // название товара
  itemPrice = item-price // цена товара
}
*/
let cartPrice = 0;
cart = [{itemId: 1, itemTittle: 'Tissot COUTURIER QUARTZ GMT', itemPrice: 30000}, {itemId: 2, itemTittle: 'Casio EFR-526D-1A', itemPrice: 7000}];
function countCartPrice(x) {
    for (i = 0; i < cart.length; i++) { 
        cartPrice = cartPrice + cart[i].itemPrice;
    }
    return cartPrice;
}
console.log(cart);
console.log('В корзине:');
for (i=0;i<cart.length;i++){console.log(cart[i].itemTittle + ' — ' + cart[i].itemPrice +' руб');}
console.log('Стоимость заказа: '+ countCartPrice(cart) +' руб');
/*не совсем понял суть задания, поэтому написал такой код подсчета карзины.
мне видется процесс переноса товара в карзину так: при нажатии на кнопку купить 
создается массив, в который помещается объект с характеристиками itemId, itemTittle,
itemPrice, которым присваивают соответсвующие характеристики из файла index.html*/ 