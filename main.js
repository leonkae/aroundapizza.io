let size = document.getElementById("size");
let toppings = document.getElementById("toppings");
let crust = document.getElementById("crust");
let poisons = document.getElementById("poisons");
let total = document.getElementById("totalone");
let totalArray = [];
let table = document.getElementById("table-content");
let ordernum = document.getElementById("order-num");

let sizeone = document.getElementById("sizeone");
let toppingsone = document.getElementById("toppingsone");
let crustone = document.getElementById("crustone");
let poisonsone = document.getElementById("poisonsone");

let form = document.getElementById("form-wrapper");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let sizeValue = size.value;
  let toppingsValue = toppings.value;
  let crustValue = crust.value;
  let poisonsValue = poisons.value;
  let totaltwo =
    parseInt(sizeValue) +
    parseInt(toppingsValue) +
    parseInt(crustValue) +
    parseInt(poisonsValue);
  totalArray.push(totaltwo);
  let tallarr = totalArray.reduce((sum, num) => sum + num);

  ordernum.textContent = totalArray.length;
  sizeone.textContent = sizeValue;
  toppingsone.textContent = toppingsValue;
  crustone.textContent = crustValue;
  poisonsone.textContent = poisonsValue;
  total.textContent = tallarr;
//   let newRow = document.createElement("tr"); 
//   let newtd = newRow.appendChild("td")
//   newtd.textContent = sizeValue


  table.classList.remove("hide");
});

let onemore = document.getElementById("one-more");
onemore.addEventListener("click", function () {
  table.classList.add("hide");
});
// $(document).ready(function () {
//   $(".order-btn").click(function () {
//     let size = $(".size option:selected").val();
//     let toppings = $(".toppings option:selected").val();
//     let crust = $(".crust option:selected").val();
//     let poisons = $(".poisons option:selected").val();
//     let total = 0
//       parseInt(size) + parseInt(toppings) + parseInt(crust) + parseInt(poisons);
//     let order = 1;
//     let grandTotal = 0;

//    $("table").show();

//   });

// });

//  let size = $(".size option:selected").val();
//  let toppings = $(".toppings option:selected").val();
//  let crust = $(".crust option:selected").val();
//  let poisons = $(".poisons option:selected").val();
//  let total =
//    parseInt(size) + parseInt(toppings) + parseInt(crust) + parseInt(poisons);
//  let order = 1;
//  let grandTotal = 0;

//  console.log (grandTotal)

//  document.addEventListener("click", function(){
//     let size = $(".size option:selected").val();
//     let toppings = $(".toppings option:selected").val();
//     let crust = $(".crust option:selected").val();
//     let poisons = $(".poisons option:selected").val();
//     let total =
//       parseInt(size) + parseInt(toppings) + parseInt(crust) + parseInt(poisons);
//     let order = 1;
//     let grandTotal = 0;
//  })
