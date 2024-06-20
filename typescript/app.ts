import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import "dotenv/config";

const keypair = getKeypairFromEnvironment("SECRET");

console.log(`My public key is: ${keypair.publicKey.toString()}.`);


