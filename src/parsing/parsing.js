import { Nblock } from "../component/Nblock.js";
import { cutUpString } from "./cutUpString.js";

/**
 * 解析js字符串到代码树
 * @param {string} str
 * @returns {Nblock}
 */
export function parsing(str)
{
    var scraps = cutUpString(str);
    var ret = new Nblock();
    
    return ret;
}