// function that change the background color of the table //
$(document).ready(function(){
    $(".change_background").hover(function(){
        $(this).css("background-color", "white");
    }, function(){
        $(this).css("background-color", "lightgray");
    });
});
// show popup message when the mouse leave the window //
let x = 0
document.addEventListener("mouseleave", function(e) {
    if(x < 1){
    alert("Goodbye")
        x++;
    }
})

// -------------------------------------------------------------------------------------------


const cart = [];
var count = 0 ;



// open the cart popup
function openPopup() {
    x = true;
    var popup = document.getElementById("myPopup");
    if (x === true ){
        popup.classList.toggle("show");
        x = false;
    }
}

// handle the add , remove and clear buttons
myPopup.onclick = function (e) {

    if(e.target && e.target.classList.contains('add')){
        const name = e.target.dataset.name;
        addItem(name);
        openPopup()
    }
    else if(e.target && e.target.classList.contains('remove')){
        const name = e.target.dataset.name;
        removeItem(name , 1);
        openPopup()
    }
    else if(e.target && e.target.classList.contains('clear')){
        const name = e.target.dataset.name;
        removeItem(name);
        openPopup()
    }

}




// add Item
function addItem(name , price , image) {
    count++;
    document.getElementById("cart").innerHTML=count;
    for(let i=0 ; i < cart.length ; i++){
        if( cart[i].name === name ){
            cart[i].quantity += 1;
            printItems();
            return
        }
    }
    const item = { name , price , quantity: 1 , image}
    cart.push(item);
    printItems();
}

// print all the items
function printItems() {

    let itemStr = '';
    let orderButton = '';
    let itemSummary= '';
    for(let i = 0 ; i < cart.length ; i++){
        let itemPrice = 0 ;
        itemPrice = cart[i].price * cart[i].quantity;
        itemStr += `<li><a><image src="${cart[i].image}" style="width: 45px" ></image></a> ${cart[i].name} : $${cart[i].price} x ${cart[i].quantity} = $${itemPrice.toFixed(2)}
        <button class="add" data-name="${cart[i].name}">+</button>  
        <button class="remove" data-name="${cart[i].name}">-</button>
         <button class="clear" data-name="${cart[i].name}">clear</button></li>`;
    }
    for(let i=0 ; i < cart.length ; i++){
        let itemPrice = 0 ;
        itemPrice = cart[i].price * cart[i].quantity;
        itemSummary+=`<li> ${cart[i].name} : ${cart[i].price} x ${cart[i].quantity} = $${itemPrice.toFixed(2)}</li>`;
    }
    if( getTotalPrice() > 0 ){
        orderButton = ` <br> <form action="summary..php" method="post"><input type="hidden" name="summary" value="${itemSummary} <b>Total Price:$${getTotalPrice()}</b> "><input type="submit" value="order" class="submit"></form> `
    }
    myPopup.innerHTML = ` ${itemStr}  Total Price: $${getTotalPrice()} ${orderButton}`;

}

// get quantity
function getQty(){
    let quantity=0;
    for(let i = 0 ; i < cart.length ; i++){
        quantity += cart[i].quantity;
    }
    return quantity;
}

// get total price
function getTotalPrice(){
    let total=0;
    for(let i = 0 ; i < cart.length ; i++){
        total += cart[i].price * cart[i].quantity;
    }
    return total.toFixed(2);
}

 // remove item
function removeItem(name ,quantity= 0){

    for(let i = 0 ; i < cart.length ; i++){
        if(cart[i].name === name){
            if(quantity > 0 ){
                cart[i].quantity -= quantity;
                count-=quantity;
                document.getElementById("cart").innerHTML=count;
                if(cart[i].quantity < 1){
                    cart.splice(i,1);
                }
            }
            if( quantity === 0  ){
                count-=cart[i].quantity;
                document.getElementById("cart").innerHTML=count;
                cart.splice(i,1);

            }
            if (count === 0 ){
                document.getElementById("cart").innerHTML="";

            }
            printItems();
            return;
        }
    }
}








