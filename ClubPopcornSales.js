function calculatePrice()
            {
              
            var unpopped=3.00;
            var caramel=3.50;
            var caramelNut=4.50;
            var toffee=5.00;
            var total=0;
            var creditFee=2.50;
            var ri_tax=0.07;

            var quantityUnpopped = document.getElementById("quantityUnpopped").value;
            var quantityCaramel = document.getElementById("quantityCaramel").value;
            var quantityCaramelNut = document.getElementById("quantityCaramelNut").value;
            var quantityToffee = document.getElementById("quantityToffee").value;

              
            var total = (quantityUnpopped * unpopped) + (quantityCaramal * caramel) + (quantityCaramelNut * caramelNut) + (quantityToffee * toffee); 

            
            document.getElementById("orderTotal").value=total;
        }

function grandTotal(total) {
     
    if() {
 
    total=(total+creditFee) * ri_tax;
}
    else if(check) {
        confirm("Are you sure?"); 
  
    total= total * ri_tax;
} 
}


function clearForm() {
  document.getElementById("clearForm").reset();
}