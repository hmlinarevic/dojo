/**
 * ALGO: 1. Contains Duplicate
 *
 * [leetcode](https://leetcode.com/problems/contains-duplicate/description/)
 *
 * Given an integer array nums, return true if any value appears more than once in the
 * array, otherwise return false.
 */
const hasDuplicate = (nums) => {
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    const v1 = () => {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            if (!map[nums[i]]) {
                map[nums[i]] = true;
            } else {
                return true;
            }
        }

        return false;
    };

    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    const v2 = () => {
        const set = new Set();

        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) {
                return true;
            } else {
                set.add(nums[i]);
            }
        }

        return false;
    };

    return v2();
};

// console.log("hasDuplicate:", hasDuplicate([1, 2, 3, 3]));
// -> true

/**
 * ALGO: 2. Valid Anagram
 *
 * [leetcode](https://leetcode.com/problems/valid-anagram/description/)
 *
 * Given two strings s and t, return true if the two strings are anagrams of each other,
 * otherwise return false.
 *
 * An anagram is a string that contains the exact same characters as another string, but
 * the order of the characters can be different.
 */
const isAnagram = (s, t) => {
    /**
     * v1
     */
    const v1 = () => {
        const mapStringChars = (string) => {
            const map = {};

            for (let i = 0; i < string.length; i++) {
                if (!map[string[i]]) {
                    map[string[i]] = 1;
                } else {
                    map[string[i]]++;
                }
            }

            return map;
        };

        const mapS = Object.entries(mapStringChars(s));
        const mapT = Object.entries(mapStringChars(t));

        const isEqualS = mapS.every((x) => {
            return mapT.find((y) => y[0] === x[0] && y[1] === x[1]);
        });

        const isEqualT = mapT.every((x) => {
            return mapS.find((y) => y[0] === x[0] && y[1] === x[1]);
        });

        return isEqualS && isEqualT;
    };

    /**
     * v2
     * Time Complexity: O(n + m)
     * Space Complexity: O(n + m)
     */
    const v2 = () => {
        // included guard
        if (s.length !== t.length) return false;

        const mapStringChars = (string) => {
            const map = {};

            for (let i = 0; i < string.length; i++) {
                if (!map[string[i]]) {
                    map[string[i]] = 1;
                } else {
                    map[string[i]]++;
                }
            }

            return map;
        };

        const mapS = mapStringChars(s);
        const mapT = mapStringChars(t);

        for (const char in mapS) {
            // simplified checks
            if (mapT[char] !== mapS[char]) return false;
        }

        return true;
    };

    /**
     * v3
     */
    const v3 = () => {
        if (s.length !== t.length) return false;

        const sortedS = s.split("").sort();
        const sortedT = t.split("").sort();

        for (let i = 0; i < sortedS.length; i++) {
            if (sortedS[i] !== sortedT[i]) return false;
        }

        return true;
    };

    return v2();
};

// console.log("isAnagram: ", isAnagram("😇tar", "rat😇"));

/**
 * ALGO: 3. Two Sum
 *
 * [leetcode](https://leetcode.com/problems/two-sum/description/)
 *
 * Given an array of integers nums and an integer target, return the indices i and j such
 * that nums[i] + nums[j] == target and i != j.
 *
 * You may assume that every input has exactly one pair of indices i and j that satisfy the
 * condition.
 *
 * Return the answer with the smaller index first.
 */
const twoSum = (nums, target) => {
    /**
     *
     * Time Complexity: O(n²)
     * Space Complexity: O(1)
     */
    const v1 = () => {
        for (let i = 0; i < nums.length; i++) {
            const num1 = nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                const num2 = nums[j];
                if (num1 + num2 === target) {
                    return num1 < num2 ? [i, j] : [j, i];
                }
            }
        }
    };

    /**
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    const v2 = () => {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            const key = target - nums[i];
            const j = map[key];

            if (j === 0 || j) {
                return j < i ? [j, i] : [i, j];
            }

            map[nums[i]] = i;
        }
    };

    return v2();
};

// console.log("twoSum:", twoSum([5, 5], 10));
// -> 7

/**
 * ALGO: 4. Group Anagrams
 *
 * [leetcode](https://leetcode.com/problems/group-anagrams/description/)
 *
 * Given an array of strings strs, group all anagrams together into sublists. You may
 * return the output in any order.
 *
 * An anagram is a string that contains the exact same characters as another string, but
 * the order of the characters can be different.
 */
const groupAnagrams = (strs) => {
    /**
     * Using isAnagrams()
     */
    const v1 = () => {
        const results = [];

        for (let i = 0; i < strs.length; i++) {
            if (results.find((anagrams) => anagrams.find((x) => isAnagram(x, strs[i]))))
                continue;

            const anagrams = [];
            anagrams.push(strs[i]);

            for (let j = i + 1; j < strs.length; j++) {
                if (isAnagram(strs[i], strs[j])) {
                    anagrams.push(strs[j]);
                }
            }

            results.push(anagrams);
        }

        console.log(results);
        return results;
    };

    /**
     * v2
     */
    const v2 = () => {
        const map = {};

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i].split("").sort().join("");

            if (map[word]) {
                map[word].push(strs[i]);
            } else {
                map[word] = [strs[i]];
            }
        }

        return Object.values(map);
    };

    /**
     * v3
     * Time Complexity: O(n * m)
     * Space Complexity: O(n * m)
     */
    const v3 = () => {
        const map = {};
        const asciiCharA = "a".charCodeAt();

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const chars = [];

            for (let j = 0; j < word.length; j++) {
                const index = word[j].charCodeAt() - asciiCharA;

                if (chars[index]) {
                    chars[index]++;
                } else {
                    chars[index] = 1;
                }
            }

            if (map[chars]) {
                map[chars].push(word);
            } else {
                map[chars] = [word];
            }
        }

        console.log({ map });

        return Object.values(map);
    };

    return v3();
};

console.log(
    "groupAnagrams: ",
    groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"])
    // groupAnagrams(["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"])
);
// -> [["hat"],["act", "cat"],["stop", "pots", "tops"]]
