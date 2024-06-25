import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl,
} from "@solana/web3.js";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET");

console.log(`My public key is: ${keypair.publicKey.toString()}.`);

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`✅ Connected!`);

const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
const balance = await connection.getBalance(address);

console.log(`The balance of the account at ${address} is ${balance} lamports`);

console.log(`✅ Finished!`);

const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);
console.log(`✅ Finished!`);
