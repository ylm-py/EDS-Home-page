// ======= < show and hide header in mobile view > ========
let navButton = document.querySelector(".nav-menu-icon");
let navLinks = document.querySelector(".nav-links-container");
let [l1, l2, l3] = document.querySelectorAll(".burger-line")


function openNav(){
    navLinks.classList.toggle("appear");
    document.body.classList.toggle("open-nav");

    let opened = navLinks.classList.contains("appear");
    if(opened){
        l2.style.display = "none";
        l1.style.transform = "rotate(45deg)";
        l3.style.transform = "rotate(-45deg)";
    } else {
        l2.style.display = "block";
        l1.style.transform = "rotate(0deg)";
        l3.style.transform = "rotate(0deg)";
    }
}
navButton.addEventListener("click", openNav);


let quotes = document.querySelectorAll(".quote_container")
let quoteStyle = (q, i) => {
    q.style.position = "absolute";
    q.style.top = "5rem";
    q.style.zIndex = `${i}`;
    q.style.transform = `translateY(${i * 15}px) translateZ(-${i * 15}px)`
}
quotes.forEach(function(ele, index){
    if(index != 0){
        quoteStyle(ele, index)
    }
    else{
        ele.style.zIndex = quotes.length
    }
})