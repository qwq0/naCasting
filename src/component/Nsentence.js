/**
 * 句的类型
 * @enum {number}
 */
export const sentenceType = {
    /**
     * 未定义的特殊错误
     */
    "$error": -1,
    /**
     * Not A SentenceType
     */
    "$nast": 0,
    /** 获取对象成员 */
    "s.": 101,
    /** 获取数组成员 */
    "s[]": 101,
    /** 函数执行 */
    "s()": 103,
    /** (单目)创建类实例 */
    "new": 105,
    /** (单目)逻辑取反 */
    "u!": 106,
    /** (单目)按位取反 */
    "u~": 107,
    /** (单目)负号 */
    "u-": 108,
    /** (单目)正号 */
    "u+": 109,
    /** (单目)先自增 */
    "u++": 110,
    /** (单目)先自减 */
    "u--": 111,
    /** (单目)后自增 */
    "ul++": 110,
    /** (单目)后自减 */
    "ul--": 111,
    /** 乘 */
    "b*": 112,
    /** 除 */
    "b/": 113,
    /** 取模 */
    "%": 114,
    /** 加 */
    "+": 115,
    /** 减 */
    "-": 116,
    /** 左移(按位移动) */
    "<<": 117,
    /** 右移(按位移动) */
    ">>": 118,
    /** 无符号又移(按位移动) */
    ">>>": 119,
    /** 小于 */
    "<": 120,
    /** 小于等于 */
    "<=": 121,
    /** 大于 */
    ">": 122,
    /** 大于等于 */
    ">=": 123,
    /** 等于 */
    "==": 124,
    /** 不等于 */
    "!=": 125,
    /** 严格等于 */
    "===": 126,
    /** 严格不等于 */
    "!==": 127,
    /** 按位与 */
    "&": 128,
    /** 按位异或 */
    "^": 129,
    /** 按位或 */
    "|": 130,
    /** 逻辑与 */
    "&&": 131,
    /** 逻辑或 */
    "||": 132,
    /** 三目判断计算 */
    "t?:": 133,
    /** 赋值 */
    "=": 134,
    /** 加赋值 */
    "+=": 135,
    /** 减赋值 */
    "-=": 136,
    /** 乘赋值 */
    "*=": 137,
    /** 除赋值 */
    "/=": 138,
    /** 取模赋值 */
    "%=": 139,
    /** 左移(按位移动)赋值 */
    "<<=": 140,
    /** 右移(按位移动)赋值 */
    ">>=": 141,
    /** 无符号又移(按位移动)赋值 */
    ">>>=": 142,
    /** 按位与赋值 */
    "&=": 143,
    /** 按位异或赋值 */
    "^=": 144,
    /** 按位或赋值 */
    "|=": 145,
    /** 逗号(从左到右计算后返回最后值) */
    ",": 146,
    /** (单目)获取类型 */
    "typeof": 147,
    /** (单目)无返回值(返回值永远为undefined) */
    "void": 148,
    /** (单目)删除成员 */
    "delete": 149,
    /** 判断第左参数是否为右参数的成员索引 */
    "in":150,
    /** 判断左参数是否是右参数(对象)类型(类的实例或子类实例) */
    "instanceof":151
};
/*
来自mdn文档:

下表列出了描述符的优先级,从最高到最低

Operator type   	        Individual operators
member              	    . []
call / create instance	    () new
negation/increment	        ! ~ - + ++ -- typeof void delete
multiply/divide	            * / %
addition/subtraction	    + -
bitwise shift	            << >> >>>
relational	                < <= > >= in instanceof
equality	                == != === !==
bitwise-and	                &
bitwise-xor	                ^
bitwise-or	                |
logical-and	                &&
logical-or	                ||
conditional	                ?:
assignment	                = += -= *= /= %= <<= >>= >>>= &= ^= |=
comma	                    ,
*/

/**
 * 句(表达式)的抽象类
 * 函数执行 表达式计算
 */
export class Nsentence
{
    /**
     * 表达式的参数列表
     * 对于表达式计算 为运算符的参数
     * 对于函数执行 第一个值(i=0)为函数的量 之后的值作为函数的参数
     */
    param = [];

    /**
     * 操作类型
     * @type {}
     */
    type = null;
}