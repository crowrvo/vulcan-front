export const compareValue = (vl1: MaybeRef<string | number>, vl2: MaybeRef<string | number>, sortAsc: MaybeRef<boolean>) => {
    if (toValue(vl1) < toValue(vl2)) {
        return toValue(sortAsc) ? -1 : 1;
    }
    if (toValue(vl1) > toValue(vl2)) {
        return toValue(sortAsc) ? 1 : -1;
    }
    return 0;
}