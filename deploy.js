import { ethers } from "ethers";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const artifact = JSON.parse(
  fs.readFileSync("../my-eth-foundry/out/HelloWorld.sol/HelloWorld.json")
);

async function main() {
  const factory = new ethers.ContractFactory(
    artifact.abi,
    artifact.bytecode,
    wallet
  );
  const contract = await factory.deploy();
  console.log("Contract deployed at:", contract.target);
}

main().catch(console.error);

