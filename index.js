
function slider() { 
    var slider = document.getElementById('sliderOne').value;
    if(slider === "1"){
        document.getElementById('theImage').src = '../images/tshirt.jpg';
        document.getElementById('colorName').innerText = "black"
        document.getElementById('colorIndecator').value = "black"

    }
    if(slider === "2"){
        document.getElementById('colorName').innerText = "pink"
        document.getElementById('theImage').src = '../images/pinktshirt.jpg';
        document.getElementById('colorIndecator').value = "pink"

    }
    if(slider === "3"){
        document.getElementById('colorName').innerText = "blue"
        document.getElementById('theImage').src = '../images/blueTshirt.jpg';
        document.getElementById('colorIndecator').value = "blue"
    }
}
function text_check() {
    var textCheck = document.getElementById('textCheck');
    var text = document.getElementById('text');
    if(textCheck.checked){
        text.removeAttribute("readonly");
        text.classList.remove('notReady');
    }
    else{
        text.value="";
        text.setAttribute("readonly", "readonly");
        text.classList.add('notReady');
    }
}
function image_check() {
    var imageCheck = document.getElementById('imageCheck');
    var image = document.getElementById('image');
    if(imageCheck.checked){
        image.removeAttribute("readonly");
        image.classList.remove('notReady');
    }
    else{
        image.value="";
        image.setAttribute("readonly", "readonly");
        image.classList.add('notReady');
    }
}
