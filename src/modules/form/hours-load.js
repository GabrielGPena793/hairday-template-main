import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours";

export function hoursLoad({ date }) {
  console.log(date);

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    return {
      hour,
      available: !isHourPast,
    };
  });

  console.log(opening);
}
