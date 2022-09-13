// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IERC20.sol";

contract Protocol {
    uint256 public number;

    IERC20 private _erc20;

    constructor(address _erc20Address){
        _erc20 = IERC20(_erc20Address);
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }
}
