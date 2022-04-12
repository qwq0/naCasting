import { cc, cover } from "../util/charCode.js";
import { isAmong } from "../util/forEach.js";
import { ot, otFirst } from "./operatorTable.js";
import { isBlank } from "./wordFlow.js";

/**
 * 分解字符串 至最小单位(标识符,符号,值)
 * @param {string} str
 */
export function cutUpString(str)
{
    var ret = [];
    var j = 0;

    /**
     * 获取一个标识符
     * 不判断是否合法
     * 将设置j到结尾(不包括j)
     * @param {number} ind
     * @returns {string}
     */
    function getIdentifier(ind)
    {
        for (var i = ind; i < str.length; i++)
        {
            var charC = str.charCodeAt(i);
            var charS = str[i];
            if (!(cover(charC, cc.A, cc.Z) || cover(charC, cc.a, cc.z) || cover(charC, cc.n0, cc.n9) || charS == "_"))
                return str.slice(ind, j = i);
        }
        throw "[nac]cutUpString: getIdentifier error";
    }
    /**
     * 获取一个符号(运算符)
     * 将设置j到结尾(不包括j)
     * @param {number} ind
     * @returns {string}
     */
    function getOperator(ind)
    {
        var ret = "";
        for (var i = ind; i < str.length; i++)
        {
            if (!ot.get(str.slice(ind, i + 1)))
            {
                if (i == ind)
                    throw "[nac]cutUpString: Unprocessable operator";
                j = i;
                return ret;
            }
            ret = str.slice(ind, i + 1);
        }
        throw "[nac]cutUpString: getOperator error";
    }
    /**
     * 获取一个数字
     * 不判断是否合法
     * 将设置j到结尾(不包括j)
     * @param {number} ind
     * @returns {number}
     */
    function getNumber(ind)
    {
        for (var i = ind; i < str.length; i++)
        {
            var charC = str.charCodeAt(i);
            var charS = str[i];
            if (i == ind && charS == "-")
                continue;
            if (!(cover(charC, cc.n0, cc.n9) || charS == "."))
            {
                var ret = Number(str.slice(ind, i));
                if (Number.isNaN(ret))
                    throw "[nac]cutUpString: getNumber error (NaN)";
                j = i;
                return ret;
            }
        }
        throw "[nac]cutUpString: getNumber error";
    }
    /**
     * 获取一个字符串
     * 将设置j到结尾(不包括j)
     * @param {number} ind
     * @returns {string}
     */
    function getString(ind)
    {
        var b = str[ind];
        for (var i = ind + 1; i < str.length; i++)
        {
            var charS = str[i];
            if (charS == "\\")
                continue;
            if (charS == b)
                return str.slice(ind, j = i + 1);
        }
        throw "[nac]cutUpString: getNumber error";
    }
    /**
     * 跳过一段空白字符
     * 将设置j到结尾(不包括j)
     * @param {number} ind
     * @returns {boolean} 是否包含\n
     */
    function skipWhitespace(ind)
    {
        var incN = false;
        for (var i = ind; i < str.length; i++)
        {
            if (str[i] == "\n")
                incN = true;
            if (!isBlank(str[i]))
            {
                j = i;
                return incN;
            }
        }
        j = str.length;
        return incN;
    }

    var i = 0;
    while (i < str.length)
    {
        /**
         * 当前字符
         * @type {string}
         */
        let charS = str[i];
        /**
         * 当前字符码
         * @type {number}
         */
        let charC = str.charCodeAt(i);
        if (cover(charC, cc.A, cc.Z) || cover(charC, cc.a, cc.z) || charS == "_") // 标识符和关键字
        {
            ret.push(getIdentifier(i));
            i = j;
        }
        else if (cover(charC, cc.n0, cc.n9) || // 数字
            (charS == "." && cover(str.charCodeAt(i + 1), cc.n0, cc.n9)) || // 点开头的数字
            (charS == "-" && cover(str.charCodeAt(i + 1), cc.n0, cc.n9)) || // 负数
            (charS == "-" && str[i + 1] == "." && cover(str.charCodeAt(i + 2), cc.n0, cc.n9))) // 点开头的负数
        {
            ret.push(getNumber(i));
            i = j;
        }
        else if (charS == "\"" || charS == "\'") // 字符串
        {
            ret.push(getString(i));
            i = j;
        }
        else if (otFirst.get(charS)) // 运算符
        {
            ret.push(getOperator(i));
            i = j;
        }
        else if (isAmong(charS, "{", "}", ";")) // 符号
        {
            ret.push(charS);
            i++;
        }
        else if (isBlank(charS)) // 跳过字符
        {
            if (skipWhitespace(i))
                ret.push("\n");
            i = j;
        }
        else
        {
            console.log(charS);
            throw "[nac]cutUpString: Unprocessable character found";
        }
    }

    return ret;
}