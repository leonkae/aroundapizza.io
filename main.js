// $(".button"),
//   click(function () {
//     let size = document.getElementById("size").value;
//     let toppins = document.getElementById("toppings").value;
//     let crust = document.getElementById("crust").value;
//   });

$('.button').click(function(){
    let size = $(".size option:selected").val();
    let toppings = $(".toppings options:selected").val();
    let crust = $(".crust option:selected").val();
    let total = parseInt(size)+ parseInt(toppings)+parseInt(crust);
    let order = 1;
    let grandTotal = 0

    $
})