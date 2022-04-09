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
        this.now = this.firstInd = now;
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
     * 弹出一个词
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
     * @param {number} l 
     * @param {number} r 
     */
    slice(l, r)
    {
        return new wordFlow(this.arr, this.firstInd + l, this.firstInd + r);
    }
}