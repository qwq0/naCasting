/**
 * 关键字
 */
export const kwMap = new Map();
/**
 * 关键字列表
 * @readonly
 * @type {Array<string>}
 */
const keywords = [
    "break",
    "case",
    "catch",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "else",
    "export",
    "extends",
    "finally",
    "for",
    "function",
    "if",
    "import",
    "in",
    "instanceof",
    "new",
    "return",
    "super",
    "switch",
    "this",
    "throw",
    "try",
    "typeof",
    "var",
    "void",
    "while",
    "with",
    "yield",
    "enum",
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "await"
];
keywords.forEach(o => kwMap.set(o, true));

/**
 * 关键字的枚举类型
 * 与keywords数组同步
 * 注意: 此处存在冗余
 * @enum {number}
 */
export const kw = {
    /**
     * 未定义的特殊错误
     */
    "$error": -1,
    /**
     * 非关键字
     * Not A Keyword
     */
    "$nak": 0,
    /**
     * 跳出循环
     * 跳出switch
     */
    "break": 1,
    /** switch的标记 */
    "case": 2,
    /** try的捕获 */
    "catch": 3,
    /** 定义类 */
    "class": 4,
    /** 定义常量 */
    "const": 5,
    /** 跳过这次循环 */
    "continue": 6,
    /** 调试功能 */
    "debugger": 7,
    /**
     * switch默认标签 
     * export默认导出
     */
    "default": 8,
    /** 删除对象中的属性 */
    "delete": 9,
    /** do-while循环开头 */
    "do": 10,
    /** if的否则 */
    "else": 11,
    /** 导出 */
    "export": 12,
    /** class中扩展(继承) */
    "extends": 13,
    /** try的最终 */
    "finally": 14,
    /** for循环 */
    "for": 15,
    /** 定义函数 */
    "function": 16,
    /** if判断 */
    "if": 17,
    /** 导入 */
    "import": 18,
    /** (运算符)判断第左参数是否为右参数的成员索引 */
    "in": 19,
    /** (运算符)判断左参数是否是右参数(对象)类型(类的实例或子类实例) */
    "instanceof": 20,
    /** (运算符)创建类实例 */
    "new": 21,
    /** 返回 */
    "return": 22,
    /** 超类(父类) */
    "super": 23,
    /** switch分支 */
    "switch": 24,
    /** 此对象(类) */
    "this": 25,
    /** 抛出(错误) */
    "throw": 26,
    /** 尝试运行 */
    "try": 27,
    /** (运算符)获取类型 */
    "typeof": 28,
    /** 定义变量(作用域为最近函数) */
    "var": 29,
    /** (运算符)无返回值(返回值永远为undefined) */
    "void": 30,
    /** while循环 */
    "while": 31,
    /** (导致性能下降)将给定表达式添加到求值时使用的作用域链中 */
    "with": 32,
    /** 生成器函数中断 */
    "yield": 33,
    /** (未使用的保留字)枚举类 */
    "enum": 34,
    /** (未使用的保留字)实现接口 */
    "implements": 35,
    /** (未使用的保留字)接口 */
    "interface": 36,
    /** 定义变量(作用域为最近块) */
    "let": 37,
    /** (未使用的保留字)包 */
    "package": 38,
    /** (未使用的保留字)私有 */
    "private": 39,
    /** (未使用的保留字)保护 */
    "protected": 40,
    /** (未使用的保留字)公开 */
    "public": 41,
    /** 静态(修饰函数) */
    "static": 42,
    /** 等待异步操作(仅在async函数中使用) */
    "await": 43,
    /** 异步函数(修饰函数) */
    "async": 44
};

/**
 * 返回该字符串关键字对应的kw值
 * @param {string} str
 * @returns {kw}
 */
export function getKW(str)
{
    if (kwMap.get(str))
        return kw[str];
    else
        return null;
}
