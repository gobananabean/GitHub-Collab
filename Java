
function calculatePrice()
            {
            //select data  
            var unpopped=3.00;
            var caramel=3.50;
            var caramelNut=4.50;
            var toffey=5.00;
            var total=0;
            var creditFee=2.50;
            var ri_tax=0.07;

            var quantityUnpopped = document.getElementById("quantityUnpopped").value;
            var quantityCaramel = document.getElementById("quantityCaramel").value;
            var quantityCaramelNut = document.getElementById("quantityCaramelNut").value;
            var quantityToffee = document.getElementById("quantityToffee").value;

            //calculate final cost  
            var total = (quantityUnpopped * unpopped) + (quantityCaramal * caramel) + (quantityCaramelNut * caramelNut) + (quantityToffee * toffee); 

            //print value to orderTotal 
            document.getElementById("orderTotal").value=total;
        }
