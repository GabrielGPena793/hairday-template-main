export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((hour) => {
    hour.onclick = () => {
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      hour.classList.add("hour-selected");
    };
  });
}
