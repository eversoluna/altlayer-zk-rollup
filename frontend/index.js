
const { ethers } = require('ethers');

// Interact with the Rollup contract
async function deposit() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = '0xYourContractAddress';
        const abi = [
            "function deposit(uint256 amount) public",
            "function withdraw(uint256 amount) public"
        ];

        const contract = new ethers.Contract(contractAddress, abi, signer);
        const amount = ethers.utils.parseEther('1'); // Example amount
        await contract.deposit(amount);
        console.log('Deposit successful!');
    } else {
        alert('Please install MetaMask');
    }
}

async function withdraw() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = '0xYourContractAddress';
        const abi = [
            "function deposit(uint256 amount) public",
            "function withdraw(uint256 amount) public"
        ];

        const contract = new ethers.Contract(contractAddress, abi, signer);
        const amount = ethers.utils.parseEther('1'); // Example amount
        await contract.withdraw(amount);
        console.log('Withdrawal successful!');
    } else {
        alert('Please install MetaMask');
    }
}
