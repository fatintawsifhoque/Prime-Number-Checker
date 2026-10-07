# 🔢 Prime Number Checker 

A real-time, highly optimized Prime Number Checker built with **Vue 3** and **Tailwind CSS**. 

This project goes beyond a basic UI by implementing an $O(\sqrt{n})$ time-complexity algorithm and robustly handling JavaScript's tricky edge cases like `0`, `1`, and negative numbers.

---

### ✨ Features

- **Real-Time Validation:** Instantly checks if a number is Prime as the user types.
- **Optimized Algorithm:** Uses `Math.sqrt(num)` to check for factors, reducing time complexity from $O(n)$ to $O(\sqrt{n})$ for highly efficient performance on large numbers.
- **Edge Case Handling:** Correctly identifies `0`, `1`, negative numbers, and decimals as "Not Prime", avoiding the common JavaScript `!0` falsy trap.
- **Conditional Rendering:** Uses Vue's `v-if` to cleanly hide the result when the input is empty.

---

### ️ Tech Stack

- ⚡ **Vue 3** (Composition API with `<script setup>`)
- 🎨 **Tailwind CSS** (Utility-first styling)

---