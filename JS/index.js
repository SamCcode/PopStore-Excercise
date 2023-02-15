let addToCartBtn;
async function generatePopcornData() {
    let popcorns = await fetch("./products.json")
    popcorns = await popcorns.json();
    renderPopcornUi(popcorns)
}

generatePopcornData()
let popcornsContainerEl;
let listOfPopcorns = [];
let listOfAddedPopcorns = [];
function renderPopcornUi(popcorns) {
    popcornsContainerEl = document.querySelector(".popcorn-wrapper")
    popcornsContainerEl.innerHTML = "";
popcorns.forEach(popcorn => {
    popcornsContainerEl.innerHTML += `
    <article onmouseleave="afterHover()" class="popcorn-card">
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
        <aside class ="addtocartwrapper">
        <p class="addtocart" id="addtext">ADD TO CART?</p>
        </aside>
    </article>
    `
    listOfPopcorns.push(popcorn)
});

addToCartBtn = document.querySelectorAll(".addtocartwrapper");

addEventListenerToAddToCartBtn()
}


let itemsCounter = 0;

function addEventListenerToAddToCartBtn() {
    for (let i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].addEventListener("click", (clicked) =>{
            addToCartBtn[i].innerHTML = `
            <p class="addtocart">SURE?</p>
            <button id="yesbtn">HELL YEAH</button>
            <button id="nobtn">HELL NAH</button>
            `
            let yesBtn = document.querySelector("#yesbtn");
            let noBtn = document.querySelector("#nobtn");
            let cartNum = document.querySelector(".cart-num");
            yesBtn.addEventListener("click", ()=> {
                listOfAddedPopcorns.push(listOfPopcorns[i])
                localStorage.setItem("addedPopcorn", JSON.stringify(listOfAddedPopcorns));
                addToCartBtn[i].style.display = "none";
                itemsCounter++;
                cartNum.innerHTML = itemsCounter;
            })
            noBtn.addEventListener("click", ()=> {
                addToCartBtn[i].style.display = "none";
            })
            })
            
        }

}

function afterHover() {
    generatePopcornData()
}
