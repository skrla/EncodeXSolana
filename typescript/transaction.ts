import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET");

console.log(`My public key is: ${keypair.publicKey.toString()}.`);

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const reciver = new PublicKey("AMFcUX4rAFWK9xebL7k7gBem3ZgnLyBD18v85ViY3eNQ");

const transaction = new Transaction();

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: keypair.publicKey,
  toPubkey: reciver,
  lamports: LAMPORTS_PER_SOL * 0.5,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  keypair,
]);

console.log(
  `💸 Finished! Sent ${LAMPORTS_PER_SOL * 0.5} to the address ${reciver}. `
);
console.log(`Transaction signature is ${signature}!`);
