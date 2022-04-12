import { isAmong } from "../util/forEach.js";

/**
 * 片段是否是空白字符
 * @param {string} s
 */
export function isBlank(s)
{
    return isAmong(s, "\n", "\t", "\r", " ");
}

/**
 * 词流
 */
export class wordFlow
{
    /**
     * 流中的词数组
     * @type {Array}
     */
    arr = null;

    /**
     * 开始位置
     * @type {number}
     */
    firstInd = 0;
    /**
     * 当前读到的位置
     * @type {number}
     */
    nowInd = 0;
    /**
     * 结束位置
     * @type {number}
     */
    endInd = 0;


    /**
     * @param {Array} arr 词流数组
     * @param {number} now 开始位置
     * @param {number} nowEnd 结束位置
     */
    constructor(arr, now, nowEnd)
    {
        this.arr = arr;
        this.nowInd = this.firstInd = now;
        this.endInd = nowEnd;
    }

    /**
     * 当流未读完返回true
     * 读完返回false
     */
    unfinished()
    {
        return this.nowInd < this.endInd;
    }

    /**
     * 弹出并获取一个词
     * 流结束则为null
     * @returns {any}
     */
    pop()
    {
        if (this.unfinished())
            return this.arr[this.nowInd++];
        else
            return null;
    }

    /**
     * 获取当前的词
     * 流结束则为null
     * @returns {any}
     */
    now()
    {
        if (this.unfinished())
            return this.arr[this.nowInd];
        else
            return null;
    }

    /**
     * 跳转当前位置
     * @param {number} ind
     */
    jump(ind)
    {
        this.nowInd += ind;
    }

    /**
     * 循环弹出并获取第一个非空白
     * 返回的词不会被弹出
     * 之前的空白词将弹出
     * @returns {any}
     */
    nonBlank()
    {
        while (this.unfinished())
        {
            var now = this.now();
            if (isBlank(now))
                this.pop();
            else
                return now;
        }
        return null;
    }

    /**
     * 获取距离当前词指定偏移的词
     * 正数向后偏移 负数向前偏移
     * 超出范围则为null
     * @param {number} indOffset
     */
    offset(indOffset)
    {
        var ind = this.nowInd + indOffset;
        if (this.firstInd <= ind && ind < this.endInd)
            return this.arr[ind];
        else
            return null;
    }

    /**
     * 遍历
     * 从开始到结束位置
     * 不影响当前读到的位置
     * @param {function(any,number):any} callback
     */
    forEach(callback)
    {
        for (var i = this.firstInd; i < this.endInd; i++)
        {
            callback(this.arr[i], i);
        }
    }

    /**
     * 获取一个子流
     * 下标从开始位置开始
     * @param {number} [l]
     * @param {number} [r]
     */
    slice(l = 0, r = this.endInd - this.firstInd)
    {
        return new wordFlow(this.arr, this.firstInd + l, this.firstInd + r);
    }
    /**
     * 获取一个子流
     * 下标从当前位置开始
     * @param {number} [l]
     * @param {number} [r]
     */
    sliceFromNow(l = 0, r = this.endInd - this.nowInd)
    {
        return new wordFlow(this.arr, this.nowInd + l, this.nowInd + r);
    }

    /**
     * 获取一个代码块的词流
     * 当前位置应当为一个左大括号
     * 获取到的词流不包括收尾大括号
     * @returns {wordFlow}
     */
    getBlock()
    {
        if (this.now() != "{")
            throw "[nac]wordFlow: getBlock error";
        this.pop();
        var oldInd = this.nowInd; // 开始位置 不包括大括号
        var num = 1; // 大括号计数
        while (this.unfinished())
        {
            var now = this.pop();
            if (now == "{")
                num++;
            else if (now == "}")
                num--;
            if (num <= 0) // 代码块结束
                return this.slice(oldInd, this.nowInd - 1);
        }
        throw "[nac]wordFlow: getBlock error";
    }
}