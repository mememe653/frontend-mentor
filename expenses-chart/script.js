const data = [
  {
    day: "mon",
    amount: 17.45
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 25.48
  }
];

const barChart = document.querySelector(".bar-chart");

const mon = document.querySelector(".mon");
const tue = document.querySelector(".tue");
const wed = document.querySelector(".wed");
const thu = document.querySelector(".thu");
const fri = document.querySelector(".fri");
const sat = document.querySelector(".sat");
const sun = document.querySelector(".sun");

const monBar = document.createElement("div");
const tueBar = document.createElement("div");
const wedBar = document.createElement("div");
const thuBar = document.createElement("div");
const friBar = document.createElement("div");
const satBar = document.createElement("div");
const sunBar = document.createElement("div");

monBar.classList.add("bar");
tueBar.classList.add("bar");
wedBar.classList.add("bar");
thuBar.classList.add("bar");
friBar.classList.add("bar");
satBar.classList.add("bar");
sunBar.classList.add("bar");

const maxExpense = Math.max(...data.map(obj => obj.amount));
const barChartHeight = barChart.clientHeight;

monBar.style.height = `${data.find(obj => obj.day === "mon").amount / maxExpense * parseInt(barChartHeight)}px`;
tueBar.style.height = `${data.find(obj => obj.day === "tue").amount / maxExpense * parseInt(barChartHeight)}px`;
wedBar.style.height = `${data.find(obj => obj.day === "wed").amount / maxExpense * parseInt(barChartHeight)}px`;
thuBar.style.height = `${data.find(obj => obj.day === "thu").amount / maxExpense * parseInt(barChartHeight)}px`;
friBar.style.height = `${data.find(obj => obj.day === "fri").amount / maxExpense * parseInt(barChartHeight)}px`;
satBar.style.height = `${data.find(obj => obj.day === "sat").amount / maxExpense * parseInt(barChartHeight)}px`;
sunBar.style.height = `${data.find(obj => obj.day === "sun").amount / maxExpense * parseInt(barChartHeight)}px`;

mon.prepend(monBar);
tue.prepend(tueBar);
wed.prepend(wedBar);
thu.prepend(thuBar);
fri.prepend(friBar);
sat.prepend(satBar);
sun.prepend(sunBar);


const monExpense = document.createElement("div");
const tueExpense = document.createElement("div");
const wedExpense = document.createElement("div");
const thuExpense = document.createElement("div");
const friExpense = document.createElement("div");
const satExpense = document.createElement("div");
const sunExpense = document.createElement("div");

monExpense.textContent = `\$${data.find(obj => obj.day === "mon").amount}`;
tueExpense.textContent = `\$${data.find(obj => obj.day === "tue").amount}`;
wedExpense.textContent = `\$${data.find(obj => obj.day === "wed").amount}`;
thuExpense.textContent = `\$${data.find(obj => obj.day === "thu").amount}`;
friExpense.textContent = `\$${data.find(obj => obj.day === "fri").amount}`;
satExpense.textContent = `\$${data.find(obj => obj.day === "sat").amount}`;
sunExpense.textContent = `\$${data.find(obj => obj.day === "sun").amount}`;

monExpense.classList.add("expense");
tueExpense.classList.add("expense");
wedExpense.classList.add("expense");
thuExpense.classList.add("expense");
friExpense.classList.add("expense");
satExpense.classList.add("expense");
sunExpense.classList.add("expense");

mon.prepend(monExpense);
tue.prepend(tueExpense);
wed.prepend(wedExpense);
thu.prepend(thuExpense);
fri.prepend(friExpense);
sat.prepend(satExpense);
sun.prepend(sunExpense);

const maxHeight = Math.max(...[monBar,
                              tueBar,
                              wedBar,
                              thuBar,
                              friBar,
                              satBar,
                              sunBar]
                              .map(bar => parseInt(bar.clientHeight)));

monBar.style.height = `${data.find(obj => obj.day === "mon").amount / maxExpense * parseInt(maxHeight)}px`;
tueBar.style.height = `${data.find(obj => obj.day === "tue").amount / maxExpense * parseInt(maxHeight)}px`;
wedBar.style.height = `${data.find(obj => obj.day === "wed").amount / maxExpense * parseInt(maxHeight)}px`;
thuBar.style.height = `${data.find(obj => obj.day === "thu").amount / maxExpense * parseInt(maxHeight)}px`;
friBar.style.height = `${data.find(obj => obj.day === "fri").amount / maxExpense * parseInt(maxHeight)}px`;
satBar.style.height = `${data.find(obj => obj.day === "sat").amount / maxExpense * parseInt(maxHeight)}px`;
sunBar.style.height = `${data.find(obj => obj.day === "sun").amount / maxExpense * parseInt(maxHeight)}px`;

monBar.addEventListener("mouseover", () => toggleShowExpense(monExpense));
tueBar.addEventListener("mouseover", () => toggleShowExpense(tueExpense));
wedBar.addEventListener("mouseover", () => toggleShowExpense(wedExpense));
thuBar.addEventListener("mouseover", () => toggleShowExpense(thuExpense));
friBar.addEventListener("mouseover", () => toggleShowExpense(friExpense));
satBar.addEventListener("mouseover", () => toggleShowExpense(satExpense));
sunBar.addEventListener("mouseover", () => toggleShowExpense(sunExpense));

monBar.addEventListener("mouseout", () => toggleShowExpense(monExpense));
tueBar.addEventListener("mouseout", () => toggleShowExpense(tueExpense));
wedBar.addEventListener("mouseout", () => toggleShowExpense(wedExpense));
thuBar.addEventListener("mouseout", () => toggleShowExpense(thuExpense));
friBar.addEventListener("mouseout", () => toggleShowExpense(friExpense));
satBar.addEventListener("mouseout", () => toggleShowExpense(satExpense));
sunBar.addEventListener("mouseout", () => toggleShowExpense(sunExpense));

monBar.addEventListener("click", handleClick);
tueBar.addEventListener("click", handleClick);
wedBar.addEventListener("click", handleClick);
thuBar.addEventListener("click", handleClick);
friBar.addEventListener("click", handleClick);
satBar.addEventListener("click", handleClick);
sunBar.addEventListener("click", handleClick);

function handleClick() {
  [monBar,
  tueBar,
  wedBar,
  thuBar,
  friBar,
  satBar,
  sunBar].forEach(bar => bar.classList.remove("active"));

  this.classList.add("active");
}

function toggleShowExpense(expenseElement) {
  if (window.getComputedStyle(expenseElement).visibility === "hidden") {
    expenseElement.style.visibility = "visible";
  } else {
    expenseElement.style.visibility = "hidden";
  }
}
