
var numberBoxes = document.getElementById("boxes");
var btn = document.getElementById("start");
var myDiv = [];
var mainDiv = document.getElementById("parent");
var rand;
btn.addEventListener("click", start);


function start() {


    if (numberBoxes.value <= 0 || numberBoxes.value > 100) {
        alert("please enter number beween 1 and 100");
        window.location.reload();
    }
    else {
        document.getElementsByClassName("form")[0].style.display = "none";

        for (i = 0; i < numberBoxes.value; i++) {
            myDiv[i] = document.createElement('div');
            myDiv[i].classList.add("divBox");
            myDiv[i].setAttribute("index", i);
            myDiv[i].addEventListener("click", onClick);
            mainDiv.appendChild(myDiv[i]);
        }
        rand = Math.floor(Math.random() * myDiv.length);
        this.removeEventListener('click', start);
    }

};

var count = 0;
function onClick() {

    this.classList.toggle("rotate");
    this.removeEventListener("click", onClick);
    count++;

    if (this.getAttribute("index") == rand) {
        var element = document.createElement('p');
        element.textContent = "Contains a hidden gift";
        element.classList.add('rotate');
        this.appendChild(element);


        setTimeout(function () {
            alert("success after " + count + " times!");
            reload();
        }, 500);


        for (i = 0; i < numberBoxes.value; i++) {
            myDiv[i].removeEventListener("click", onClick);
        }
    }


    function reload() {
        window.location.reload();
    }


}
