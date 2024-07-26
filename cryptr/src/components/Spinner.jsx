import Spinnerbg from "../assets/Spinnerbg.jpg";

const Spinner = () => {
  return (
    <div class="flex flex-col justify-center items-center py-3 bg-[url('../assets/Spinnerbg.jpg')]">
      <div class="animate-spin rounded-full border-b-2 border-amber-500">
        <img class="h-20 w-20 rounded-full" src={Spinnerbg} alt="" />
      </div>
    </div>
  );
};

export default Spinner;
