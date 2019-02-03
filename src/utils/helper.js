// 数组中移除某个值
export const removeItem = (arr, val) => {
    let index = arr.indexOf(val);
    if (index > -1) {
        arr.splice(index, 1);
    }
};