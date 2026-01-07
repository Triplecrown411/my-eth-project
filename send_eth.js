import { Wallet, ethers } from "ethers";

// Replace with your RPC endpoint (e.g., Alchemy, Infura)
const provider = new 
ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/;

// Load private key from environment variable
const privateKey = process.env.MY_WALLET_PRIVATE_KEY;
const wallet = new Wallet(privateKey, provider);

// Destination wallet address
const toAddress = "0xYOUR_OTHER_WALLET_ADDRESS";

async function sendETH() {
    try {
        const balance = await wallet.getBalance();
        console.log("Current balance:", ethers.formatEther(balance), 
"ETH");

        if (balance > 0) {
            const tx = await wallet.sendTransaction({
                to: toAddress,
                value: balance
            });
            console.log("Transaction sent! Hash:", tx.hash);
        } else {
            console.log("No ETH to send.");
        }
    } catch (err) {
        console.error("Error:", err);
    }
}

sendETH();

