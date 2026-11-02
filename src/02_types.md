# 🟦 TypeScript Notes — Part 2

## 🔍 5. Type Inference vs. Type Annotation

- 🤖 **Type Inference:** TypeScript value dekhkar type **khud samajh leta hai** (e.g. `"Ayush"` → string, `21` → number, `true` → boolean).
- ✍️ **Type Annotation:** Type **manually likhna**, jaise `: string`, `: number`, `: boolean`.

| 🤖 Inference | ✍️ Annotation |
|-------------|--------------|
| Automatic type detection | Manually type specify karna |
| Kam code | Zyada explicit |
| Assigned value par based | Declared type par based |

- ❌ Galat value assign karne par error aata hai, chahe annotation ho ya sirf inference. Example: number variable mein string dena.
- 📌 **Remember:** Jahan type clear ho wahan inference use karo. Function parameters aur complex data mein annotation use karo.

## 🧱 6. Basic Types

- 🔤 **string** → text store karta hai (name, city). Number dena error hai.
- 🔢 **number** → integers, decimals, negative sab ke liye. Alag `int` ya `float` type **nahi** hota.
- ✅ **boolean** → sirf `true` ya `false`. `"yes"` jaisi value error hai.

## 🎯 Quick Recap

- 🤖 Inference = automatic, ✍️ Annotation = manual.
- 🚫 Type mismatch par TypeScript error deta hai.
- 🧩 Teen primitive types: **string**, **number**, **boolean**.

Happy Coding! 💙🚀