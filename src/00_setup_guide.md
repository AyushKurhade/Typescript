# 🟦 TypeScript Notes

## 🔄 1. The Emitter (Generating JavaScript)

- 🌐 Browsers aur Node.js sirf **JavaScript** samajhte hain, TypeScript nahi.
- 🔁 Isliye `.ts` code ko `.js` mein convert karna padta hai (**compilation / transpilation**).
- 🧹 Type annotations (`string`, `number`) output mein **hat jaate hain**.
- 🏭 **Emitter** compiler ka woh part hai jo output files banata hai: `.js`, `.js.map` (source maps), `.d.ts` (declarations).
- ⚠️ Types runtime par automatically check **nahi** hote.

## 🛠️ 2. Project Setup & Installation

1. ✅ Node check karo: `node -v` aur `npm -v`
2. 📁 Folder banao aur `npm init -y` chalao
3. 📥 TypeScript install karo: `npm install -D typescript`
4. ✍️ `app.ts` file create karo

## 📄 3. Generating tsconfig.json

- ⚙️ Compiler ki configuration file hai (isme app code nahi hota).
- ⌨️ Generate karne ke liye: `npx tsc --init`

| Option | Meaning |
|--------|---------|
| `target` | Kaunsa JavaScript version generate ho |
| `module` | Module system |
| `strict` | Strict type checking |
| `outDir` | Compiled JS ka folder |

## ▶️ 4. Running TypeScript (tsc)

- 🏗️ Poora project compile: `npx tsc`
- 🎯 Ek file compile: `npx tsc app.ts`
- 🏃 Output run: `node app.js`
- 👁️ Auto recompile on save: `npx tsc --watch`

## 🧠 5. Quick Revision

- ❓ Kya browser TypeScript directly run kar sakta hai? **No** ✅
- ❓ `tsconfig.json` kaunsa command banata hai? **`npx tsc --init`** ✅
- ❓ Emitter kya generate karta hai? **JavaScript output** ✅

🏆 **Score: 3/3**

## ✅ 6. Key Takeaways

- 🔄 `tsc` TypeScript ko JavaScript mein compile karta hai.
- 🧹 Types compile hone par erase ho jaate hain.
- ⚙️ `tsconfig.json` compiler ka behaviour control karta hai.

