import { hoursLoad } from "../form/hours-load";

const selectDate = document.querySelector("#date");
export function scheduleDays() {
  const date = selectDate.value;

  hoursLoad({ date });
}
