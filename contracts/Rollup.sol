// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

interface IVerifier {
    function verifyProof(bytes memory proof) external returns (bool);
}

contract Rollup {
    address public verifier;
    uint256 public totalDeposits;

    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    event StateUpdated(address indexed submitter, bytes proof);

    mapping(address => uint256) public deposits;

    constructor(address _verifier) {
        verifier = _verifier;
    }

    function deposit(uint256 amount) public {
        deposits[msg.sender] += amount;
        totalDeposits += amount;
        emit Deposited(msg.sender, amount);
    }

    function withdraw(uint256 amount) public {
        require(deposits[msg.sender] >= amount, "Insufficient balance");
        deposits[msg.sender] -= amount;
        totalDeposits -= amount;
        emit Withdrawn(msg.sender, amount);
    }

    function submitProof(bytes memory proof) public {
        require(IVerifier(verifier).verifyProof(proof), "Invalid proof");

        stateUpdateCount++;
        emit StateUpdated(msg.sender, proof);
    }

    uint256 public stateUpdateCount;
}
