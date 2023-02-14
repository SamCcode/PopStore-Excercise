let popcorns = JSON.parse(localStorage.getItem("addedPopcorn"));
let popcornWrapperEl = document.querySelector(".added-popcorns-wrapper");
console.log(popcorns);

let listOfTotalPrice =[];
popcorns.forEach(popcorn => {
    popcornWrapperEl.innerHTML += `
    <article class="added-popcorns">
    <img src ="/img/${popcorn.img}" alt= "bag of popcorn" class="added-popcorn__img">
    <div class="added-popcorn__info">
    <h2 class="added-popcorn__name">${popcorn.name}</h2>
    <p class="added-popcorn__price">Price <span>${popcorn.pricePerHekto}:-</span></p>
    <p class="added-popcorn__serialnumber">Serial number:${popcorn.SerialNumber}</p>
    </div>
    </article>
    `
    listOfTotalPrice.push(popcorn.pricePerHekto)
});
let sum = 0;
for (let i = 0; i < listOfTotalPrice.length; i++) {
    sum += listOfTotalPrice[i];
}
console.log(sum);
let totalPrice = document.querySelector(".total-price");
totalPrice.innerHTML ="Total price = " + sum + ":-";
