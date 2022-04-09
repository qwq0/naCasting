import { Nblock } from "../component/Nblock.js";
import { Nsentence } from "../component/Nsentence.js";
import { cutUpString } from "./cutUpString.js";
import { getKW, kw } from "./keywordTable.js";
import { wordFlow } from "./wordFlow.js";



/**
 * 处理一个代码块内的内容
 * 不包括外侧大括号
 * @param {wordFlow} e 
 * @returns {Nblock}
 */
function ctBlock(e)
{
    var ret = new Nblock();
    while(e.unfinished())
    {
        var now = e.now();
        switch(getKW(now)) // 获取关键字
        {
            // 直接决定功能的关键字
            case kw.var: // 定义变量
            case kw.let: // 定义变量
                break;
            case kw.const: // 定义常量
                break;
            case kw.if: // 判断
                break;
            case kw.else: // 判断
                break;
            case kw.while: // 定义while循环
                break;
            case kw.for: // 定义for循环
                break;
            // 修饰的关键字

            // 非关键字
            case kw.$nak:
                break;
            default:
                throw "[nac]ctBlock error";
        }
    }
    return ret;
}

/**
 * 解析js字符串到代码树
 * @param {string} srcStr
 * @returns {Nblock}
 */
export function parsing(srcStr)
{
    var scraps = cutUpString(srcStr);
    return ctBlock(new wordFlow(scraps, 0, scraps.length));
}