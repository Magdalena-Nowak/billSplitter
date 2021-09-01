const billValue = document.querySelector(".bill-value").value;
const personNr = document.querySelector(".person-nr").value;
const options = document.querySelectorAll("option");
const warning = document.querySelector(".result__warning");
const resultAmount = document.querySelector(".result__amount");
const resultParagraph = document.querySelector(".result__text");
const button = document.querySelector(".btn");
let optionValue;

options.forEach((option) => {
  option.addEventListener("click", () => {
    optionValue = option.getAttribute("value");
  });
});

const calculations = () => {
  if (billValue > 0 && personNr > 0 && optionValue) {
    warning.classList.remove("active");
    const result = ((billValue + (billValue * optionValue)) / personNr);
    resultParagraph.classList.add("active");
    resultAmount.textContent = result;
  } else {
    warning.classList.add("active");
  }
};

button.addEventListener("click", calculations);
