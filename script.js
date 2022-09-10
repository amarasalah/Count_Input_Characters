let input = document.getElementById("inputEl");
let charCount = document.getElementById("charcount");
let line = document.getElementById("line");
let maxLength = input.getAttribute("maxlength");


charCount.innerHTML = maxLength;

input.oninput = function () {
    charCount.innerHTML =  maxLength - this.value.length
    charCount.innerHTML == 0 ? charCount.classList.add("end"): charCount.classList.remove("end");
    line.style.width = `${(this.value.length * 100) / maxLength }%`;
};
