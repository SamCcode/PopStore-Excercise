
async function generatePopcornData() {
    let popcorns = await fetch("./products.json")
    popcorns = await popcorns.json();
    renderPopcornUi(popcorns)
}

generatePopcornData()

let listOfPopcorns = [];
let listOfAddedPopcorns = [];
function renderPopcornUi(popcorns) {
let popcornsContainerEl = document.querySelector(".popcorn-wrapper")
popcorns.forEach(popcorn => {
    popcornsContainerEl.innerHTML += `
    <article class="popcorn-card">
        <img src ="/img/${popcorn.img}" alt= "bag of popcorn" class="popcorn-card__img">
        <div class="popcorn-card__text">
        <h2 class="popcorn-card__name">${popcorn.name}</h2>
        <p class="popcorn-card__description">${popcorn.desc}</p>
        </div>
        <div class="popcorn-card__price">
        <p class="popcorn-card__price">Price per hecto: <span>${popcorn.pricePerHekto}:-</span></p>
        <p class="popcorn-card__serialnumber">Serial number:${popcorn.SerialNumber}</p>
        </div>
        <div class="popcorn-card__characteristics">
        <p>Size: ${popcorn.characteristics.size}</p>
        <p>Flavour: ${popcorn.characteristics.flavour}</p>
        <p>Hardness: ${popcorn.characteristics.hardness}</p>
        </div>
        <p class="addtocart">ADD TO CART</p>
    </article>
    `
    listOfPopcorns.push(popcorn)
});

let popcornCard = document.querySelectorAll(".popcorn-card");
for (let i = 0; i < popcornCard.length; i++) {
    popcornCard[i].addEventListener("click", (clicked) =>{
        listOfAddedPopcorns.push(listOfPopcorns[i])
        localStorage.setItem("addedPopcorn", JSON.stringify(listOfAddedPopcorns));
    })}
}
