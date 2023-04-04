const navBtn = document.querySelector(".nav__menu");
const navBtnClose = document.querySelector(".nav__menu-open")
const itemDropBtn = document.querySelectorAll(".item-drop__link")
// const itemDropdown = document.querySelectorAll(".item__dropdown")

navBtn.addEventListener("click", function () {
    document.querySelector(".nav__bar").style.display = "flex";
})

navBtnClose.addEventListener("click", function () {
    document.querySelector(".nav__bar").style.display = "none";
})

itemDropBtn.forEach(element =>{
    element.addEventListener("click", () => {
        const itemDropdown = element.nextElementSibling;
        if(itemDropdown.style.display === "none"){
            itemDropdown.style.display = "grid"
        }else{
            itemDropdown.style.display = "none"
        }
    });
})