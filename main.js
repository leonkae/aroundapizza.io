$(document).ready(function(){
    $('.button-order').click(function(){
        let size = $(".size option:selected").val();
        let toppings = $(".toppings option:selected").val();
        let crust = $(".crust option:selected").val();
        let poisons = $(".poisons option:selected").val()
        let total = parseInt(size) + parseInt(toppings) + parseInt(crust) + parseInt(poisons); 
    })
})

