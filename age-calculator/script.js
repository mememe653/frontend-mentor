const dayInput = document.querySelector(".day input");
const monthInput = document.querySelector(".month input");
const yearInput = document.querySelector(".year input");
const form = document.querySelector("form");

const yearsOutput = document.querySelector("span.years");
const monthsOutput = document.querySelector("span.months");
const daysOutput = document.querySelector("span.days");

const dayFieldRequiredMessage = document.createElement("span");
const invalidDateMessage = document.createElement("span");
const invalidDayMessage = document.createElement("span");
const invalidMonthMessage = document.createElement("span");
const futureDateMessage = document.createElement("span");

dayFieldRequiredMessage.textContent = "This field is required";
invalidDateMessage.textContent = "Must be a valid date";
invalidDayMessage.textContent = "Must be a valid day";
invalidMonthMessage.textContent = "Must be a valid month";
futureDateMessage.textContent = "Must be in the past";

dayFieldRequiredMessage.style.display = "none";
invalidDateMessage.style.display = "none";
invalidDayMessage.style.display = "none";
invalidMonthMessage.style.display = "none";
futureDateMessage.style.display = "none";

const monthFieldRequiredMessage = dayFieldRequiredMessage.cloneNode(true);
const yearFieldRequiredMessage = dayFieldRequiredMessage.cloneNode(true);

dayInput.after(dayFieldRequiredMessage);
monthInput.after(monthFieldRequiredMessage);
yearInput.after(yearFieldRequiredMessage);

dayInput.after(invalidDayMessage);
monthInput.after(invalidMonthMessage);

dayInput.after(invalidDateMessage);
dayInput.after(futureDateMessage);

const dayElements = document.querySelectorAll(".day > *");
const monthElements = document.querySelectorAll(".month > *");
const yearElements = document.querySelectorAll(".year > *");

form.addEventListener("submit", handleSubmit);
dayInput.addEventListener("keyup", handleInvalid);
monthInput.addEventListener("keyup", handleInvalid);
yearInput.addEventListener("keyup", handleInvalid);

function handleSubmit(e) {
  e.preventDefault();

  yearsOutput.textContent = "--";
  monthsOutput.textContent = "--";
  daysOutput.textContent = "--";

  const error = !dayInput.value || !monthInput.value || !yearInput.value ||
                !checkDay() || !checkMonth() || checkInvalidDate() || checkFutureDate();

  if (!dayInput.value) {
    console.log("Empty day field");
    dayElements.forEach(element => element.classList.add("error"));
    dayFieldRequiredMessage.style.display = "";
  }
  if (!monthInput.value) {
    console.log("Empty month field");
    monthElements.forEach(element => element.classList.add("error"));
    monthFieldRequiredMessage.style.display = "";
  }
  if (!yearInput.value) {
    console.log("Empty year field");
    yearElements.forEach(element => element.classList.add("error"));
    yearFieldRequiredMessage.style.display = "";
  }
  if (error) {
    return;
  }

  const dateInput = Date.parse([yearInput.value, monthInput.value, dayInput.value].join(","));
  const age = new Date(Date.now() - dateInput);
  const origin = new Date(1970, 0, 1);

  yearsOutput.textContent = age.getFullYear() - origin.getFullYear();
  monthsOutput.textContent = age.getMonth() - origin.getMonth();
  daysOutput.textContent = age.getDate() - origin.getDate();
}

function handleInvalid() {
  dayElements.forEach(element => element.classList.remove("error"));
  monthElements.forEach(element => element.classList.remove("error"));
  yearElements.forEach(element => element.classList.remove("error"));

  dayFieldRequiredMessage.style.display = "none";
  monthFieldRequiredMessage.style.display = "none";
  yearFieldRequiredMessage.style.display = "none";
  invalidDateMessage.style.display = "none";
  invalidDayMessage.style.display = "none";
  invalidMonthMessage.style.display = "none";
  futureDateMessage.style.display = "none";

  if (dayInput.value && !checkDay()) {
    console.log("Invalid day");
    dayElements.forEach(element => element.classList.add("error"));
    invalidDayMessage.style.display = "";
  }
  if (monthInput.value && !checkMonth()) {
    console.log("Invalid month");
    monthElements.forEach(element => element.classList.add("error"));
    invalidMonthMessage.style.display = "";
  }
  if ((dayInput.value && !checkDay()) || (monthInput.value && !checkMonth())) {
    return;
  }

  if (dayInput.value && monthInput.value && yearInput.value) {
    if (checkInvalidDate()) {
      console.log("Invalid date");
      dayElements.forEach(element => element.classList.add("error"));
      monthElements.forEach(element => element.classList.add("error"));
      yearElements.forEach(element => element.classList.add("error"));
      invalidDateMessage.style.display = "";
    } else if (checkFutureDate()) {
      console.log("Future date");
      dayElements.forEach(element => element.classList.add("error"));
      monthElements.forEach(element => element.classList.add("error"));
      yearElements.forEach(element => element.classList.add("error"));
      futureDateMessage.style.display = "";
    }
  }
}

function checkDay() {
  return +dayInput.value >= 1 && +dayInput.value <= 31;
}

function checkMonth() {
  return +monthInput.value >= 1 && +monthInput.value <= 12;
}

function checkFutureDate() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();

  return (+yearInput.value > currentYear) ||
          (+yearInput.value == currentYear && +monthInput.value > currentMonth) ||
          (+yearInput.value == currentYear && +monthInput.value == currentMonth && +dayInput.value > currentDay);
}

function checkInvalidDate() {
  daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return isNaN(new Date([+yearInput.value, +monthInput.value, +dayInput.value].join("/"))) ||
          +yearInput.value % 4 === 0 ? +monthInput.value === 2 && +dayInput.value > 29 :
                                        +dayInput.value > daysPerMonth[+monthInput.value - 1];
}
