import { scheduleGetByDay } from "../../services/schedule-get-by-day";
import { hoursLoad } from "../form/hours-load";
import { scheduleShow } from "./show";

const selectDate = document.querySelector("#date");
export async function scheduleDays() {
  const date = selectDate.value;

  const dailySchedules = await scheduleGetByDay({ date });

  scheduleShow({ dailySchedules });

  hoursLoad({ date });
}
