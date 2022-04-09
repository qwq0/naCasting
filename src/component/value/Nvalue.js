/**
 * 值的类型
 * @enum {number}
 */
export const valueType = {
    /**
     * Not A ValueType
     */
    "$navt": 0,
    "undefined": 1,
    "number": 2,
    "boolean": 3,
    "string": 4,
};

/**
 * 值的抽象类
 * 常量 变量 量的类型
 */
export class Nvalue
{
    /**
     * @type {valueType}
     */
    type;
}