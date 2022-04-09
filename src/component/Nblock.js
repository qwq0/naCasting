import { Nvalue } from "./value/Nvalue.js";

/**
 * 代码块
 * 通常是一对大括号包括的区域
 */
export class Nblock
{
    /**
     * 内容
     * 代码块中的逻辑等
     * @type {Array}
     */
    cont = [];

    /**
     * 上层代码块
     * 如果没有为null
     * @type {Nblock}
     */
    parent = null;

    /**
     * 函数祖先块
     * 若不在函数中为null
     * 嵌套函数中为最近函数块
     * @type {Nblock}
     */
    functionAncestor = null;

    /**
     * 标识符池
     * 包括变量 函数 类
     * 不包含上级中的标识符或全局标识符
     * @type {Map<string, Nvalue>}
     */
    idMap = new Map();

    /**
     * 获取一个标识符
     * 遍历上层块
     * 不存在标识符则返回null
     * @param {string} key
     */
    getIdentifier(key)
    {
        if (this.idMap.has(key))
            return this.idMap.get(key);
        else if (this.parent)
            return this.parent.getIdentifier(key);
        else
            return null;
    }

    /**
     * 设置一个标识符
     * 若标识符在当前层存在则返回false
     * 成功则返回true
     * @param {string} key
     * @param {Nvalue} value
     */
    setIdentifier(key, value)
    {
        if (!this.idMap.has(key))
        {
            this.idMap.set(key, value);
            return true;
        }
        else
            return false;
    }

}