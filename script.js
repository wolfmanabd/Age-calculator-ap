const inputDay = document.querySelectorAll("#input-day");
const inputMonth = document.querySelectorAll("#input-month");
const inputYear = document.querySelectorAll("#input-year");
const allInput = document.querySelectorAll(".input");
const submitButton = document.querySelectorAll('.submit-button');
const titles = document.querySelectorAll('.title');
const resultSpans = document.querySelectorAll('.res-span');
const dayError = document.querySelectorAll('.day-error');
const monthError = document.querySelectorAll('.month-error');
const yearError = document.querySelectorAll('.year-error');
const dayResult = document.querySelectorAll('.day-span');
const monthResult = document.querySelectorAll('.month-span');
const yearResult = document.querySelectorAll('.year-span');


submitButton.addEventListener('click', e => {
    let day = inputDay.value.trim();
    let month = inputMonth.value.trim();
    let year = inputYear.value.trim();

    const currentDay = new Date();
    let userDate = new Date(`${month}-${day}-${year}`);

    let totalDays = Math.floor((currentDay - userDate) / (1000 * 60 * 60 * 24));

    let years = Math.floor(totalDays / 365);
    let restYears = totalDays % 365;

    let months = Math.floor(restYears / 30);
    let days = restYears % 30;

    if(((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) || (day < 0 || month < 0 || year < 0) || month == 2 && day > 29) {
        errorFunc();
        dayError.innerText = "Must be a valid date";
        dayError.style.display = "block";
    }else if(day > 31 && month > 12){
        errorFunc();
        invalidDay();
        invalidMonth();
        if (year > new Date().getFullYear()){
            invalidYear();
        }
    }else if (day > 31 && year > new Date().getFullYear()){
        errorFunc();
        invalidDay();
        invalidYear();
        if (month > 12) {
            invalidMonth();
        }
    }else if (month > 12 && year > new Date().getFullYear()){
        errorFunc();
        invalidMonth();
        invalidYear();
        if (day > 31) {
            invalidDay();
        }
    }else if (day > 31) {
        errorFunc();
        invalidDay();
    }else if ( month > 12) {
        errorFunc();
        invalidMonth();
    }else if (year > new Date().getFullYear()){
        errorFunc();
        invalidYear();
    }else if (day > new Date().getDate() && month >= new Date().getMonth() +1 && year >= new Date().getFullYear()){
        errorFunc();
        yearError.innerText = "Must be in the past";
        yearError.style.display = "block";
    }else if (day == "" || month == "" || year == ""){
        errorFunc();
        dayError.innerText = "Fill in all fields";
        dayError.style.display = "block";
    } 
    else{
        dayResult.innerText = days;
        monthResult.innerText = months;
        yearResult.innerText = years;
    }
});

function errorFunc() {
    titles.forEach(title => {
        title.className += "error-title";
    });

    allInput.forEach(input => {
        input.style.border = "solid 1px hsl(0, 100%, 67%)";
    });
}

function invalidDay() {
    dayError.innerText = "Must be a valid day";
    dayError.style.display = "block";
}

function invalidMonth() {
    monthError.innerText = "Must be a valid month";
    monthError.style.display = "block";
}

function invalidYear() {
    yearError.innerText = "Must be a valid year";
    yearError.style.display = "block";
}

function typing() {
    titles.forEach(title => {
        title.classList.remove("error-title");
    });

    allInput.forEach(input => {
        input.style.border = "solid 1px hstl(0, 0%, 86%)";
    });

    resultSpans.forEach(element => {
        element.innerText = "--";
    });

    if (dayError.style.display = "block") {
        dayError.style.display = "none";
    }
    if (monthError.style.display = "block") {
        monthError.style.display = "none";
    }
    if (yearError.style.display = "block") {
        yearError.style.display = "none";
    }
}