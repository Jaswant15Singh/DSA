# Array Interview Questions (Easy–Medium)

A curated list of 45 array-based coding interview questions, grouped by theme. Hard-level questions are intentionally excluded — this set is focused on the core patterns most commonly tested in early-to-mid interview rounds.

## How to Use This List

- Work through each section in order — later sections build on patterns introduced earlier (e.g., two pointers before sliding window, sliding window before prefix sums).
- Time yourself: aim for 15–20 minutes per easy question and 25–35 minutes per medium question.
- Don't just solve — explain your approach out loud (or in comments) as if in a real interview.
- Revisit missed questions after a few days to check retention.

## Sections

| # | Section | Difficulty | Focus |
|---|---------|-----------|-------|
| 1 | Basics & Traversal | Easy | Fundamentals, in-place operations |
| 2 | Searching | Easy–Medium | Binary search variants |
| 3 | Two Pointers / Sliding Window | Medium | Subarray/pair problems |
| 4 | Subarrays & Prefix Sums | Medium | Cumulative sum tricks |
| 5 | Sorting-Based | Medium | Merge, intervals, majority element |
| 6 | Matrix / 2D Array | Medium | Grid traversal and manipulation |
| 7 | Miscellaneous | Easy–Medium | Common odds-and-ends patterns |

## Questions

### 1. Basics & Traversal (Easy)
1. Find the largest and second-largest element in an array.
2. Find the smallest and second-smallest element in an array.
3. Reverse an array in place.
4. Check if an array is sorted (ascending or descending).
5. Find the sum and average of array elements.
6. Rotate an array left/right by k positions.
7. Move all zeros to the end while keeping order of non-zero elements.
8. Find the missing number in an array of 1 to N.
9. Find the duplicate number in an array.
10. Count the frequency of each element in an array.

### 2. Searching (Easy–Medium)
11. Implement binary search on a sorted array.
12. Find the first and last occurrence of a target element.
13. Search in a rotated sorted array.
14. Find the peak element in an array.
15. Find the floor and ceiling of a target value in a sorted array.

### 3. Two Pointers / Sliding Window (Medium)
16. Two Sum — find two numbers that add up to a target.
17. Find a triplet that sums to zero (3Sum).
18. Find the pair with the given difference.
19. Maximum sum subarray of size k (sliding window).
20. Longest subarray with sum equal to k.
21. Find the smallest subarray with a sum greater than a given value.
22. Container with most water problem.
23. Sort an array of 0s, 1s, and 2s (Dutch National Flag).
24. Remove duplicates from a sorted array in place.

### 4. Subarrays & Prefix Sums (Medium)
25. Maximum subarray sum (Kadane's Algorithm).
26. Find the subarray with a given sum (non-negative numbers).
27. Count subarrays with sum equal to k.
28. Find the equilibrium index of an array.
29. Maximum product subarray.
30. Find the length of the longest increasing subsequence.

### 5. Sorting-Based (Medium)
31. Merge two sorted arrays without extra space.
32. Merge overlapping intervals.
33. Find the intersection of two arrays.
34. Find the union of two arrays.
35. Find all elements that appear more than n/3 times (majority element).
36. Find the majority element (appears more than n/2 times) — Boyer-Moore voting.

### 6. Matrix / 2D Array (Medium)
37. Rotate a matrix by 90 degrees in place.
38. Print a matrix in spiral order.
39. Search an element in a row-wise and column-wise sorted matrix.
40. Set matrix rows and columns to zero if an element is zero.

### 7. Miscellaneous (Easy–Medium)
41. Find all pairs with a given sum in an array.
42. Rearrange array elements alternately (positive/negative).
43. Find the leaders in an array (elements greater than all elements to their right).
44. Trapping rain water problem.
45. Find the maximum difference between two elements such that larger comes after smaller (best time to buy/sell stock).

## Priority Guide

- **Sections 1–2 (Q1–15):** Good as warm-up or phone-screen questions.
- **Sections 3–4 (Q16–30):** Most frequently asked in real interviews (FAANG-style rounds).
- **Sections 5–6 (Q31–40):** Common in second-round or onsite interviews.
- **Section 7 (Q41–45):** Rounds out pattern coverage; mix of easy and medium.

## Suggested Study Plan (2 Weeks)

| Days | Focus |
|------|-------|
| 1–2 | Basics & Traversal (Q1–10) |
| 3–4 | Searching (Q11–15) |
| 5–7 | Two Pointers / Sliding Window (Q16–24) |
| 8–9 | Subarrays & Prefix Sums (Q25–30) |
| 10–11 | Sorting-Based (Q31–36) |
| 12 | Matrix / 2D Array (Q37–40) |
| 13–14 | Miscellaneous + full review (Q41–45) |

## Notes

- Question 44 (Trapping Rain Water) leans slightly harder than the rest — skip it if you want to stay strictly at easy/medium.
- Practice writing solutions in your primary interview language (Python, Java, C++, or JavaScript) under time pressure.
- Once comfortable, try solving each question with an optimal time/space complexity, then explain trade-offs vs. a brute-force approach.