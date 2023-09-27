for( let i=1; i<=10; i++ ) {
let userName = prompt("введите ваше имя")
let userAge = prompt("введите ваш возраст")
let user = {
    name: userName,
    age: userAge,   
}
console.log('пользователь ' + i)
console.log('Ваше имя ' + user.name)
console.log('Ваш возраст ' + user.age)
}


let rec = receipt()
let zakaz = "Ваш заказ "
let price = 9000
for(let key in rec) {
  for(let newKey in rec[key]) { }
   zakaz = zakaz + ' ' + key + ' ' + rec[key]['info']
   price = price + rec[key]['price']
  
} console.log(`${zakaz} Стоимость вашего заказа ${price} вместе с доставкой (9000) ` );