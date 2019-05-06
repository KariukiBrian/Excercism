export const solve = (x, y) => {
    if ((typeof(x) !== "number") || (typeof(y) !== "number")) { 
    return null;
    }
    const distToDart = Math.sqrt(x * x + y * y);
    if (distToDart > 10) return 0;
    if (distToDart > 5) return 1;
    if (distToDart > 1) return 5;
    return 10;
}
