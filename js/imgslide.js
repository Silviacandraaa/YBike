var j=0;
var slides = document.getElementsByClassName("slide");
var bull = document.getElementsByClassName("bullet");

var idx =0;
autoslide();
function autoslide() {
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
        idx++;
        if (idx > slides.length) {
        idx = 1
        }
        slides[idx-1].style.display = "block";
        setTimeout(autoslide, 2000); 
}