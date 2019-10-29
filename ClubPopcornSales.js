function getSubtotal(){

var unpopped=3.00;
var caramel=3.50;
var caramelNut=4.50;
var toffey=5.00;
var total=0;
var creditFee=2.50;
var ri_tax=0.07;

// Gets quantity of each product

var quantity_unpopped=document.getElementById("quantityUnpopped").value;
var quantity_caramel=document.getElementById("quantityCaramel").value;
var quantity_caramelNut=document.getElementById("quantityCaramelNut").value;
var quantity_toffey=document.getElementById("quantityToffey").value;



    //total=(quantity_unpopped * unpopped) + (quantity_caramel * caramel) + (quantity_caramelNut * caramelNut) + (quantity_toffey * toffey);


//Returns final value to Subtotal

        document.getElementById("updatesubtotal").value=total;
    console.log(subtotal);


}

function getSubtotal() {
    subtotal += unpopped.value*3.00;
    subtotal += caramel.value*3.50;
    subtotal += caramelNut.value*4.50;
    subtotal += toffey.value*5.00;



function popcornConfirm() {
    var confirmation= confirm("Are you sure?");
        if (confirmation) {
            alert("cancelling order");
            return false;

        




/* if(cardtype){
    //  APPLY credit fee
    total=(total+creditFee) * ri_tax;
}
else if(check) {
    //  Only ri tax fee
    total= total * ri_tax;
} */

/*function clearForm(){
  document.getElementById("myForm").reset(); 
