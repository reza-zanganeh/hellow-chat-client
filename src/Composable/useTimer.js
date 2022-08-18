import { ref } from "vue";

export default function () {
  const styledTime = ref();
  const getPersianNumber = (number) => {
    return new Intl.NumberFormat("fa-IR").format(number).padStart(2, "۰");
  };

  const timer = (time) => {
    let amountOfTimer = time * 60;
    let pasedTime = 0;
    const intervalTimer = setInterval(() => {
      const minute = Math.floor(amountOfTimer / 60);
      const secend = amountOfTimer % 60;
      styledTime.value = `${getPersianNumber(secend)} : ${getPersianNumber(
        minute
      )}`;
      if (pasedTime >= amountOfTimer) {
        clearInterval(intervalTimer);
      }
      amountOfTimer--;
    }, 1000);
  };

  return {
    styledTime,
    timer,
  };
}
