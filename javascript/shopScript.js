function changeOne(textId,val,priceId,price)
{
    var quantity =  document.getElementById(textId).value;

    var quantityValu = parseInt(quantity);

    var count = quantityValu + val ;

    if(count>=0)
    {

        document.getElementById(textId).value = count;

        document.getElementById(priceId).value = ( count * price );
    }

}

function placeOrder1()
{

    var price1 =  document.getElementById("price1").value;
    var price2 =  document.getElementById("price2").value;
    var price3 =  document.getElementById("price3").value;
    var price4 =  document.getElementById("price4").value;

    var qt1 = document.getElementById("quantity1").value;
    var qt2 = document.getElementById("quantity2").value;
    var qt3 = document.getElementById("quantity3").value;
    var qt4 = document.getElementById("quantity4").value;

var price = parseInt(price1) + parseInt(price2) + parseInt(price3) + parseInt(price4);

var modal = document.getElementById("myModal");

document.querySelector("#fName").textContent = document.getElementById("firstName").value;

    if (qt1 != "0")
    {
        document.querySelector("#cart1").textContent = "Pure Ceylon Tea 1kg       = " +qt1+ " items at price of $"+price1 ;
    }
    if (qt2 != "0")
    {
        document.querySelector("#cart2").textContent = 'Sigiriya Wall Art "CEYLON"  = ' +qt2+ " items at price of $"+price2  ;
    }
    if (qt3 != "0")
    {
        document.querySelector("#cart3").textContent = "9 Arch Demodara Pendant   = " +qt3+ " items at price of $"+price3 ;
    }
    if (qt4 != "0")
    {
        document.querySelector("#cart4").textContent = "Handmade Wooden Elephant  = " +qt4+ " items at price of $"+price4 ;
    }
    document.querySelector("#totalBill").textContent = "Your Total Bill is $"+price;

modal.style.display = "block";

}

function closeWindow()
{

var modal = document.getElementById("myModal");

modal.style.display = "none";

}

function validateShoppingForm()
{

    var fn = document.forms["shoppingForm"]["firstName"].value;
    var cn = document.forms["shoppingForm"]["contactNumber"].value;
    var ad = document.forms["shoppingForm"]["address"].value;

    var qt1 = document.getElementById("quantity1").value;
    var qt2 = document.getElementById("quantity2").value;
    var qt3 = document.getElementById("quantity3").value;
    var qt4 = document.getElementById("quantity4").value;

    if ( qt1==0 && qt2==0 && qt3==0 && qt4==0 )
    {
        alert("At least one gift item should be selected")
        return false;;
    }

    if (fn == "" || cn == "" || ad == "")
    {
      alert("Mandatory fields must be filled out");
      return false;
    }

    else {

        placeOrder1();
        return false;
    }
}