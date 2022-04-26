import { useState, useEffect } from "react";

function Countdown(props) {
  const [clock, setClock] = useState([
    { days: 0, hours: 0, minutes: 0, seconds: 0 },
  ]);

  const useMount = (mount) => {
    useEffect(mount, []);
  };

  const getTimeLeft = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setClock({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setClock({ days, hours, minutes, seconds });
    }
  };
  useMount(() => {
    getTimeLeft(props.deadline);
    setInterval(() => {
      getTimeLeft(props.deadline);
    }, 1000);
  });
  return (
    <div>
      <div>{clock.days} Días</div>
      <div>{clock.hours} Horas</div>
      <div>{clock.minutes} Minutos</div>
      <div>{clock.seconds} Segundos</div>
    </div>
  );
}

export default Countdown;
