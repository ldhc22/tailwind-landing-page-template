import Countdown from "../components/countdown/Countdown";

const deadline = "12 Jun 2022 00:30:00 GMT";

function SaveTheDate(props) {
  return (
    <section className="relative" ref={props.dateRef}>
      <div className="h-screen bg-danse-green-100">
        <div className="py-20 md:py-28 flex flex-col items-center">
          <svg
            className="w-24 h-24  p-1 -mt-1 mb-2"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <rect
                className="fill-current text-blue-600"
                width="64"
                height="64"
                rx="32"
              />
              <g strokeWidth="2" transform="translate(19.429 20.571)">
                <circle
                  className="stroke-current text-white"
                  strokeLinecap="square"
                  cx="12.571"
                  cy="12.571"
                  r="1.143"
                />
                <path
                  className="stroke-current text-white"
                  d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696"
                />
                <path
                  className="stroke-current text-blue-300"
                  d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835"
                />
              </g>
            </g>
          </svg>

          <div className="text-center ">
            <h2 className="h2 mb-4">Fecha del evento</h2>
            <p className="text-2xl">
              El evento será el sábado 11 de junio de 2022
            </p>
            <p className="text-2xl">Solo faltan:</p>
            <Countdown deadline={deadline} />
          </div>
        </div>
      </div>
    </section>
  );
}
export default SaveTheDate;
