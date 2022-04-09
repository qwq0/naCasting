/**
 * unicode对应值
 */
export const cc = {
    "n0": 48,
    "n1": 49,
    "n2": 50,
    "n3": 51,
    "n4": 52,
    "n5": 53,
    "n6": 54,
    "n7": 55,
    "n8": 56,
    "n9": 57,
    "A": 65,
    "B": 66,
    "C": 67,
    "D": 68,
    "E": 69,
    "F": 70,
    "G": 71,
    "H": 72,
    "I": 73,
    "J": 74,
    "K": 75,
    "L": 76,
    "M": 77,
    "N": 78,
    "O": 79,
    "P": 80,
    "Q": 81,
    "R": 82,
    "S": 83,
    "T": 84,
    "U": 85,
    "V": 86,
    "W": 87,
    "X": 88,
    "Y": 89,
    "Z": 90,
    "_": 95,
    "a": 97,
    "b": 98,
    "c": 99,
    "d": 100,
    "e": 101,
    "f": 102,
    "g": 103,
    "h": 104,
    "i": 105,
    "j": 106,
    "k": 107,
    "l": 108,
    "m": 109,
    "n": 110,
    "o": 111,
    "p": 112,
    "q": 113,
    "r": 114,
    "s": 115,
    "t": 116,
    "u": 117,
    "v": 118,
    "w": 119,
    "x": 120,
    "y": 121,
    "z": 122,
};

/**
 * 判断一个值是否在一个区间中
 * 包括左和右
 * @param {number} v
 * @param {number} l
 * @param {number} r
 * @returns {boolean}
 */
export function cover(v, l, r)
{
    return (v >= l && v <= r);
}