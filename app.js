const options = document.querySelector("#tipPercentage");
const warning = document.querySelector(".result__warning");
const resultAmount = document.querySelector(".result__amount");
const resultParagraph = document.querySelector(".result__text");
const button = document.querySelector(".btn");

const calculations = () => {
  const billValue = document.querySelector(".bill-value").value;
  const personNr = document.querySelector(".person-nr").value;
  const optionValue = options.value;
  if (billValue > 0 && personNr > 0 && optionValue) {
    const result = (parseFloat(billValue) + (parseFloat(billValue) * optionValue) )/ parseFloat(personNr);
    warning.classList.remove("active");
    resultParagraph.classList.add("active");
    resultAmount.textContent = result.toFixed(2);
  } else {
    warning.classList.add("active");
    resultParagraph.classList.remove('active');
  }
};

button.addEventListener("click", calculations);
