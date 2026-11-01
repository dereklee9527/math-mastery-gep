global.window = globalThis; window.Fig = {};
const path = require("path");
const base = path.join(__dirname);
require(base + "/js/data.js");
["qgen.js","qgen_junior.js","qgen_high.js","qgen_elementary_extra.js","qgen_gep.js","data_sg.js","data_sg2.js","qgen_sg.js","qgen_sg2.js"].forEach(f => require(base + "/js/" + f));
const g = window.TECHNIQUES.filter(t => t.stage === "GEP拓展");

// independent re-derivation of each static example
let ok = true;
const t = id => g.find(x => x.id === id);
// static q0/q1 checks:
const assert = (name, got, want) => { const p = got === want; if (!p) ok = false; console.log((p ? "PASS " : "FAIL ") + name + ": " + got); };

// gep_worst static q0: 3 colors x 6, guarantee 2 same -> worst 3(all diff)+1=4
let q = t("gep_worst").questions[0]; assert("worst static q0", q.opts[q.ans], "4");
q = t("gep_worst").questions[1];
assert("worst static q1 ceil(50/12)", q.opts[q.ans], "5 人");

// game static q0: 15 mod 3 = 0 -> 后手
q = t("gep_game").questions[0]; assert("game static q0", q.opts[q.ans], "后手");
// game static q1: 22 mod 4 = 2, dp(22,3)=win -> first must take 2
q = t("gep_game").questions[1]; assert("game static q1", q.opts[q.ans], "2 根");

// logic static q1 chain: 小美>小杰>小婷>小雨 top=小美
q = t("gep_logic").questions[1]; assert("logic static q1", q.opts[q.ans], "小美");
// logic static q0: solve independently
let sols = [];
for (let tt = 0; tt < 3; tt++) {
  // exactly one truth-teller tt, others' statements must be false
  const c0 = tt !== 1, c1 = tt !== 2, c2 = tt !== 0 && tt !== 1;
  const own = [c0, c1, c2][tt];
  const others = [c0, c1, c2].filter((_, i) => i !== tt);
  if (own && others.every(x => !x)) sols.push(tt);
}
q = t("gep_logic").questions[0];
assert("logic static q0 unique solver", String(sols.length), "1");
assert("logic static q0 answer", "甲乙丙"[sols[0]], q.opts[q.ans]);

// magic static q0: 1-9 magic sum = 45/3 = 15
q = t("gep_magic").questions[0]; assert("magic static q0", q.opts[q.ans], "15");
q = t("gep_magic").questions[1]; assert("magic static q1", q.opts[q.ans], "2"); // 7+6+d=15

// crypt static: □3+6□=107 -> 11d+63=107 -> d=4; check digits distinct
q = t("gep_digitcrypt").questions[0];
assert("crypt static q0", String((10 * (+q.opts[q.ans]) + 3) + (60 + (+q.opts[q.ans]))), "107");
q = t("gep_digitcrypt").questions[1];
assert("crypt static q1", String((10 * (+q.opts[q.ans]) + 1) + (90 + (+q.opts[q.ans]))), "113");

// clock static q0: 3:20 -> |90-110|=20
q = t("gep_clock").questions[0]; assert("clock static q0", q.opts[q.ans], "20°");
// clock static q1: 90/5.5 = 16.36
q = t("gep_clock").questions[1]; assert("clock static q1", q.opts[q.ans], "约 3 点 16.4 分");

// count static: 2*3=6
q = t("gep_count").questions[0]; assert("count static q0", q.opts[q.ans], "6 种");
q = t("gep_count").questions[1]; assert("count static q1", q.opts[q.ans], "6 种");

// permcomb static q0: A(5,2)=20
q = t("gep_permcomb").questions[0]; assert("permcomb static q0", q.opts[q.ans], "20");
q = t("gep_permcomb").questions[1]; assert("permcomb static q1", q.opts[q.ans], "20");

console.log("\nALL STATIC STATIC-CHECKS:", ok ? "PASS" : "FAIL");
console.log("sample generated question per module:");
g.forEach(x => { const s = x.qgen(1)[0]; if (s) console.log(" -", x.name, "->", s.q.slice(0, 60), "| fig:", s.fig ? s.fig.name : "(none)"); });
