// variables
const slideBtn = document.getElementById("next-slide");

// listeners
slideBtn.addEventListener("click", function(){
    slide();
});

// copy first element to 4th position
function createElement() {
    // find first slide
    let firstCell = document.getElementsByClassName('slider-cell');
    let currentSlide = firstCell[0];
    let currentSlideId = currentSlide.getAttribute('id');
    let slide = document.getElementById(currentSlideId);
    // create clone
    let slideClone = slide.cloneNode(true);
    // find last slide
    let gallery = document.getElementById('gallery');
    // append clone to last slide
    gallery.insertBefore(slideClone, null);
}
// delete first element

// change slide
function slide() {
    //get curent href == slide number
    let currentSlide = slideBtn.getAttribute("href");
    createElement();

    // delete first element
    // find first slide
    let allCells = document.getElementsByClassName('slider-cell');
    let firstSlide = allCells[0];
    let secondCellId = allCells[2].getAttribute('id');
    let newHref = "#" + secondCellId; 
    slideBtn.setAttribute("href", newHref);

    firstSlide.remove();


}