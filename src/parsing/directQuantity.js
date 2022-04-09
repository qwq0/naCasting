/**
 * 直接量
 * 例如 true false null undefined
 */
export const dqMap = new Map();

/**
 * 直接量列表
 */
var directQuantity = [
    ["true"],
    ["false"],
    ["null"],
    ["undefined"]
];

directQuantity.forEach(o => dqMap.set(o[0], true));