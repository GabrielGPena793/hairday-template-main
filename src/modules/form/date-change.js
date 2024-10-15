import { scheduleDays } from "../schedules/load";

const selectDate = document.querySelector("#date");

selectDate.onchange = () => {
  scheduleDays();
};
