
const snarkjs = require("snarkjs");
const fs = require('fs');

// Generate proof using the circuit and inputs
async function generateProof() {
    const circuit = await snarkjs.circuits.load('circuit.r1cs');
    const witness = await snarkjs.wtns.calculate(circuit, {
        inputAmount: 1000,
        inputBalance: 5000
    });

    const proof = await snarkjs.groth16.prove(circuit, witness);
    fs.writeFileSync("proof.json", JSON.stringify(proof));
}

generateProof();
