import generativeart from "../assets/generativeart.gif";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const HeaderCard = ({ color, title, icon, subtitle }) => (
  <div class="flex flex-row justify-start items-center white-glassmorphism p-2 m-1 py-5 my-5 cursor-pointer hover:shadow-xl w-3/4">
    <div
      class={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div class="ml-5 flex flex-col flex-1">
      <h1 class="mt-2 text-white text-lg">{title}</h1>
      <p class="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Header = () => {
  return (
    <div class="h-auto w-100 p-6 mx-auto bg-black rounded-xl shadow-lg flex flex-row items-center space-x-4">
      <div class="shrink-0 flex-1 w-70 h-5/6 z-2">
        <ul class="flex flex-col">
          <li class="flex-auto text-slate-300 text-9xl font-semibold my-5 text-center">
            Cryptr
          </li>
        </ul>
        <ul class="flex flex-col">
          <li class="flex-auto text-2xl font-semibold text-white my-5 mx-5">
            The best wallet in the market for storing all your crypto
            products.Secured with cutting-edge encryption system and real time
            threat detection, Smooth integration across all major platform
          </li>
          <br />
          <div class="flex-auto flex flex-col justify-start items-center my-5">
            <HeaderCard
              color="bg--[#2952E3]"
              title="Security Guaranteed"
              icon={<BsShieldFillCheck fontsize={23} class="text-white" />}
              subtitle="Our products are secured with the highest level of privacy"
            />
            <HeaderCard
              color="bg--[#8945F8]"
              title="Unbeatable Rates"
              icon={<BiSearchAlt fontsize={23} class="text-white" />}
              subtitle="Our products are secured with the highest level of privacy"
            />
            <HeaderCard
              color="bg--[#F84550]"
              title="Lightning-fast transactions"
              icon={<RiHeart2Fill fontsize={23} class="text-white" />}
              subtitle="Our products are secured with the highest level of privacy"
            />
          </div>
        </ul>

        <ul class="flex flex-col">
          <li class="flex-auto bg-slate-200 text-9xl font-semibold text-white my-10 text-center">
            CRYPTR
          </li>
        </ul>
      </div>
      <div class="shrink-0 flex-1 w-1000 h-5/6 mr-0 relative">
        <li class="flex-auto flex-wrap bg-transparent text-2xl font-medium my-5 py-10 h-screen text-slate-300 text-center z-30 absolute inset-0 items-center justify-center white-glassmorphism opacity-0 origin-[33%_75%] transition hover:ease-in hover:opacity-100 duration-1000">
          <p class="text-amber-400 font-semibold text-3xl py-2 items-center justify-center">
            Lorem
          </p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
          praesentium, quibusdam, aliquam voluptates adipisci placeat blanditiis
          quia illo velit et rem maxime? Dolorem expedita pariatur ab ducimus ex
          optio sapiente fugit modi a, delectus minima unde quam aliquid, labore
          obcaecati, quia consectetur. Hic officiis aliquam, vel repudiandae
          quam quos suscipit facere earum sunt id ad dicta repellendus! Dolorum
          est neque suscipit qui enim? Exercitationem natus consequatur vero
          accusamus, beatae dignissimos, velit molestias dicta illo minus,
          similique culpa facere cupiditate quia! Inventore laudantium
          voluptatum odit, tempora, consequuntur, quasi eius exercitationem
          facere incidunt voluptatem ratione numquam tempore beatae architecto
          possimus perspiciatis in!.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.labore obcaecati, quia consectetur.
          <br />
          <p class="text-amber-400 font-semibold text-3xl py-2 items-center justify-center flex-wrap">
            Lorem
          </p>
          Hic officiis aliquam, vel repudiandae quam quos suscipit facere earum
          sunt id ad dicta repellendus! Dolorum est neque suscipit qui enim?
          Exercitationem natus consequatur vero accusamus, beatae dignissimos,
          velit molestias dicta illo minus, similique culpa facere cupiditate
          quia! Inventore laudantium voluptatum odit, tempora, consequuntur,
          quasi eius exercitationem facere incidunt voluptatem ratione numquam
          tempore beatae architecto possimus perspiciatis in!.Lorem ipsum dolor,
          sit amet consectetur adipisicing elit.labore obcaecati, quia
          consectetur. Hic officiis aliquam, vel repudiandae quam quos suscipit
          facere earum sunt id ad dicta repellendus! Dolorum est neque suscipit
          qui enim? Exercitationem natus consequatur vero accusamus, beatae
          dignissimos, velit molestias dicta illo minus, similique culpa facere
          cupiditate quia! Inventore laudantium voluptatum odit, tempora,
          consequuntur, quasi eius exercitationem facere incidunt voluptatem
          ratione numquam tempore beatae architecto possimus perspiciatis
          in!.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </li>

        <img
          class="h-screen w-screen mr-0 items-py8 flex flex-wrap content-center"
          src={generativeart}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
