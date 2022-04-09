import { cover, cc } from "../util/charCode.js";

/**
 * 当传入合法标识符字符串时返回该标识符字符串
 * 否则返回null
 * @param {string} str
 * @returns {string | null}
 */
export function getIdentifier(str)
{
    if (str.length > 0 && str.length < 128) // 长度限制
    {
        var firstCharC = str.charCodeAt(0);
        if (cover(firstCharC, cc.A, cc.Z) || cover(firstCharC, cc.a, cc.z) || str[0] == "_") // 首字符类型限制
        {
            for (var i = 0; i < str.length; i++)
            {
                var charC = str.charCodeAt(i);
                var charS = str[i];
                if (!(cover(charC, cc.A, cc.Z) || cover(charC, cc.a, cc.z) || cover(charC, cc.n0, cc.n9) || charS == "_")) // 字符类型限制
                    return null;
            }
            return str;
        }
        else
            return null;
    }
    else
        return null;
}