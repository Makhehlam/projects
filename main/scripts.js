const burgerBtn = document.querySelector("#burgerBtn");
const mobileMenu = document.querySelector("#mobileMenu");
const closeBtn = document.querySelector("#closeBtn");
const mobileMenuLi = document.querySelectorAll("#mobileMenu li");
const services =document.querySelectorAll("#aromatherapy, #lymph, #massage, #mindfulness, #hotStone, #essentialOils");
const serviceDetails = document.querySelectorAll("#aromatherapyDetails, #lymphDetails, #massageDetails, #mindfulnessDetails, #hotStoneDetails, #essentialOilsDetails ")
// const aromatherapyDetails = document.querySelector("#aromatherapyDetails");
// const lymph = document.querySelector("#lymph");
// const 

burgerBtn.addEventListener("click", () =>{
    if (mobileMenu.classList.contains("hidden")){
        mobileMenu.classList.remove("hidden"); 
        burgerBtn.classList.add("hidden");
    }
})
closeBtn.addEventListener("click", ()=>{
    if(burgerBtn.classList.contains("hidden")){
        burgerBtn.classList.remove("hidden");
        mobileMenu.classList.add("hidden");
    }
})
for(let i = 0; i< mobileMenuLi.length; i++){
    mobileMenuLi[i].addEventListener("click", ()=>{
        mobileMenu.classList.add("hidden");
        burgerBtn.classList.remove("hidden");    
    })
}
for(let i = 0; i< services.length; i++){
    services[i].addEventListener("click", ()=>{
        if(serviceDetails[i].classList.contains("hidden")){
            serviceDetails[i].classList.remove("hidden");
        }
        else{
            serviceDetails[i].classList.add("hidden");
        }
        
    })
}

