import dayjs from "dayjs";

const form = document.querySelector("form");
const selectDate = document.querySelector("#date");

// data atual e minima para o input
const today = dayjs().format("YYYY-MM-DD");
selectDate.value = today;
selectDate.min = today;

form.onsubmit = function (event) {
  event.preventDefault();
  console.log("submit");
};
