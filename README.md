
# zk-Rollup Layer 2 Solution

## Overview
This project implements a **zk-Rollup-based Layer 2 scaling solution** for Ethereum. It includes the following components:

## Setup Instructions

1. **Install Dependencies**:
   - Clone this repository to your local machine:
     ```bash
     git clone https://github.com/eversoluna/altlayer-zk-rollup.git
     cd altlayer-zk-rollup
     ```

2. **Install Frontend Dependencies**:
   - Navigate to the `frontend` directory and install the required npm packages:
     ```bash
     cd frontend
     npm install
     ```

3. **Install Backend (Smart Contracts) Dependencies**:
   - Navigate to the project root directory and install Hardhat dependencies:
     ```bash
     cd ..
     npm install
     ```

4. **Set up Environment Variables**:
   - Create a `.env` file in the root directory and add your **Infura** project ID and **Private Key** for deployment:
     ```
     INFURA_PROJECT_ID=your_infura_project_id
     PRIVATE_KEY=your_wallet_private_key
     ```

5. **Set up MetaMask**:
   - Make sure **MetaMask** is installed in your browser, and connect it to an Ethereum testnet (e.g., Rinkeby or Goerli).

## Deployment

1. **Deploy Smart Contracts to Ethereum**:
   - Run the following command to deploy the smart contracts (Rollup, Verifier, and Bridge) to Ethereum testnet or Mainnet:
     ```bash
     npx hardhat run scripts/deploy.js --network rinkeby
     ```
   - You can change `rinkeby` to any other supported network (e.g., `goerli` or `mainnet`).

2. **Deploy zk-Proof Verifier**:
   - Make sure to deploy the **Verifier contract** on Ethereum first before deploying the Rollup contract. The Rollup contract requires the address of the Verifier contract during deployment.

## Frontend Interaction

1. **Start the Frontend**:
   - After deploying the contracts, navigate to the `frontend` directory and run the React app:
     ```bash
     cd frontend
     npm start
     ```
   - Open your browser and visit `http://localhost:3000`.

2. **Interacting with zk-Rollup**:
   - Connect to the application using MetaMask.
   - Deposit funds into the zk-Rollup contract by clicking the "Deposit" button.
   - Withdraw funds back to Ethereum by clicking the "Withdraw" button.

## zk-Proof Generation

1. **Generate Proof**:
   - Navigate to the `zkproof` directory and generate the proof for a transaction:
     ```bash
     node generateProof.js
     ```
   - This will generate a proof (e.g., `proof.json`) that can be submitted to the Rollup contract.

## Testing

- **Unit Tests for Smart Contracts**:
  - Run Hardhat tests to check the functionality of smart contracts:
    ```bash
    npx hardhat test
    ```

## Contributing

1. Fork this repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request to merge changes into the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
