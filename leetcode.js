/**
 * Top 150 Interview Questions.
 */

/**
 * 1. Merge Sorted Array.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
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

    console.log(nums1, { k });
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
// merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 4], 3);
// merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5);

/**
 * 2.Remove Element
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = nums.length - 1;
    let temp;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            temp = nums[i];

            nums[i] = nums[j];
            nums[j] = temp;

            j--;
        }
    }

    const k = j + 1;
    return k;
};

// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

var removeElement2 = function (nums, val) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};

// console.log(removeElement2([0, 1, 2, 2, 3, 0, 4, 2], 2));

/**
 * 3. Remove Duplicates from Sorted Array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
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

    let j = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            nums[++j] = nums[i];
        }
    }

    return j + 1;
};

// console.log(removeDuplicates([1, 1, 2]));

/**
 * 4.Remove Duplicates from Sorted Array II
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function (nums) {

};

console.log(removeDuplicates2[0,0,1,1,1,1,2,3,3] ) // 7 [0,0,1,1,2,3,3,_,_]
