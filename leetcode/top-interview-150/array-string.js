/**
 * Top 150 Interview Questions.
 */

/**
 * # 1. Merge Sorted Array
 *
 * [leetcode](https://leetcode.com/problems/merge-sorted-array/description/)
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and
 * two integers m and n, representing the number of elements in nums1 and nums2
 * respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 *
 * The final sorted array should not be returned by the function, but instead be stored
 * inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first
 * m elements denote the elements that should be merged, and the last n elements are set to
 * 0 and should be ignored. nums2 has a length of n.
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = nums1.length - 1;

    while (i >= 0 && j >= 0) {
        const left = nums1[i];
        const right = nums2[j];

        if (left > right) {
            nums1[k] = left;
            i--;
        } else {
            nums1[k] = right;
            j--;
        }

        k--;
    }

    while (k >= 0) {
        if (j < 0) break;

        nums1[k] = nums2[j];
        j--;
        k--;
    }
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// -> [1, 2, 2, 3, 5, 6];

/**
 * # 2. Remove Element
 *
 * [leetcode](https://leetcode.com/problems/remove-element/description/)
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums
 * in-place. The order of the elements may be changed. Then return the number of elements
 * in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get
 * accepted, you need to do the following things:
 *
 * - Change the array nums such that the first k elements of nums contain the elements
 *   which are not equal to val. The remaining elements of nums are not important as well
 *   as the size of nums.
 *
 * - Return k.
 *
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    const v1 = () => {
        // let j = nums.length - 1;
        // let temp;
        // for (let i = nums.length - 1; i >= 0; i--) {
        //     if (nums[i] === val) {
        //         temp = nums[i];
        //         nums[i] = nums[j];
        //         nums[j] = temp;
        //         j--;
        //     }
        // }
        // const k = j + 1;
        // return k;
    };

    const v2 = () => {
        let j = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[j] = nums[i];
                j++;
            }
        }

        return j;
    };

    return v2();
};

// console.log(removeElement([3, 2, 2, 3]));
// -> 2, nums = [2, 2, _, _]

/**
 * # 3. Remove Duplicates from Sorted Array
 *
 * [leetcode](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of the
 * elements should be kept the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do
 * the following things:
 *
 * - Change the array nums such that the first k elements of nums contain the unique
 *   elements in the order they were present in nums initially. The remaining elements of
 *   nums are not important as well as the size of nums.
 *
 * - Return k.
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    const v1 = () => {
        // let seen = nums[0];
        // let j = 1;
        // for (let i = 1; i < nums.length; i++) {
        //     if (nums[i] === seen) {
        //         continue;
        //     } else {
        //         seen = nums[i];
        //         nums[j] = nums[i];
        //         j++
        //     }
        // }
        // console.log(nums)
        // return j;
    };

    const v2 = () => {
        let j = 0;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[j]) {
                nums[++j] = nums[i];
            }
        }

        return j + 1;
    };

    return v2();
};

// console.log(removeDuplicates([1, 1, 2]));
// -> 2, nums = [1, 2, _]

/**
 * # 4. Remove Duplicates from Sorted Array II
 *
 * [leetcode](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/)
 *
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates
 * in-place such that each unique element appears at most twice. The relative order of the
 * elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must
 * instead have the result be placed in the first part of the array nums. More formally,
 * if there are k elements after removing the duplicates, then the first k elements of
 * nums should hold the final result. It does not matter what you leave beyond the first k
 * elements.
 *
 * - Return k after placing the final result in the first k slots of nums.
 *
 * ### Do not allocate extra space for another array.
 * ### You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicatesII = function (nums) {
    const v1 = () => {
        // let count = 1;
        // let j = 0;
        // for (let i = 1; i < nums.length; i++) {
        //     if (nums[i] === nums[j]) {
        //         count++;
        //     } else {
        //         count = 1;
        //     }
        //     if (count < 3) {
        //         nums[++j] = nums[i];
        //     }
        // }
        // return j + 1;
    };

    const v2 = () => {
        let j = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== nums[i + 2]) {
                nums[j] = nums[i];
                j++;
            }
        }

        return j;
    };

    return v2();
};

// console.log(removeDuplicatesII([0, 0, 1, 1, 1, 1, 2, 3, 3]));
// -> 7, nums = [0, 0, 1, 1, 2, 3, 3, _, _];

/**
 * # 5. Majority Element
 *
 * [leetcode](https://leetcode.com/problems/majority-element/description/)
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may
 * assume that the majority element always exists in the array.
 *
 * ## Follow-up:
 * Could you solve the problem in linear time and in O(1) space?
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    const v1 = () => {
        // const map = {
        //     [nums[0]]: 1,
        // };
        // for (let i = 1; i < nums.length; i++) {
        //     if (map[nums[i]]) {
        //         map[nums[i]]++;
        //     } else {
        //         map[nums[i]] = 1;
        //     }
        // }
        // let high = 0;
        // let majority = null;
        // for (const key in map) {
        //     if (map[key] > high) {
        //         high = map[key];
        //         majority = key;
        //     }
        // }
        // return majority;
    };

    /**
     * Boyer-Moore Voting Algorithm.
     * Solve in linear time and in O(1) space.
     */
    const v2 = () => {
        let candidate = nums[0];
        let count = 1;

        for (let i = 1; i < nums.length; i++) {
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            } else if (nums[i] === candidate) {
                count++;
            } else {
                count--;
            }
        }

        return candidate;
    };

    return v2();
};

// console.log(majorityElement([3, 2, 3]));
// --> 3

/**
 * # 6. Rotate Array
 *
 * [leetcode](https://leetcode.com/problems/rotate-array/description/)
 *
 * Given an integer array nums, rotate the array to the right by k steps, where k is
 * non-negative.
 *
 * ## Follow-up:
 * Could you solve the problem in linear time and in O(1) space?
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    const v1 = () => {
        // let i = 0;
        // let j = null;
        // let temp = null;
        // while (i < nums.length) {
        //     j = i + k;
        //     if (j > nums.length - 1) {
        //         j = j - nums.length;
        //     }
        //     temp = nums[j];
        //     nums[j] = nums[i];
        //     nums[i] = temp;
        //     i++;
        // }
    };

    const v2 = () => {
        const copy = [...nums];

        let i = 0;
        let j = 0;
        while (i < copy.length) {
            j = i;

            for (let m = 1; m <= k; m++) {
                j++;
                if (j > copy.length - 1) {
                    j = 0;
                }
            }

            console.log(j);

            nums[j] = copy[i];
            console.log(nums);

            i++;
        }

        return nums;
    };

    return v2();
};

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// -> [5, 6, 7, 1, 2, 3, 4];

/**
 * # 7. Best Time to Buy and Sell Stock
 * [leetcode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith
 * day. You want to maximize your profit by choosing a single day to buy one stock and
 * choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve
 * any profit, return 0.
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let buy = prices[0];
    let transaction = null;
    let profit = 0;

    for (let i = 0, j = i + 1; i < prices.length - 1; i++, j++) {
        if (prices[i] < buy) {
            buy = prices[i];
        }

        if (prices[j] > buy) {
            transaction = prices[j] - buy;
        }

        if (transaction > profit) {
            profit = transaction;
        }
    }

    return profit ? profit : 0;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// -> 5
// console.log(maxProfit([7, 6, 4, 3, 1]));
// -> 0
