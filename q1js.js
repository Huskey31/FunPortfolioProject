// this section is fetching dropdown menu,buy now button,and close button with id i provided in html section
const dropDownOption = document.getElementById("dropDown-option");
const buyBut = document.getElementById("buyBut");
const closeBut = document.getElementById("button-close");
// this section is fetching prices of colors, extra features with id i provided in html section
const priceColor = document.getElementById("priceColor");
const priceExtra1 = document.getElementById("priceExtra1");
const priceExtra2 = document.getElementById("priceExtra2");
const totalPriceLabel = document.getElementById("totalPrice");
// this will allow an event to happen when you click on buy botton
buyBut.addEventListener("click", () => {
    dropDownOption.classList.add("show");
    updateTotal();
});
// this will allow an event to happen when you click on close button
closeBut.addEventListener("click", (e) => {
    e.preventDefault();
    dropDownOption.classList.remove("show");
});
// this will allow an event to happen when you click on preferred color and will update price 
priceColor.addEventListener("change", updateTotal);
priceExtra1.addEventListener("change", updateTotal);
priceExtra2.addEventListener("change", updateTotal);
// this section fetches values from html section and calculates total price  
function updateTotal() {
const colorPrice = parseFloat(priceColor.value);  
 let extraPrice = 0;
    if (priceExtra1.checked) {
        extraPrice = parseFloat(priceExtra1.value);
    } else if (priceExtra2.checked) {
        extraPrice = parseFloat(priceExtra2.value);
    }
    const total = colorPrice + extraPrice;
    totalPriceLabel.innerHTML = "Total Price: R" + total.toFixed(2);
}
 

        const button = document.getElementById("button");
        const myaudio = document.getElementById("myaudio")
        button.addEventListener("click", function() {
            if(myaudio.paused){
                myaudio.play();
                button.textContent="Pause";
            }else{
                myaudio.pause();
                button.textContent = "Play";
            }
        })
 