import logo from "../assets/logo.png";
import enigmabanner from "../assets/enigmabanner.jpg";

const Navbar = () => {
  return (
    <div class="h-30 w-100 mt-2 p-6 py-0 mx-auto bg-white rounded-xl flex flex-row items-center space-x-4">
      <div class="shrink-0 flex flex-auto">
        <img class="h-20 w-20" src={logo} alt="" />
        <h1 class="font-bold text-5xl justify-center pt-2 mt-2 px-2 flex-1 cursor-pointer hover:text-amber-900">
          CRYPTR
        </h1>
      </div>
      <div class="shrink-0 flex-auto w-70">
        <ul class="flex flex-row ">
          <li class="flex-auto text-xl font-medium text-black cursor-pointer">
            About us
          </li>
          <li class="flex-auto text-xl font-medium text-black cursor-pointer">
            Services
          </li>
          <li class="flex-auto text-xl font-medium text-black cursor-pointer">
            The Team
          </li>
          <li class="flex-auto text-xl font-medium text-black cursor-pointer">
            Locations
          </li>
        </ul>
      </div>
      <div class="flex flex-row w-50 mx-1">
        <ul class="flex flex-row-reverse items-center justify-center outline-none">
          <button class="flex-1 text-xl bg-zinc-500 rounded-xl font-medium text-white w-24">
            Login
          </button>
        </ul>
        <div class="flex flex-auto items-center w-50 ml-16 justify-end bg-white outline-none hover:object-cover">
          <img
            class="flex object-cover w-40 flex-end outline-none"
            src={enigmabanner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
