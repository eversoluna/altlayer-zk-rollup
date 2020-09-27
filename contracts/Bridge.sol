// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

contract Bridge {
    address public owner;
    address public rollupContract;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(address _rollupContract) {
        owner = msg.sender;
        rollupContract = _rollupContract;
    }

    function transferToLayer2(address to, uint256 amount) public onlyOwner {
        // Call the rollup contract to deposit tokens to Layer 2
        (bool success, ) = rollupContract.call(
            abi.encodeWithSignature("deposit(address,uint256)", to, amount)
        );
        require(success, "Deposit to Layer 2 failed");
    }

    function transferToEthereum(address to, uint256 amount) public onlyOwner {
        // Call the rollup contract to withdraw tokens from Layer 2 to Ethereum
        (bool success, ) = rollupContract.call(
            abi.encodeWithSignature("withdraw(address,uint256)", to, amount)
        );
        require(success, "Withdraw from Layer 2 failed");
    }
}
