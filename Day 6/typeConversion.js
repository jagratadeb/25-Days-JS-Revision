// Type conversion demo: string + number vs number + string
const a = "3" + 2; // "32" → string concatenation
const b = 3 + "2"; // "32" → same as above
const c = 3 + 2 + "1"; // "51" → number addition first, then string
const d = "1" + 3 + 2; // "132" → string conversion dominates

console.log({ a, b, c, d });

// Boolean conversion
const e = +true; // 1 → unary plus converts boolean to number
const f = +false; // 0
const g = +"hello"; // NaN → string can't convert to number

console.log({ e, f, g });

// Clean alternative using explicit conversion
const h = Number("42"); // 42
const i = String(42); // "42"
const j = Boolean(0); // false

console.log({ h, i, j });
