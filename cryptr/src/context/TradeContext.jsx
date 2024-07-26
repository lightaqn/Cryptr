import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const TradeContext = React.createContext();
// console.log(TradeContext());
const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const tradesContract = new ethers.Contract(
    contractAddress,
    signer,
    contractABI
  );

  return tradesContract;
};

export const TradesProvider = ({ children }) => {
  const [linkedAccount, setLinkedAccount] = useState("");
  const [inputData, setInputData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [tradeCount, setTradeCount] = useState(
    localStorage.getItem("tradeCount")
  );
  const [trades, setTrades] = useState([]);

  const handleChange = (e, name) => {
    setInputData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const getAllTrades = async () => {
    try {
      if (ethereum) {
        const tradesContract = getEthereumContract();
        const availableTrades = await tradesContract.getAllTrades();
        const organizedTrades = availableTrades.map((trade) => ({
          addressTo: trade.receiver,
          addressFrom: trade.sender,
          timestamp: new Date(
            trade.timestamp.toNumber() * 1000
          ).toLocaleString(),
          message: trade.message,
          keyword: trade.keyword,
          amount: parseInt(trade.amount._hex) / 10 ** 18,
        }));
        console.log(organizedTrades);
        setTrades(organizedTrades);
      } else {
        console.log("Ethereum not avilable");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const confirmIfWalletIsLinked = async () => {
    try {
      if (!ethereum) return alert("Please install wallet");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setLinkedAccount(accounts[0]);

        getAllTrades();
      } else {
        console.log("No accounts linked");
      }
      console.log(accounts);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfTradesExists = async () => {
    try {
      if (ethereum) {
        const tradesContract = getEthereumContract();
        const linkedTradeCount = await tradesContract.getTradeCount();

        window.localStorage.setItem("tradeCount", linkedTradeCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object detected");
    }
  };

  const linkWallet = async () => {
    try {
      if (!ethereum) return alert("Please install wallet");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setLinkedAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No Ethereum object detected.");
    }
  };

  const sendTrade = async () => {
    try {
      if (!ethereum) return alert("Please install Wallet");
      const { addressTo, amount, message, keyword } = inputData;
      const tradesContract = getEthereumContract();
      const parsedEthAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: linkedAccount,
            to: addressTo,
            gas: "0x5208", // Currency GWEI
            value: parsedEthAmount._hex, // Amount in ETH
          },
        ],
      });
      const tradeHash = await tradesContract.pushToBlockchain(
        addressTo,
        parsedEthAmount,
        keyword,
        message
      );

      setIsLoading(true);
      console.log(`Loading - ${tradeHash.hash}`);
      await tradeHash.wait();
      console.log(`Success - ${tradeHash.hash}`);
      setIsLoading(false);

      const tradesCount = await tradesContract.getTradeCount();
      setTradeCount(tradesCount.toNumber());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    confirmIfWalletIsLinked();
    checkIfTradesExists();
  }, [tradeCount]);

  return (
    <TradeContext.Provider
      value={{
        linkWallet,
        linkedAccount,
        inputData,
        setInputData,
        handleChange,
        sendTrade,
        tradeCount,
        isLoading,
        trades,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};
