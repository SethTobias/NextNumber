function nextNumber() {
  let input = document.querySelector(".inputNumber").value;
  console.log(input);
  preNum = input - 1;
  document.querySelector(
    ".previousNum"
  ).innerText = ` Previous Number: ${preNum} `;
  document.querySelector(".num").innerText = ` Current Number: ${input} `;
  nextNum = parseInt(input) + 1;
  document.querySelector(".nextNum").innerText = ` Next Number: ${nextNum} `;
}
numberOut = document.querySelector(".inputNumber");
numberOut.addEventListener("change", () => nextNumber());
