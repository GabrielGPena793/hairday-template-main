import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new";

const form = document.querySelector("form");
const clientName = document.querySelector("#client");
const selectDate = document.querySelector("#date");

// data atual e minima para o input
const today = dayjs().format("YYYY-MM-DD");
selectDate.value = today;
selectDate.min = today;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente.");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione um horário.");
    }

    const [hour] = hourSelected.innerText.split(":");

    const when = dayjs(selectDate.value).add(hour, "hour");

    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
