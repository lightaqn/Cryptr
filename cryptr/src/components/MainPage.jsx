import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Spinner from "./Spinner.jsx";
import { TradeContext } from "../context/TradeContext.jsx";

import React, { useContext } from "react";

const reusableStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

export const truncateAddress = (address) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

const Input = ({ placeholder, name, value, type, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    value={value}
    step="0.0001"
    onChange={(e) => handleChange(e, name)}
    class="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

export const MainPage = () => {
  const {
    linkWallet,
    linkedAccount,
    sendTrade,
    isLoading,
    inputData,
    handleChange,
  } = useContext(TradeContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, message, keyword } = inputData;

    e.preventDefault();

    if (!addressTo || !amount || !message || !keyword) return;

    sendTrade();
  };

  return (
    <div class="w-full h-full p-7 mx-auto bg-stone-800 shadow-lg flex justify-center items-center space-x-4 border-4 border-l-amber-600">
      <div class="flex mf:flex-row flex-col items-start justify-start w-4/5 border-amber-600">
        <div class="flex flex-1 justify-center flex-col mf:my-5">
          <div class="inline-block">
            <hi class="text-3xl sm:text-5xl items-center justify-center font-medium text-white text-gradient py-1">
              Beam Cryptocurrency
              <br /> anywhere
              <br /> anytime
            </hi>
            <p class="text-left mt-5 font-light text-white text-gradient md:w-9/12 w-11/12 text-base">
              Send and receive your crypto without any hassle at the lowest gas
              fees
              <br />
              around the globe on Cryptr
            </p>

            {!linkedAccount && (
              <button
                type="button"
                onClick={linkWallet}
                class="flex flex-row justify-center items-center my-5 bg-zinc-700 p-3 rounded-full w-3/4 cursor-pointer hover:bg-amber-500"
              >
                <p class=" text-white text-base font-semibold">Link Wallet</p>
              </button>
            )}
          </div>

          <div class="grid sm:grid-cols-4 grid-cols-2 w-full mt-10">
            <div class={`rounded-tl-lg ${reusableStyles}`}>Dependable</div>
            <div class={reusableStyles}>Security</div>
            <div class={reusableStyles}>Rapid</div>
            <div class={`rounded-tr-lg ${reusableStyles}`}>Ethereum</div>
            <div class={`rounded-bl-lg ${reusableStyles}`}>Defi</div>
            <div class={reusableStyles}>Web 3.0</div>
            <div class={reusableStyles}>NFT</div>
            <div class={`rounded-br-lg ${reusableStyles}`}>Blockchain</div>
          </div>
        </div>
        <div class="flex flex-1 flex-col justify-start items-center mx-8 w-full mf:mt-0 mt-10">
          <div class="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 cryptr-card white-glassmorphism">
            <div class="flex justify-between flex-col w-full h-full ">
              <div class="flex justify-between items-start">
                <div class="flex w-10 h-10 rounded-2xl border-2 border-black justify-center items-center">
                  <SiEthereum fontSize={20} color="#0e0c0c" />
                </div>
                <BsInfoCircle fontSize={17} color="#0e0c0c" />
              </div>
              <div>
                <p class="text-black font-light text-sm">
                  {truncateAddress(linkedAccount)}
                </p>
                <p class="text-zinc-900 font-semibold text-lg mt-1">Ethereum</p>
              </div>
            </div>
          </div>
          <div class="p-5 ml-5 my-10 sm:w-85 w-4/5 flex flex-col justify-start items-center red-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />

            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Input Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />

            <div class="h-[2px] w-full bg-gray-600 my-2" />

            {isLoading ? (
              <Spinner />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                class="text-white w-full mt-2 border-[2px] p-2 border-gray-600 rounded-full cursor-pointer"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
