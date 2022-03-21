let size = document.getElementById("size");
let toppings = document.getElementById("toppings");
let crust = document.getElementById("crust");
let poisons = document.getElementById("poisons");
let total = document.getElementById("totalone");
let totalArray = [];
let table = document.getElementById("table-content");
let ordernum = document.getElementById("order-num");
let delivery = document.getElementById("delivery");
let checkOut = document.getElementById("checkoutbtn");
let checkouttext = document.getElementById("checkouttext");
let location2 = document.getElementById("location")
  console.log(location2);
// console.log(delivery);

let sizeone = document.getElementById("sizeone");
let toppingsone = document.getElementById("toppingsone");
let crustone = document.getElementById("crustone");
let poisonsone = document.getElementById("poisonsone");
let deliveryone = document.getElementById("deliveryone");

let form = document.getElementById("form-wrapper");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkOut.classList.add("hide2");

  checkOut.addEventListener("click", function(){
    let location3 = location2.value

    checkouttext.textContent = `total is ${totaltwo} rider dispatched to ${location3}`
  })
  // let checkOut = document.querySelector(".hide");
  // checkOut.classList.add("hide2")

  let sizeValue = size.value;
  let toppingsValue = toppings.value;
  let crustValue = crust.value;
  let poisonsValue = poisons.value;
  let deliveryValue = delivery.value;
  let totaltwo =
    parseInt(sizeValue) +
    parseInt(toppingsValue) +
    parseInt(crustValue) +
    parseInt(poisonsValue) +
    parseInt(deliveryValue);
  totalArray.push(totaltwo);
  let tallarr = totalArray.reduce((sum, num) => sum + num);

  ordernum.textContent = totalArray.length;
  sizeone.textContent = sizeValue;
  toppingsone.textContent = toppingsValue;
  crustone.textContent = crustValue;
  poisonsone.textContent = poisonsValue;
  deliveryone.textContent = deliveryValue;
  total.textContent = tallarr;

  //   let newRow = document.createElement("tr");
  //   let newtd = newRow.appendChild("td")
  //   newtd.textContent = sizeValue

  table.classList.remove("hide");
});

let onemore = document.getElementById("one-more");
onemore.addEventListener("click", function () {
  table.classList.add("hide");

  // let checkOut = document.getElementById("check-out");
  // checkOut.addEventListener("click", function (){

  // } )
});
