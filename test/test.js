import { cutUpString } from "../src/parsing/cutUpString.js";
import { readFileSync } from "fs";

console.log(cutUpString(readFileSync("./test/in.js", { encoding: "utf-8" })));

console.log("done");