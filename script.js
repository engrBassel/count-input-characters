let input = document.querySelector("input"),
  progress = document.querySelector(".progress"),
  count = document.querySelector(".count");

console.log(input.maxLength);

count.textContent =
  input.maxLength < 10 ? `0${input.maxLength}` : input.maxLength;

input.addEventListener("input", function () {
  count.textContent =
    this.maxLength - this.value.length < 10
      ? `0${this.maxLength - this.value.length}`
      : this.maxLength - this.value.length;
  if (count.textContent == 0) {
    count.classList.add("zero");
    progress.classList.add("zero");
  } else {
    count.classList.remove("zero");
    progress.classList.remove("zero");
  }

  progress.style.width = `${(this.value.length / this.maxLength) * 100}%`;
});

window.addEventListener("load", function () {
  input.value = "";
});
