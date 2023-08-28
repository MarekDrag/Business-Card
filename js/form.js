const reasonCheckboxes = document.querySelectorAll('input[class="powody"]');
const reasonInput = document.querySelector('input[name="Powody"]');
const reasonLabel = document.querySelector('span[id="powody"]');

const statusCheckboxes = document.querySelectorAll('input[class="status"]');
const statusInput = document.querySelector('input[name="Status"]');
const statusLabel = document.querySelector('span[id="status"]');

function isCheckboxSelectedEmpty(checkboxes) {
  const checkedCheckboxes = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  );

  return checkedCheckboxes.length === 0;
}

function formatInputValue(checkboxes) {
  const checkedCheckboxes = Array.from(checkboxes).filter(
    (checkbox) => checkbox.checked
  );

  if (checkedCheckboxes.length === 0) return "";

  const formattedInputValue = checkedCheckboxes
    .map((checkbox) => checkbox.value)
    .join(", ");

  return formattedInputValue;
}

document.getElementById("form").addEventListener("submit", function (event) {
  if (isCheckboxSelectedEmpty(reasonCheckboxes)) {
    reasonLabel.scrollIntoView();
    event.preventDefault();
  }
  if (isCheckboxSelectedEmpty(statusCheckboxes)) {
    statusLabel.scrollIntoView();
    event.preventDefault();
  }
});

reasonCheckboxes.forEach((item) => {
  item.addEventListener("change", function () {
    const inputValue = formatInputValue(reasonCheckboxes);
    reasonInput.value = inputValue;
    console.log(inputValue);
  });
});

statusCheckboxes.forEach((item) => {
  item.addEventListener("change", function () {
    const inputValue = formatInputValue(statusCheckboxes);
    statusInput.value = inputValue;
    console.log(inputValue);
  });
});

console.log(window.location);
