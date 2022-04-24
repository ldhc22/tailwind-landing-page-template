import { useForm } from "react-hook-form";

function Rsvp(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section ref={props.rsvpRef}>
      <div className="h-screen bg-danse-green-300 flex flex-col items-center py-20 md:py-28">
        <div className="text-center w-full md:w-3/4">
          <h1 className="h1 text-gray-900 py-4">Confirmación de asistencia</h1>
          <p>
            Por favor, déjanos saber si nos acompañarás al evento y quiénes
            vendrán contigo
          </p>
        </div>
        <div className="w-full md:w-3/4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              {...register("name", { required: true, maxLength: 50 })}
            />
            {errors.name && (
              <span className="block text-red-500 font-bold">
                Este campo es requerido
              </span>
            )}
            <label>Menú</label>
            <select {...register("menu", { required: true })}>
              <option value="adult">Adulto</option>
              <option value="kid">Infantil</option>
            </select>
            {errors.menu && <span>Este campo es requerido</span>}
            <label>Alergias</label>
            <input {...register("allergies", { maxLength: 150 })} />
            <input type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
}
export default Rsvp;
