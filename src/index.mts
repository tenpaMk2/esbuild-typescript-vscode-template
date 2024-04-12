// Node packages can be used when `--format` is `cjs` .
import { program } from "commander";

import { ai, chika, kaguya, miko } from "./lib.mts";

// `commander` samples. You can check by launching `node dist/index.js --help` .
program.option("--first").option("-s, --separator <char>");
program.parse();

// Sample cdodes.
console.log(kaguya);
console.log(chika);
console.log(miko);
console.log(ai);

// // Top-level await can be used when `--format` is `esm` .
// await (async () => {
//   console.log(`async!!`);
// })
