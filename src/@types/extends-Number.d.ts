export default {};

declare global {
  interface Number {
    /**
     * 使用去尾法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {String}
     */
    toFloor(num?: number): string;

    /**
     * 使用进一法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {String}
     */
    toCeil(num?: number): string;

    /**
     * 使用四舍五入法法来格式化一个数。
     * @param {Number} num 保留小数位数。
     * @returns {Number}
     */
    toRound(num?: number): string;

    /**
     * 判断一个 Number 是否是奇数。
     * @returns {Boolean}
     */
    isOdd(): boolean;

    /**
     * 判断一个 Number 是否是偶数。
     * @returns {Boolean}
     */
    isEven(): boolean;
  }
}