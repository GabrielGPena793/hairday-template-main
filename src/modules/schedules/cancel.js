import { scheduleCancel } from "../../services/schedule-cancel";
import { scheduleDays } from "./load";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm("Deseja realmente cancelar o agendamento?");

        if (isConfirm) {
          await scheduleCancel({ id });
          scheduleDays();
        }
      }
    }
  });
});
