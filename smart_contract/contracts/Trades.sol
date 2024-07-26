// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract Trades {
    uint256 tradeCount;

    event Send (address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    struct SendStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    SendStruct[] trades;

    function pushToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        tradeCount += 1;
        trades.push(SendStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Send(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTrades() public view returns (SendStruct[] memory) {
        return trades;
    }

    function getTradeCount() public view returns (uint256) {
        return tradeCount;
    }
}

