console.log('BMI');
document.querySelector(".bmiBtn").addEventListener("click", function () {
    this.classList.add("pop-up");

    setTimeout(() => {
        this.classList.remove("pop-up");
    }, 200);
});

document.querySelector(".reset").addEventListener("click", function () {
    this.classList.add("pop-up");

    setTimeout(() => {
        this.classList.remove("pop-up");
    }, 200);
});
const height = document.querySelector('.inputHeight');
const weight = document.querySelector('.inputWeight');
const calculateBtn = document.querySelector('.bmiBtn');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.result');
result.classList.remove("result");
let bmi;
let timeout;
calculateBtn.addEventListener('click', _ => {
    result.classList.remove("under", "obesse", "over", "normal");
    if (isNaN(parseFloat(height.value)) && !isNaN(parseFloat(weight.value))) {
        result.style = "";
        result.innerText = 'Provide a valid height';
        result.style.color = 'white';
    } else if (!isNaN(parseFloat(height.value)) && isNaN(parseFloat(weight.value))) {
        result.style = "";
        result.innerText = 'Provide a valid weight';
        result.style.color = 'white';
    } else if (isNaN(parseFloat(height.value)) && isNaN(parseFloat(weight.value))) {
        result.style = "";
        result.innerText = 'Provide a valid height and weight';
        result.style.color = 'white';
    } else {
        bmi = parseFloat(weight.value) / ((parseFloat(height.value) / 100) * (parseFloat(height.value) / 100));

        if (bmi < 18.5) {
            result.classList.remove("under", "obesse", "over", "normal");
            result.innerText = `Underweight: ${bmi.toFixed(2)}`;
            result.style.backgroundColor = "gold";
            result.style.color = 'black';
            result.style.borderRadius = "5px";
            result.classList.add("under");
            setTimeout(() => {
                result.classList.remove("under");
                result.style.width = "auto";
                result.style.height = "35px";
                result.style.backgroundColor = "gold";
                result.style.display = "flex";
                result.style.alignItems = "center";
                result.style.justifyContent = "center";
                result.style.padding = "5px 10px";
                result.style.color = "black";
                result.style.borderRadius = "5px";
            }, 2000);
        } else if (bmi >= 18.5 && bmi < 25) {
            result.classList.remove("under", "obesse", "over", "normal");
            result.style.width = "auto";
            result.style.height = "35px";
            result.style.backgroundColor = "limegreen";
            result.style.display = "flex";
            result.style.alignItems = "center";
            result.style.justifyContent = "center";
            result.style.padding = "5px 10px";
            result.innerText = `Normal: ${bmi.toFixed(2)}`;
            result.style.color = 'white';
            result.style.borderRadius = "5px";

            result.classList.add("normal");
            setTimeout(() => {
                result.classList.remove("normal");
            }, 4000);
        } else if (bmi >= 25 && bmi < 40) {
            result.classList.remove("under", "obesse", "normal", "over"); // Remove previous classes
            result.classList.add("over"); // Add the animation class
            result.innerText = `Overweight: ${bmi.toFixed(2)}`;
            result.style.width = "auto";
            result.style.height = "35px";
            result.style.backgroundColor = "crimson";
            result.style.display = "flex";
            result.style.alignItems = "center";
            result.style.justifyContent = "center";
            result.style.padding = "5px 10px";
            result.style.color = "white";
            result.style.borderRadius = "5px";

            setTimeout(() => {
                result.classList.remove("over");

            }, 2000);
        } else {
            result.classList.remove("under", "obesse", "over", "normal");
            result.classList.add("obesse");
            result.innerText = `Obese 🍔: ${bmi.toFixed(2)}`;
            result.style.width = "auto";
            result.style.height = "35px";
            result.style.backgroundColor = "black";
            result.style.display = "flex";
            result.style.alignItems = "center";
            result.style.justifyContent = "center";
            result.style.padding = "5px 10px";
            result.style.color = 'white';
            result.style.borderRadius = "5px";
            //po 2 sekundziu stabdo animacija
            timeout = setTimeout(stop, 2000);
            function stop() {
                result.classList.remove("obesse");
                result.style.color = 'crimson';
            }
        }
        resetBtn.style.display = 'block';
    }
});

resetBtn.addEventListener('click', _ => {
    result.style = '';
    height.value = '';
    weight.value = '';
    result.innerText = 'Provide a valid height and weight';
    result.style.color = 'white';
    resetBtn.style.display = 'none';
    result.classList.remove("under", "obesse", "over", "normal");
    clearTimeout(timeout);
});

console.log(parseFloat(height.value));
console.log(parseFloat(weight.value));
console.log("pabaiga")