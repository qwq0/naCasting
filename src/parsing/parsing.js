import { Nblock } from "../component/Nblock.js";
import { Nsentence } from "../component/Nsentence.js";
import { cutUpString } from "./cutUpString.js";
import { getKW, kw } from "./keywordTable.js";
import { isBlank, wordFlow } from "./wordFlow.js";



/**
 * 处理一个句
 * @param {wordFlow} e 
 * @returns {Nsentence}
 */
function ctSentence(e)
{
    var ret = new Nsentence();

    return ret;
}

/**
 * 处理参数定义
 * 包括函数参数 var let const
 * @param {wordFlow} e 
 */
function ctDefineParam(e)
{

}

/**
 * 处理一个代码块内的内容
 * 不包括外侧大括号
 * @param {wordFlow} e 
 * @returns {Nblock}
 */
function ctBlock(e)
{
    var ret = new Nblock();

    /** 异步函数修饰 */
    var functionAsyncFlag = false;
    /** 导出修饰 */
    var exportFlag = false;
    /** 默认导出修饰 */
    var defaultExportFlag = false;

    while (e.unfinished())
    {
        var now = e.now();
        if (isBlank(now)) // 跳过空白
            continue;
        if (now == "{") // 子代码块
        {
            now(ctBlock(e.getBlock()));
            continue;
        }
        switch (getKW(now)) // 获取关键字
        {
            // 直接决定功能的关键字
            case kw.var: // 定义变量
            case kw.let: // 定义变量
                break;
            case kw.function: // 定义函数
                break;
            case kw.class: // 定义类
                break;
            case kw.const: // 定义常量
                break;
            case kw.if: // if判断
                break;
            case kw.else: // else判断
                break;
            case kw.switch: // switch分支
                break;
            case kw.while: // while循环
                break;
            case kw.for: // for循环
                break;
            case kw.do: // do-while循环
                break;
            case kw.import: // 定义导入
                break;
            // 修饰的关键字
            case kw.export: // 定义导出
                exportFlag = true;
                break;
            case kw.default: // 默认导出
                defaultExportFlag = true;
                break;
            case kw.async: // 异步函数
                functionAsyncFlag = true;
                break;
            // 处理时出错
            case kw.$error:
                throw "[nac]ctBlock error";
            // 其他关键字或非关键字
            default:
                ctSentence(e);
                break;
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